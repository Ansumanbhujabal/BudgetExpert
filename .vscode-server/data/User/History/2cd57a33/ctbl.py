
import os
import logging
import json 
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

SERVICE_ACCOUNT_FILE = 'credentials.json'

def setup_logging():
    """Set up the logging configuration."""
    logging.basicConfig(
        filename='upload_images.log',
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )
    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    console.setFormatter(formatter)
    logging.getLogger('').addHandler(console)

def authenticate():
    """Authenticate and create a Google Drive client."""
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE,
        scopes=['https://www.googleapis.com/auth/drive']
    )
    return build('drive', 'v3', credentials=credentials)

def create_folder_if_not_exists(service, folder_name):
    """Create a folder in Google Drive if it doesn't exist and return its ID."""
    results = service.files().list(
        q=f"mimeType='application/vnd.google-apps.folder' and name='{folder_name}' and trashed=false",
        fields="files(id, name)"
    ).execute()
    items = results.get('files', [])
    
    if items:
        logging.info(f"Folder '{folder_name}' already exists.")
        return items[0]['id']

    # Create folder
    folder_metadata = {
        'name': folder_name,
        'mimeType': 'application/vnd.google-apps.folder'
    }
    folder = service.files().create(body=folder_metadata, fields='id').execute()
    logging.info(f"Created new folder '{folder_name}'.")
    return folder.get('id')

def upload_images_to_drive(service, folder_id):
    """Upload all images in the current directory to the specified Google Drive folder and delete them locally."""
    image_extensions = {'.svg', '.png', '.jpeg', '.jpg'}
    uploaded_files = []
    
    for filename in os.listdir('.'):
        if os.path.isfile(filename) and os.path.splitext(filename)[1].lower() in image_extensions:
            file_metadata = {
                'name': filename,
                'parents': [folder_id]
            }
            media = MediaFileUpload(filename)
            service.files().create(body=file_metadata, media_body=media, fields='id').execute()
            uploaded_files.append(filename)
            logging.info(f"Uploaded {filename} to Google Drive.")
            
            # Delete the file after uploading
            os.remove(filename)
            logging.info(f"Deleted local file {filename}.")
    
    if not uploaded_files:
        logging.warning("No image files were found to upload.")
    else:
        logging.info(f"Uploaded and deleted {len(uploaded_files)} images.")

def main():
    setup_logging()
    logging.info("Starting upload process.")

    # Authenticate and get Google Drive client
    service = authenticate()

    # Ensure the 'logos' folder exists
    folder_id = create_folder_if_not_exists(service, "Budget_Analysis_Pdf")

    # Upload images to the 'logos' folder
    upload_images_to_drive(service, folder_id)

    logging.info("Upload process completed.")

if __name__ == "__main__":
    main()
