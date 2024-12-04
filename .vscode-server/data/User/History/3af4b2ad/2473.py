# from fastapi import FastAPI, File, UploadFile
# import fitz 
# import os
# from datetime import datetime

# app = FastAPI()

# UPLOAD_FOLDER = "./uploads"

# @app.post("/upload-pdf/")
# async def upload_pdf(file: UploadFile = File(...)):
#     file_location = os.path.join(UPLOAD_FOLDER, file.filename)
#     with open(file_location, "wb+") as f:
#         f.write(await file.read())
    
#     # Extract text from the uploaded PDF
#     doc = fitz.open(file_location)
#     text = ""
#     for page in doc:
#         text += page.get_text()

#     # Save extracted text (could be stored in vector DB as well)
#     return {"filename": file.filename, "text": text}


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