# import pinecone

# # Initialize Pinecone (Vector DB)
# # PINECONE_API_KEY="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V"
# pinecone.init(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")
# index = pinecone.Index("pdf-text-index")

# # Store vector embeddings of PDF content in Pinecone
# def store_embeddings(filename, text):
#     embeddings = LLMPredictor().get_embeddings(text)
#     index.upsert([(filename, embeddings)])

# # Query the Pinecone index for relevant answers
# def query_embeddings(question):
#     q_embeddings = LLMPredictor().get_embeddings(question)
#     results = index.query(q_embeddings, top_k=1)
#     return results

############################################################v2###########################
# import os
# from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
# from pydantic import BaseModel
# import pinecone
# from langchain.vectorstores import Pinecone
# from langchain.embeddings import OpenAIEmbeddings
# try:
#   from llama_index import Document
#   from llama_index.text_splitter import SentenceSplitter
# except ImportError:
#   from llama_index.core import Document
#   from llama_index.core.text_splitter import SentenceSplitter
# from llama_index.core import SimpleDirectoryReader, ServiceContext, VectorStoreIndex
# import fitz  # PyMuPDF for PDF text extraction
# from typing import Optional

# # Initialize FastAPI
# app = FastAPI()

# from pinecone import Pinecone, ServerlessSpec

# pc = Pinecone(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")

# # # Initialize Pinecone
# # pinecone.init
# index_name = "pdf-knowledge-base"


# # Ensure Pinecone index exists
# if index_name not in pc.list_indexes().names():
#     pc.create_index(
#     name=index_name,
#     dimension=1536, # Replace with your model dimensions
#     metric="euclidean", # Replace with your model metric
#     spec=ServerlessSpec(
#         cloud="aws",
#         region="us-east-1"
#     ) 
# )

# # Configure LangChain embeddings
# embeddings = OpenAIEmbeddings()
# vector_store = Pinecone(index_name=index_name, embeddings=embeddings)

# # Directory to store uploaded PDFs
# UPLOAD_DIRECTORY = './uploads/'

# # Helper function to extract text from PDF
# def extract_text_from_pdf(pdf_path):
#     text = ""
#     with fitz.open(pdf_path) as doc:
#         for page in doc:
#             text += page.get_text()
#     return text

# # API endpoint for uploading PDF
# @app.post("/upload-pdf/")
# # async def upload_pdf(file: UploadFile = File(...), background_tasks: BackgroundTasks):
# async def upload_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
#     # Ensure the upload directory exists
#     if not os.path.exists(UPLOAD_DIRECTORY):
#         os.makedirs(UPLOAD_DIRECTORY)

#     # Save the file locally
#     file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
#     with open(file_path, "wb+") as f:
#         f.write(await file.read())
    
#     # Extract and process text in the background
#     background_tasks.add_task(process_pdf, file_path, file.filename)
    
#     return {"info": f"File '{file.filename}' saved and is being processed."}

# # Background task to process PDF
# def process_pdf(file_path: str, filename: str):
#     # Extract text from PDF
#     text = extract_text_from_pdf(file_path)
    
#     # Save extracted text as a Document in LangChain
#     document = Document(text_content=text, metadata={"filename": filename})
    
#     # Embed and store the document in Pinecone
#     vector_store.add_texts([document])

# # Request model for question asking
# class QuestionRequest(BaseModel):
#     question: str
#     document_name: Optional[str] = None  # Specify a document name for follow-up questions

# # API endpoint for asking questions
# @app.post("/ask-question/")
# async def ask_question(question_request: QuestionRequest):
#     if question_request.document_name:
#         # Retrieve the document based on metadata (filename)
#         docs = vector_store.similarity_search(query=question_request.document_name, top_k=1)
#         if not docs:
#             raise HTTPException(status_code=404, detail="Document not found.")
#         doc_content = docs[0].page_content
#     else:
#         # Query on all documents if no document specified
#         doc_content = None

#     # Run the query with LangChain or LlamaIndex
#     response = QueryEngine(vector_store=vector_store, embeddings=embeddings).query(
#         question=question_request.question, context=doc_content
#     )

#     # Return the answer
#     return {"answer": response}

# # Run the application
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)

###################################################v3###########################

# import os
# from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
# from pydantic import BaseModel
# import fitz  # PyMuPDF for PDF text extraction
# from sentence_transformers import SentenceTransformer
# import faiss
# import numpy as np
# from typing import Optional

