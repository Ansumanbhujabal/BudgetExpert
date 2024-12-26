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
# # print(len(doc))


# # # CHUNKING Of The Data
# def chunk_data(docs,chunk_size=800,chunk_overlap=80):
#     text_splitter=RecursiveCharacterTextSplitter(chunk_size=chunk_size,chunk_overlap=chunk_overlap)
#     chunked_docs=text_splitter.split_documents(docs)
#     return chunked_docs
# chunked_docs=chunk_data(doc)
# # print(chunked_docs)
# # print(len(chunked_docs))

# embeddings = HuggingFaceEmbeddings()
# vectors=embeddings.embed_documents("How is me ?")
# # print(vectors)
# # print(len(vectors))




# index_name="budget"  

# existing_indexes = [index_info["name"] for index_info in pc.list_indexes()]
# print(existing_indexes)

# if index_name not in existing_indexes:
#     pc.create_index(
#         name=index_name,
#         dimension=3072,
#         metric="cosine",
#         spec=ServerlessSpec(cloud="aws", region="us-east-1"),
#     )
#     while not pc.describe_index(index_name).status["ready"]:
#         time.sleep(1)
#         print("already")
# index = pc.Index(index_name)

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
# Give me the student names 
# our_query = "Tell me about Ayan "
# answer = retrieve_answer(our_query)
# print(answer)    










######################v2####################

import os
import time
from dotenv import load_dotenv
import warnings
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain.vectorstores import Pinecone
from pinecone import Pinecone as PineconeClient
from pinecone import ServerlessSpec
from langchain_groq import ChatGroq

# Ignore warnings
warnings.filterwarnings("ignore")

# Load environment variables
load_dotenv()

# Initialize Pinecone
api_key = os.getenv("PINECONE_API_KEY")
pinecone_client = PineconeClient(api_key=api_key)

# Function to read and load documents
def read_doc(directory):
    file_loader = PyPDFDirectoryLoader(directory)
    documents = file_loader.load()
    return documents

doc = read_doc('uploads/')

# Chunk the documents into smaller pieces
def chunk_data(docs, chunk_size=800, chunk_overlap=80):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    chunked_docs = text_splitter.split_documents(docs)
    return chunked_docs

chunked_docs = chunk_data(doc)

# Extract text and metadata for embeddings
texts = [chunk.page_content for chunk in chunked_docs]
metadata = [{"source": chunk.metadata.get("source", "unknown")} for chunk in chunked_docs]

# Initialize embeddings
embeddings = HuggingFaceEmbeddings()

# Define index name
index_name = "budget"

# Check if the index already exists, if not create it
existing_indexes = pinecone_client.list_indexes()
if index_name not in existing_indexes:
    pinecone_client.create_index(
        name=index_name,
        dimension=embeddings.dimension,  # Ensure this matches the embedding model's output dimension
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1"),
    )
    while not pinecone_client.describe_index(index_name).status["ready"]:
        time.sleep(1)
        print("Waiting for index to be ready...")

# Load or initialize the index
index = Pinecone.from_existing_index(index_name=index_name, embedding=embeddings)

# Add embeddings to the Pinecone index
index.add_texts(texts, metadata=metadata)

# Verify the number of vectors in the index
index_stats = pinecone_client.describe_index(index_name)
print("Number of vectors in the index:", index_stats["ready_shards"][0]["vector_count"])

# Initialize ChatGroq LLM
llm = ChatGroq(
    model="llama-3.1-70b-versatile",
    temperature=0
)

# Load the QA chain
chain = load_qa_chain(llm, chain_type="stuff")

# Retrieve matching documents from Pinecone
def retrieve_query(query, k=2):
    matching_results = index.similarity_search(query=query, k=k)
    print("Matching Results:", matching_results)
    return matching_results

# Generate answers using the QA chain
def retrieve_answer(query):
    doc_search = retrieve_query(query)
    answer = chain.run(input_documents=doc_search, question=query)
    return answer

# Example usage
query = "What is the Indian Budget?"
answer = retrieve_answer(query)
print("Answer:", answer)
