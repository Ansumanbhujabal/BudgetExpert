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
import os
from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
from pydantic import BaseModel
import pinecone
from langchain.vectorstores import Pinecone
# from langchain.embeddings import OpenAIEmbeddings
try:
  from llama_index import Document
  from llama_index.text_splitter import SentenceSplitter
except ImportError:
  from llama_index.core import Document
  from llama_index.core.text_splitter import SentenceSplitter
from llama_index.core import SimpleDirectoryReader, ServiceContext, VectorStoreIndex
import fitz  # PyMuPDF for PDF text extraction
from typing import Optional

# Initialize FastAPI
app = FastAPI()

# Initialize Pinecone
pinecone.init(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")
index_name = "pdf-knowledge-base"

# Ensure Pinecone index exists
if index_name not in pinecone.list_indexes():
    pinecone.create_index(index_name, dimension=1536)  # Set dimension according to your embeddings model

# Configure LangChain embeddings
embeddings = OpenAIEmbeddings()
vector_store = Pinecone(index_name=index_name, embeddings=embeddings)

# Directory to store uploaded PDFs
UPLOAD_DIRECTORY = './uploads/'

# Helper function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    with fitz.open(pdf_path) as doc:
        for page in doc:
            text += page.get_text()
    return text

# API endpoint for uploading PDF
@app.post("/upload-pdf/")
# async def upload_pdf(file: UploadFile = File(...), background_tasks: BackgroundTasks):
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

# Background task to process PDF
def process_pdf(file_path: str, filename: str):
    # Extract text from PDF
    text = extract_text_from_pdf(file_path)
    
    # Save extracted text as a Document in LangChain
    document = Document(text_content=text, metadata={"filename": filename})
    
    # Embed and store the document in Pinecone
    vector_store.add_texts([document])

# Request model for question asking
class QuestionRequest(BaseModel):
    question: str
    document_name: Optional[str] = None  # Specify a document name for follow-up questions

# API endpoint for asking questions
@app.post("/ask-question/")
async def ask_question(question_request: QuestionRequest):
    if question_request.document_name:
        # Retrieve the document based on metadata (filename)
        docs = vector_store.similarity_search(query=question_request.document_name, top_k=1)
        if not docs:
            raise HTTPException(status_code=404, detail="Document not found.")
        doc_content = docs[0].page_content
    else:
        # Query on all documents if no document specified
        doc_content = None

    # Run the query with LangChain or LlamaIndex
    response = QueryEngine(vector_store=vector_store, embeddings=embeddings).query(
        question=question_request.question, context=doc_content
    )

    # Return the answer
    return {"answer": response}

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