# # Initialize FastAPI
# app = FastAPI()

# # Directory to store uploaded PDFs
# UPLOAD_DIRECTORY = './uploads/'

# # Initialize Sentence Transformer model for embeddings
# embeddings_model = SentenceTransformer('all-MiniLM-L6-v2')
# dimension = 384  # Embedding dimension for the model

# # Initialize FAISS index
# faiss_index = faiss.IndexFlatL2(dimension)

# # Helper function to extract text from PDF
# def extract_text_from_pdf(pdf_path):
#     text = ""
#     with fitz.open(pdf_path) as doc:
#         for page in doc:
#             text += page.get_text()
#     return text

# # Background task to process PDF and add it to the FAISS index
# def process_pdf(file_path: str, filename: str):
#     # Extract text from PDF
#     text = extract_text_from_pdf(file_path)
    
#     # Generate embeddings for the extracted text
#     embedding = np.array(embeddings_model.encode(text), dtype="float32")
    
#     # Add the embedding to FAISS index
#     faiss_index.add(np.array([embedding]))

#     # Optionally: store metadata such as filename, if required

# # API endpoint for uploading PDF
# @app.post("/upload-pdf/")
# async def upload_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
#     # Ensure the upload directory exists
#     if not os.path.exists(UPLOAD_DIRECTORY):
#         os.makedirs(UPLOAD_DIRECTORY)

#     # Save the file locally
#     file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
#     with open(file_path, "wb+") as f:
#         f.write(await file.read())
    
#     # Extract and process text in the background
#     background_tasks.add_task(process_pdf, file_path, file.filename)
    
#     return {"info": f"File '{file.filename}' saved and is being processed."}

# # Request model for question asking
# class QuestionRequest(BaseModel):
#     question: str
#     document_name: Optional[str] = None  # Specify a document name for follow-up questions

# # API endpoint for asking questions
# @app.post("/ask-question/")
# async def ask_question(question_request: QuestionRequest):
#     # Generate the query embedding
#     query_embedding = np.array(embeddings_model.encode(question_request.question), dtype="float32")
    
#     # Search for the most similar document in the FAISS index
#     D, I = faiss_index.search(np.array([query_embedding]), k=1)
    
#     # Retrieve and return the content of the closest document (in practice, you'd retrieve metadata)
#     if I[0][0] == -1:  # Check if no match found
#         raise HTTPException(status_code=404, detail="No relevant document found.")
    
#     # For simplicity, this demo just returns a placeholder response
#     # You'd replace this with actual document retrieval and response generation
#     return {"answer": "Closest document content or answer placeholder"}

# # Run the application
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)

##################################v4##########################

# import os
# from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
# from pydantic import BaseModel
# import fitz  # PyMuPDF for PDF text extraction
# from sentence_transformers import SentenceTransformer
# import faiss
# import numpy as np
# from langchain.embeddings import HuggingFaceEmbeddings
# from langchain.vectorstores import FAISS
# from langchain.llms import LlamaCpp  # Assuming you have a Llama model for local use
# from llama_index.core import Document, VectorStoreIndex
# from llama_index.experimental.query_engine import PandasQueryEngine,VectorIndexQueryEngine
# # from llama_index.indices.query.query_engine import VectorIndexQueryEngine
# from typing import Optional

# # Initialize FastAPI
# app = FastAPI()

# # Directory to store uploaded PDFs
# UPLOAD_DIRECTORY = './uploads/'

# # Initialize embeddings and FAISS with LangChain
# embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
# dimension = 384  # Model-specific embedding dimension

# # Initialize FAISS index with LangChain's VectorStore
# faiss_index = FAISS(embedding_model, faiss.IndexFlatL2(dimension))

# # Initialize LlamaIndex with LangChain's VectorStore
# vector_index = VectorStoreIndex.from_vector_store(faiss_index)

# # Helper function to extract text from PDF
# def extract_text_from_pdf(pdf_path):
#     text = ""
#     with fitz.open(pdf_path) as doc:
#         for page in doc:
#             text += page.get_text()
#     return text

# # Background task to process PDF and add it to the FAISS index
# def process_pdf(file_path: str, filename: str):
#     # Extract text from PDF
#     text = extract_text_from_pdf(file_path)
    
#     # Create a Document for LlamaIndex with metadata
#     document = Document(text_content=text, metadata={"filename": filename})
    
#     # Add document to vector index
#     vector_index.add_texts([document])

