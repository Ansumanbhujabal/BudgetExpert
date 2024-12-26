import os
import time
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import streamlit as st
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
from langchain_text_splitters.character import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from pinecone import Pinecone
from pinecone import ServerlessSpec
from langchain.chains.question_answering import load_qa_chain
from langchain_pinecone import PineconeVectorStore
from langchain_groq import ChatGroq
import warnings
warnings.filterwarnings('ignore')
load_dotenv()

# Load environment variables
api_key = os.getenv("PINECONE_API_KEY")
if not api_key:
    raise ValueError("PINECONE_API_KEY is not set in the .env file.")

# Initialize Pinecone
api_key = os.getenv("PINECONE_API_KEY")
pc = Pinecone(api_key=api_key)
index_name = "budget"

existing_indexes = [index_info["name"] for index_info in pc.list_indexes()]
print(existing_indexes)

if index_name not in existing_indexes:
    pc.create_index(
        name=index_name,
        dimension=3072,
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1"),
    )
    while not pc.describe_index(index_name).status["ready"]:
        time.sleep(1)
        print("already")
index = pc.Index(index_name)

# FastAPI app
app = FastAPI()

# Initialize LLM
# llm = ChatGroq(model="llama-3.1-70b-versatile", temperature=0)
llm = ChatGroq(
        model="llama-3.1-70b-versatile",
        temperature=0
    )
chain = load_qa_chain(llm, chain_type="stuff")

# Load documents
def read_doc(directory):
    file_loader = PyPDFDirectoryLoader(directory)
    documents = file_loader.load()
    return documents

doc = read_doc("uploads/")

# Chunk documents
def chunk_data(docs, chunk_size=800, chunk_overlap=80):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    chunked_docs = text_splitter.split_documents(docs)
    return chunked_docs

chunked_docs = chunk_data(doc)
print(len(chunked_docs))

# Embed documents
embeddings = HuggingFaceEmbeddings()
index = Pinecone1.from_documents(chunked_docs, embeddings, index_name=index_name)
print(index)
# API input model
class Query(BaseModel):
    query: str
    top_k: int = 2

# Function to retrieve matching documents
def retrieve_query(query: str, k: int = 2):
    matching_result = index.similarity_search(query=query, k=k)
    # print(matching_result)
    return matching_result
# print(retrieve_query("Tell me about Ansuman",2))
# Function to get an answer
def retrieve_answer(query: str):
    try:
        doc_search = retrieve_query(query)
        answer = chain.run(input_documents=doc_search, question=query)
        return answer
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
print(retrieve_answer("Tell me about Ansuman"))    

# FastAPI endpoints
# @app.post("/query")
# async def query_documents(query: Query):
#     """
#     Query the document index and retrieve an answer.
#     """
#     answer = retrieve_answer(query)
#     print(answer)
#     return {"query": query, "answer": answer}
