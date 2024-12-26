# import os
# import time
# from dotenv import load_dotenv
# import streamlit as st
# from langchain_community.document_loaders import PyPDFLoader
# from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
# from langchain_text_splitters.character import RecursiveCharacterTextSplitter
# from langchain_community.embeddings import HuggingFaceEmbeddings
# from langchain.memory import ConversationBufferMemory
# from langchain.chains import ConversationalRetrievalChain
# from pinecone import Pinecone
# from pinecone import ServerlessSpec
# from langchain.chains.question_answering import load_qa_chain
# from langchain_pinecone import PineconeVectorStore
# from langchain_groq import ChatGroq
# import warnings
# warnings.filterwarnings('ignore')
# load_dotenv()


# # app = FastAPI()

# api_key = os.getenv("PINECONE_API_KEY")
# pc = Pinecone(api_key=api_key)


# ##Read the Document 
# def read_doc(directory):
#     file_loader=PyPDFDirectoryLoader(directory)
#     documents=file_loader.load()
#     return documents
# doc=read_doc('uploads/')

# # print(doc)
# print(f" The length of the doc is {len(doc)}")


# # # CHUNKING Of The Data
# def chunk_data(docs,chunk_size=800,chunk_overlap=80):
#     text_splitter=RecursiveCharacterTextSplitter(chunk_size=chunk_size,chunk_overlap=chunk_overlap)
#     chunked_docs=text_splitter.split_documents(docs)
#     return chunked_docs
# chunked_docs=chunk_data(doc)
# # print(chunked_docs)
# print(f" The length of the Chunked Docs is {len(chunked_docs)}")

# embeddings = HuggingFaceEmbeddings()
# vectors=embeddings.embed_documents("How is me ?")
# print(f"The vector is {vectors}")
# print(f"The length of the vector is {len(vectors)}")




# index_name="budget"  

# existing_indexes = [index_info["name"] for index_info in pc.list_indexes()]
# print(f"The names of existing indexes are {existing_indexes}")

# if index_name not in existing_indexes:
#     pc.create_index(
#         name=index_name,
#         dimension=3072,
#         metric="cosine",
#         spec=ServerlessSpec(cloud="aws", region="us-east-1"),
#     )
#     index = PineconeVectorStore.from_documents(
#         chunked_docs,
#         index_name=index_name,
#         embedding=embeddings
#     )
#     while not pc.describe_index(index_name).status["ready"]:
#         time.sleep(1)
#         print("already")
# index = pc.Index(index_name)
# print(f"The index name is {index}")
# index = PineconeVectorStore.from_existing_index(
#         index_name=index_name,
#         embedding=embeddings
#     )



# # print(index)

# llm = ChatGroq(
#         model="llama-3.1-70b-versatile",
#         temperature=0
#     )
# chain=load_qa_chain(llm,chain_type="stuff")

# def retrieve_query(query,k=2):
#     matching_result=index.similarity_search(query=query,k=k)
#     print("Matching Results:", matching_result)
#     return matching_result
# # print("----------------------------->>>>>>>>>>>>>>")
# # print(retrive_query(query="Who is Ansuman"))

# def retrieve_answer(query):
#     doc_search=retrieve_query(query)
#     # print(doc_search)
#     answer=chain.run(input_documents=doc_search,question=query)
#     return answer
# # Give me the student names 
# our_query = "Tell me about the Document "
# answer = retrieve_answer(our_query)
# print(answer)    




##################################v2######################

import os
import time
from dotenv import load_dotenv
import streamlit as st
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
from langchain.text_splitters import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from pinecone import Pinecone
from pinecone import ServerlessSpec
from langchain.chains.question_answering import load_qa_chain
from langchain.vectorstores import PineconeVectorStore
from langchain.llms import ChatGroq
import warnings

warnings.filterwarnings('ignore')
load_dotenv()

api_key = os.getenv("PINECONE_API_KEY")
pc = Pinecone(api_key=api_key)

# Read the Document
def read_doc(directory):
    file_loader = PyPDFDirectoryLoader(directory)
    documents = file_loader.load()
    return documents

doc = read_doc('uploads/')
print(f"The length of the doc is {len(doc)}")

# Chunking Of The Data
def chunk_data(docs, chunk_size=800, chunk_overlap=80):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    chunked_docs = text_splitter.split_documents(docs)
    return chunked_docs

chunked_docs = chunk_data(doc)
print(f"The length of the Chunked Docs is {len(chunked_docs)}")

# Create embeddings
embeddings = HuggingFaceEmbeddings()
# Ensure that the embedding dimension matches the Pinecone index dimension
embedding_dim = 768  # Update this value if your embedding model's dimension is different

# Create or retrieve Pinecone index
index_name = "budget"
existing_indexes = [index_info["name"] for index_info in pc.list_indexes()]
print(f"The names of existing indexes are {existing_indexes}")

if index_name not in existing_indexes:
    pc.create_index(
        name=index_name,
        dimension=embedding_dim,
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1"),
    )
    index = PineconeVectorStore.from_documents(
        chunked_docs,
        index_name=index_name,
        embedding=embeddings
    )
    while not pc.describe_index(index_name).status["ready"]:
        time.sleep(1)

index = pc.Index(index_name)
print(f"The index name is {index}")
index = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embeddings
)

llm = ChatGroq(
    model="llama-3.1-70b-versatile",
    temperature=0
)
chain = load_qa_chain(llm, chain_type="stuff")

def retrieve_query(query, k=2):
    matching_result = index.similarity_search(query=query, k=k)
    print("Matching Results:", matching_result)
    return matching_result

def retrieve_answer(query):
    doc_search = retrieve_query(query)
    answer = chain.run(input_documents=doc_search, question=query)
    return answer

our_query = "Tell me about the Document"
answer = retrieve_answer(our_query)
print(answer)





