
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
# PINECONE_API_KEY="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V"
pinecone.init(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")
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

