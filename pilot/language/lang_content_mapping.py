## 短期内在该文件中配置，长期考虑将会存储在默认的数据库中存储，并可以支持多种语言的配置

lang_dicts = {
    "zh": {
        "unique_id": "中文内容",
        "db_gpt_introduction": "[DB-GPT](https://github.com/csunny/DB-GPT) 是一个开源的以数据库为基础的GPT实验项目，使用本地化的GPT大模型与您的数据和环境进行交互，无数据泄露风险，100% 私密，100% 安全。",
        "learn_more_markdown": "该服务是仅供非商业用途的研究预览。受 Vicuna-13B 模型 [License](https://github.com/facebookresearch/llama/blob/main/MODEL_CARD.md) 的约束",
        "model_control_param": "模型参数",
        "sql_generate_mode_direct": "直接执行结果",
        "sql_generate_mode_none": "db问答",
        "max_input_token_size": "最大输出Token数",
        "please_choose_database": "请选择数据",
        "sql_generate_diagnostics": "SQL生成与诊断",
        "knowledge_qa_type_llm_native_dialogue": "LLM原生对话",
        "knowledge_qa_type_default_knowledge_base_dialogue": "默认知识库对话",
        "knowledge_qa_type_add_knowledge_base_dialogue": "新增知识库对话",
        "knowledge_qa_type_url_knowledge_dialogue": "URL网页知识对话",
        "create_knowledge_base": "新建知识库",
        "sql_schema_info": "数据库{}的Schema信息如下: {}\n",
        "current_dialogue_mode": "当前对话模式",
        "database_smart_assistant": "数据库智能助手",
        "sql_vs_setting": "自动执行模式下, DB-GPT可以具备执行SQL、从网络读取知识自动化存储学习的能力",
        "knowledge_qa": "知识问答",
        "chat_use_plugin": "插件模式",
        "dialogue_use_plugin": "对话使用插件",
        "select_plugin": "选择插件",
        "configure_knowledge_base": "配置知识库",
        "new_klg_name": "新知识库名称",
        "url_input_label": "输入网页地址",
        "add_as_new_klg": "添加为新知识库",
        "add_file_to_klg": "向知识库中添加文件",
        "upload_file": "上传文件",
        "add_file": "添加文件",
        "upload_and_load_to_klg": "上传并加载到知识库",
        "upload_folder": "上传文件夹",
        "add_folder": "添加文件夹",
        "send": "发送",
        "regenerate": "重新生成",
        "clear_box": "清理",
    },
    "en": {
        "unique_id": "English Content",
        "db_gpt_introduction": "[DB-GPT](https://github.com/csunny/DB-GPT) is an experimental open-source project that uses localized GPT large models to interact with your data and environment. With this solution, you can be assured that there is no risk of data leakage, and your data is 100% private and secure.",
        "learn_more_markdown": "The service is a research preview intended for non-commercial use only. subject to the model [License](https://github.com/facebookresearch/llama/blob/main/MODEL_CARD.md) of Vicuna-13B",
        "model_control_param": "Model Parameters",
        "sql_generate_mode_direct": "Execute directly",
        "sql_generate_mode_none": "chat to db",
        "max_input_token_size": "Maximum output token size",
        "please_choose_database": "Please choose database",
        "sql_generate_diagnostics": "SQL Generation & Diagnostics",
        "knowledge_qa_type_llm_native_dialogue": "LLM native dialogue",
        "knowledge_qa_type_default_knowledge_base_dialogue": "Default documents",
        "knowledge_qa_type_add_knowledge_base_dialogue": "New documents",
        "knowledge_qa_type_url_knowledge_dialogue": "Chat with url",
        "dialogue_use_plugin": "Dialogue Extension",
        "create_knowledge_base": "Create Knowledge Base",
        "sql_schema_info": "the schema information of database {}: {}\n",
        "current_dialogue_mode": "Current dialogue mode",
        "database_smart_assistant": "Database smart assistant",
        "sql_vs_setting": "In the automatic execution mode, DB-GPT can have the ability to execute SQL, read data from the network, automatically store and learn",
        "chat_use_plugin": "Plugin Mode",
        "select_plugin": "Select Plugin",
        "knowledge_qa": "Documents Chat",
        "configure_knowledge_base": "Configure Documents",
        "url_input_label": "Please input url",
        "new_klg_name": "New document name",
        "add_as_new_klg": "Add as new documents",
        "add_file_to_klg": "Add file to documents",
        "upload_file": "Upload file",
        "add_file": "Add file",
        "upload_and_load_to_klg": "Upload and load to documents",
        "upload_folder": "Upload folder",
        "add_folder": "Add folder",
        "send": "Send",
        "regenerate": "Regenerate",
        "clear_box": "Clear",
    },
}


def get_lang_content(key, language="zh"):
    return lang_dicts.get(language, {}).get(key, "")
