import os
import time
from dotenv import load_dotenv
import streamlit as st
# from typing import Union
# from fastapi import FastAPI
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
from langchain_text_splitters.character import RecursiveCharacterTextSplitter
from langchain_text_splitters.character import CharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain_groq import ChatGroq
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain_pinecone import Pinecone as Pinecone1
from pinecone import Pinecone as Pinecone2
from pinecone import ServerlessSpec
import warnings
warnings.filterwarnings('ignore')
load_dotenv()


# app = FastAPI()

api_key = os.getenv("PINECONE_API_KEY")
pc = Pinecone2(api_key=api_key)


##Read the Document 
def read_doc(directory):
    file_loader=PyPDFDirectoryLoader(directory)
    documents=file_loader.load()
    return documents
doc=read_doc('uploads/')

# print(doc)
# print(len(doc))


# # CHUNKING Of The Data
def chunk_data(docs,chunk_size=800,chunk_overlap=80):
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=chunk_size,chunk_overlap=chunk_overlap)
    chunked_docs=text_splitter.split_documents(docs)
    return chunked_docs
chunked_docs=chunk_data(doc)
# print(chunked_docs)
# print(len(chunked_docs))

embeddings = HuggingFaceEmbeddings()
vectors=embeddings.embed_documents("How is me ?")
# print(vectors)
# print(len(vectors))


index_name="budget"

# wait a moment for connection
time.sleep(1)
# index_status=index.describe_index_stats()
# print(index_status)
list= index_list=pc.list_indexes()
# print(index_list)
if index_name  == list[0].name:
    print(f"Index '{index_name}' exists. Loading the index.")
    # index = pc.Index(index_name)
    index = Pinecone1(index_name=index_name)
else:
    print(f"Index '{index_name}' not found. Creating a new index.")
    index=Pinecone1.from_documents(doc,embeddings,index_name=index_name)





# print(index)

llm = ChatGroq(
        model="llama-3.1-70b-versatile",
        temperature=0
    )
chain=load_qa_chain(llm,chain_type="stuff")

def retrieve_query(query,k=2):
    matching_result=index.similarity_search(query=query,k=k)
    print("Matching Results:", matching_result)
    return matching_result
# print("----------------------------->>>>>>>>>>>>>>")
# print(retrive_query(query="Who is Ansuman"))

def retrieve_answer(query):
    doc_search=retrieve_query(query)
    # print(doc_search)
    answer=chain.run(input_documents=doc_search,question=query)
    return answer
# Give me the student names 
our_query = "Tell me about Ayan "
answer = retrieve_answer(our_query)
print(answer)    