#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from abc import ABC, abstractmethod
from typing import Dict, List, Optional
from pilot.configs.config import Config
from pilot.vector_store.connector import VectorStoreConnector

registered_methods = []
CFG = Config()


def register(method):
    registered_methods.append(method.__name__)
    return method


class SourceEmbedding(ABC):
    """base class for read data source embedding pipeline.
    include data read, data process, data split, data to vector, data index vector store
    Implementations should implement the  method
    """

    def __init__(
        self,
        file_path,
        model_name,
        vector_store_config,
        embedding_args: Optional[Dict] = None,
    ):
        """Initialize with Loader url, model_name, vector_store_config"""
        self.file_path = file_path
        self.model_name = model_name
        self.vector_store_config = vector_store_config
        self.embedding_args = embedding_args
        self.embeddings = vector_store_config["embeddings"]
        self.vector_client = VectorStoreConnector(
            CFG.VECTOR_STORE_TYPE, vector_store_config
        )

    @abstractmethod
    @register
    def read(self) -> List[ABC]:
        """read datasource into document objects."""

    @register
    def data_process(self, text):
        """pre process data."""

    @register
    def text_split(self, text):
        """text split chunk"""
        pass

    @register
    def text_to_vector(self, docs):
        """transform vector"""
        pass

    @register
    def index_to_store(self, docs):
        """index to vector store"""
        self.vector_client.load_document(docs)

    @register
    def similar_search(self, doc, topk):
        """vector store similarity_search"""
        return self.vector_client.similar_search(doc, topk)

    def source_embedding(self):
        if "read" in registered_methods:
            text = self.read()
        if "data_process" in registered_methods:
            text = self.data_process(text)
        if "text_split" in registered_methods:
            self.text_split(text)
        if "text_to_vector" in registered_methods:
            self.text_to_vector(text)
        if "index_to_store" in registered_methods:
            self.index_to_store(text)

    def batch_embedding(self):
        if "read_batch" in registered_methods:
            text = self.read_batch()
        if "data_process" in registered_methods:
            text = self.data_process(text)
        if "text_split" in registered_methods:
            self.text_split(text)
        if "text_to_vector" in registered_methods:
            self.text_to_vector(text)
        if "index_to_store" in registered_methods:
            self.index_to_store(text)