# # API endpoint for uploading PDF
# @app.post("/upload-pdf/")
# async def upload_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
#     # Ensure the upload directory exists
#     if not os.path.exists(UPLOAD_DIRECTORY):
#         os.makedirs(UPLOAD_DIRECTORY)

#     # Save the file locally
#     file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
#     with open(file_path, "wb+") as f:
#         f.write(await file.read())
    
#     # Extract and process text in the background
#     background_tasks.add_task(process_pdf, file_path, file.filename)
    
#     return {"info": f"File '{file.filename}' saved and is being processed."}

# # Request model for question asking
# class QuestionRequest(BaseModel):
#     question: str
#     document_name: Optional[str] = None  # Specify a document name for follow-up questions

# # API endpoint for asking questions
# @app.post("/ask-question/")
# async def ask_question(question_request: QuestionRequest):
#     # Query the vector index
#     query_engine = VectorIndexQueryEngine(vector_store=faiss_index, embeddings=embedding_model)
    
#     # Execute query on specific document or entire index
#     if question_request.document_name:
#         # Use filename metadata for targeted search
#         results = vector_index.similarity_search(
#             question_request.document_name, top_k=1
#         )
#         if not results:
#             raise HTTPException(status_code=404, detail="Document not found.")
#         doc_content = results[0].page_content
#     else:
#         doc_content = None

#     # Ask question using the query engine
#     response = query_engine.query(question_request.question, context=doc_content)

#     # Return the answer
#     return {"answer": response}

# # Run the application
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)


##########################v5#########################


import os
from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
from pydantic import BaseModel
import fitz  # PyMuPDF for PDF text extraction
from sentence_transformers import SentenceTransformer
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from chromadb.config import Settings
from llama_index.core import Document
from llama_index.core import VectorStoreIndex
from typing import Optional

# Initialize FastAPI
app = FastAPI()

# Directory to store uploaded PDFs
UPLOAD_DIRECTORY = './uploads/'

# Initialize embeddings and Chroma with LangChain
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
# chroma_index = Chroma(
#     collection_name="pdf-knowledge-base",
#     embedding_function=embedding_model,
#     persist_directory="./chroma_index"  # Directory to store the index
# )

# # Initialize LlamaIndex with LangChain's VectorStore
# vector_index = VectorStoreIndex.from_vector_store(chroma_index)

chroma_index = Chroma(
    collection_name="pdf-knowledge-base",
    embedding_function=embedding_model,
    persist_directory="./chroma_index"
)

# Create a VectorStoreIndex from the Chroma instance
vector_index = VectorStoreIndex.from_vector_store(vector_store=chroma_index)

# Helper function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    with fitz.open(pdf_path) as doc:
        for page in doc:
            text += page.get_text()
    return text

# Background task to process PDF and add it to the Chroma index
def process_pdf(file_path: str, filename: str):
    # Extract text from PDF
    text = extract_text_from_pdf(file_path)
    
    # Create a Document for LlamaIndex with metadata
    document = Document(text_content=text, metadata={"filename": filename})
    
    # Add document to vector index
    vector_index.add_documents([document])

# API endpoint for uploading PDF
@app.post("/upload-pdf/")
async def upload_pdf(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    # Ensure the upload directory exists
    if not os.path.exists(UPLOAD_DIRECTORY):
        os.makedirs(UPLOAD_DIRECTORY)

    # Save the file locally
    file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
    with open(file_path, "wb+") as f:
        f.write(await file.read())
    
    # Extract and process text in the background
    background_tasks.add_task(process_pdf, file_path, file.filename)
    
    return {"info": f"File '{file.filename}' saved and is being processed."}

# Request model for question asking
class QuestionRequest(BaseModel):
    question: str
    document_name: Optional[str] = None  # Specify a document name for follow-up questions

# API endpoint for asking questions
@app.post("/ask-question/")
async def ask_question(question_request: QuestionRequest):
    # Use similarity search on specific document or entire index
    if question_request.document_name:
        # Use filename metadata for targeted search
        results = vector_index.vector_store.similarity_search(
            question_request.document_name, top_k=1
        )
        if not results:
            raise HTTPException(status_code=404, detail="Document not found.")
        doc_content = results[0].page_content
    else:
        doc_content = None

    # Answer question based on vector similarity search
    response = vector_index.query(
        question_request.question, context=doc_content
    )

    # Return the answer
    return {"answer": response}

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
