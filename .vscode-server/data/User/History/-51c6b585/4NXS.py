import os
import time
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
from langchain_text_splitters.character import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain_groq import ChatGroq
from langchain_pinecone import Pinecone as Pinecone1
from pinecone import Pinecone as Pinecone2
import warnings

warnings.filterwarnings('ignore')
load_dotenv()

# Load environment variables
api_key = os.getenv("PINECONE_API_KEY")
if not api_key:
    raise ValueError("PINECONE_API_KEY is not set in the .env file.")

# Initialize Pinecone
pc = Pinecone2(api_key=api_key)
index_name = "budget"
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
print(retrieve_query("Tell me about Ansuman",2))
# Function to get an answer
def retrieve_answer(query: str, k: int = 2):
    try:
        doc_search = retrieve_query(query, k)
        answer = chain.run(input_documents=doc_search, question=query)
        return answer
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# FastAPI endpoints
@app.post("/query")
async def query_documents(query: Query):
    """
    Query the document index and retrieve an answer.
    """
    answer = retrieve_answer(query.query)
    print(answer)
    return {"query": query.query, "answer": answer}
