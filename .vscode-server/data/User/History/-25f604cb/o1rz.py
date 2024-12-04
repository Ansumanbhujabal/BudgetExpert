# from fastapi import HTTPException
# from llama_index import SimpleDirectoryReader, GPTSimpleVectorIndex, LLMPredictor

# # Placeholder for PDF text storage (can be a vector DB)
# pdf_texts = {}

# @app.post("/ask-question/")
# async def ask_question(filename: str, question: str):
#     if filename not in pdf_texts:
#         raise HTTPException(status_code=404, detail="PDF not found")

#     text = pdf_texts[filename]
    
#     # Initialize LangChain/LlamaIndex (assuming you've stored vector embeddings)
#     llm_predictor = LLMPredictor()
#     index = GPTSimpleVectorIndex.from_documents(text)  # This step will depend on your embedding setup
    
#     response = index.query(question)
#     return {"answer": response}
###################################################

import os
from fastapi import FastAPI, File, UploadFile

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
