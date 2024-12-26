import json
import os
import requests

def download_pdfs_from_json(json_file, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    with open(json_file, 'r') as f:
        data=json.load(f)
        urls =data.get('url')
    
    for idx, url in enumerate(urls):
        try:
            filename = url.split('/')[-1]
            output_path = os.path.join(output_dir, filename)
            
            print(f"Downloading {url}...")
            response = requests.get(url)
            response.raise_for_status() 
            
            with open(output_path, 'wb') as pdf_file:
                pdf_file.write(response.content)
            print(f"Saved: {output_path}")
        except Exception as e:
            print(f"Failed to download {url}: {e}")
        print("-" * 40)

json_file_path = "valid_pdfs.json"  
output_directory = "./uploads"  
download_pdfs_from_json(json_file_path, output_directory)
