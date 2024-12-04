
import os
from fastapi import FastAPI, File, UploadFile
from fastapi import HTTPException
from llama_index import SimpleDirectoryReader, GPTSimpleVectorIndex, LLMPredictor
from fastapi import BackgroundTasks
from llama_index import GPTVectorStoreIndex, Document
import pinecone

app = FastAPI()

@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    upload_directory = './uploads/'

    # Ensure the directory exists
    if not os.path.exists(upload_directory):
        os.makedirs(upload_directory)

    file_location = os.path.join(upload_directory, file.filename)
    
    with open(file_location, "wb+") as f:
        f.write(await file.read())

    return {"info": f"file '{file.filename}' saved at '{file_location}'"}


# Placeholder for PDF text storage (can be a vector DB)
pdf_texts = {}

@app.post("/ask-question/")
async def ask_question(filename: str, question: str):
    if filename not in pdf_texts:
        raise HTTPException(status_code=404, detail="PDF not found")

    text = pdf_texts[filename]
    
    # Initialize LangChain/LlamaIndex (assuming you've stored vector embeddings)
    llm_predictor = LLMPredictor()
    index = GPTSimpleVectorIndex.from_documents(text)  # This step will depend on your embedding setup
    
    response = index.query(question)
    return {"answer": response}



@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...), background_tasks: BackgroundTasks):
    file_location = os.path.join(UPLOAD_FOLDER, file.filename)
    background_tasks.add_task(process_pdf, file_location, file)
    return {"filename": file.filename}

def process_pdf(file_location, file):
    # Same text extraction logic here
    pass

# Example of creating a document and adding it to the index
documents = [
    Document(text="Your extracted text from PDF here.")
]

# Create an index
index = GPTVectorStoreIndex(documents)

# Query the index
response = index.query("Your question here")
print(response)



# Initialize Pinecone (Vector DB)

pinecone.init(api_key="pcsk_3ftM6d_C4NpuC5VX5V")
index = pinecone.Index("pdf-text-index")

# Store vector embeddings of PDF content in Pinecone
def store_embeddings(filename, text):
    embeddings = LLMPredictor().get_embeddings(text)
    index.upsert([(filename, embeddings)])

# Query the Pinecone index for relevant answers
def query_embeddings(question):
    q_embeddings = LLMPredictor().get_embeddings(question)
    results = index.query(q_embeddings, top_k=1)
    return results


########################################################################


# import os
# from fastapi import FastAPI, File, UploadFile, HTTPException, BackgroundTasks
# # from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, LLMPredictor, Document
# from llama_index.core import SimpleDirectoryReader, ServiceContext, VectorStoreIndex
# import pinecone


# app = FastAPI()

# # # Pinecone initialization
# # pinecone.init(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")
# # index = pinecone.Index("pdf-text-index")

# # import pinecone

# # Create a Pinecone client instance
# client = pinecone.Pinecone(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")

# # Create or retrieve an index
# if "pdf-text-index" not in client.list_indexes():
#     # client.create_index("pdf-text-index", dimension=768)  # Adjust dimension as needed
#     client.create_index(
#   name="example-index",
#   dimension=1536,
#   metric="cosine",
#   spec=ServerlessSpec(
#     cloud="aws",
#     region="us-east-1"
#   )
# )

# # Connect to the index
# index = client.Index("pdf-text-index")


# pdf_texts = {} 

# @app.post("/upload-pdf/")
# async def upload_pdf(file: UploadFile = File(...)):
#     upload_directory = './uploads/'

#     # Ensure the directory exists
#     if not os.path.exists(upload_directory):
#         os.makedirs(upload_directory)

#     file_location = os.path.join(upload_directory, file.filename)
    
#     with open(file_location, "wb+") as f:
#         f.write(await file.read())

#     return {"info": f"file '{file.filename}' saved at '{file_location}'"}

# def process_pdf(file_location: str, filename: str):
#     # Extract text from PDF
#     extracted_text = extract_text_from_pdf(file_location)
#     if not extracted_text:
#         return

#     # Store extracted text temporarily
#     pdf_texts[filename] = extracted_text

#     # Generate embeddings for text
#     embeddings = generate_embeddings(extracted_text)

#     # Store embeddings in Pinecone
#     pinecone_index.upsert([(filename, embeddings)])
#     print(f"Processed and stored embeddings for '{filename}'.")

# def extract_text_from_pdf(file_path: str) -> str:
#     # Use PyMuPDF or any other library to extract text
#     try:
#         with open(file_path, "rb") as f:
#             reader = SimpleDirectoryReader(f)
#             text = reader.read()
#         return text
#     except Exception as e:
#         print(f"Error extracting text from {file_path}: {e}")
#         return ""

# def generate_embeddings(text: str):
#     llm_predictor = LLMPredictor()
#     return llm_predictor.get_embeddings(text)
# # Upserting embeddings to the Pinecone index
# def store_embeddings(filename, embeddings):
#     index.upsert([(filename, embeddings)])

# # Querying the Pinecone index
# def query_embeddings(question_embeddings):
#     results = index.query(question_embeddings, top_k=1)
#     return results


# @app.post("/ask-question/")
# async def ask_question(filename: str, question: str):
#     if filename not in pdf_texts:
#         raise HTTPException(status_code=404, detail="PDF not found")

#     # Get question embeddings
#     q_embeddings = generate_embeddings(question)

#     # Query Pinecone for the most relevant document parts
#     results = pinecone_index.query(q_embeddings, top_k=1)
#     if not results['matches']:
#         return {"answer": "No relevant information found."}

#     answer = results['matches'][0]['metadata'].get('text')
#     return {"answer": answer}


