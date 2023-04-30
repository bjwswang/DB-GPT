#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import uvicorn
import asyncio
import json
from typing import Optional, List
from fastapi import FastAPI, Request, BackgroundTasks
from fastapi.responses import StreamingResponse
from fastchat.serve.inference import generate_stream
from pydantic import BaseModel
from pilot.model.inference import generate_output, get_embeddings
from fastchat.serve.inference import load_model
from pilot.model.loader import ModerLoader
from pilot.configs.model_config import *

model_path = llm_model_config[LLM_MODEL] 


global_counter = 0
model_semaphore = None

# ml = ModerLoader(model_path=model_path)
# model, tokenizer = ml.loader(load_8bit=isload_8bit, debug=isdebug)

model, tokenizer = load_model(model_path=model_path, device=DEVICE, num_gpus=1, load_8bit=True, debug=False)
app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str
    temperature: float
    max_new_tokens: int
    stop: Optional[List[str]] = None


class StreamRequest(BaseModel):
    model: str
    prompt: str
    temperature: float
    max_new_tokens: int
    stop: str

class EmbeddingRequest(BaseModel):
    prompt: str

def release_model_semaphore():
    model_semaphore.release()


def generate_stream_gate(params):
    try:
        for output in generate_stream(
            model, 
            tokenizer,
            params,
            DEVICE,
            MAX_POSITION_EMBEDDINGS,
        ):
            print("output: ", output)
            ret = {
                "text": output,
                "error_code": 0,
            }
            yield json.dumps(ret).encode() + b"\0"
    except torch.cuda.CudaError:
        ret = {
            "text": "**GPU OutOfMemory, Please Refresh.**",
            "error_code": 0
        }
        yield json.dumps(ret).encode() + b"\0"


@app.post("/generate_stream")
def api_generate_stream(request: StreamRequest):
    global model_semaphore, global_counter
    global_counter += 1
    params = {
        "prompt": request.prompt,
        "model": request.model,
        "temperature": request.temperature,
        "max_new_tokens": request.max_new_tokens,
        "stop": request.stop
    }
    print(model, tokenizer, params, DEVICE) 
    # if model_semaphore is None:
    #     model_semaphore = asyncio.Semaphore(LIMIT_MODEL_CONCURRENCY)
    
    generator = generate_stream_gate(params)
    background_tasks = BackgroundTasks()
    background_tasks.add_task(release_model_semaphore)
    return StreamingResponse(generator, background=background_tasks)

@app.post("/generate")
def generate(prompt_request: PromptRequest):
    params = {
        "prompt": prompt_request.prompt,
        "temperature": prompt_request.temperature,
        "max_new_tokens": prompt_request.max_new_tokens,
        "stop": prompt_request.stop
    }

    print("Receive prompt: ", params["prompt"])
    output = generate_output(model, tokenizer, params, DEVICE)
    print("Output: ", output)
    return {"response": output}


@app.post("/embedding")
def embeddings(prompt_request: EmbeddingRequest):
    params = {"prompt": prompt_request.prompt}
    print("Received prompt: ", params["prompt"])
    output = get_embeddings(model, tokenizer, params["prompt"])
    return {"response": [float(x) for x in output]}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", log_level="info") 