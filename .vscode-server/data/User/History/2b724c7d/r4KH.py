import requests
import json
import time
from datetime import datetime

# Load JSON data
with open('mapped_result.json', 'r') as f:
    mapped_data = json.load(f)

urls = mapped_data.get("links", [])

if not urls:
    print("No URLs found in the JSON file.")
else:
    valid_pdfs = []
    invalid_pdfs = []

    for url in urls:
        print(f"Checking URL: {url}")
        time.sleep(3)  # Rate limiting
        
        try:
            response = requests.head(url, timeout=10)  # Timeout to avoid hanging
            
            if response.status_code == 200:
                last_modified = response.headers.get("Last-Modified", None)
                if last_modified:
                    try:
                        modified_date = datetime.strptime(last_modified, "%a, %d %b %Y %H:%M:%S %Z")
                        modified_date_str = modified_date.strftime("%Y")
                        print(f"Last modified: {modified_date}")
                    except ValueError:
                        modified_date_str = "Invalid Format"
                        print("Unable to parse Last-Modified date.")
                else:
                    modified_date_str = "Not Found"
                    print("The Last-Modified header is not available.")
            else:
                modified_date_str = "Not Found"
                print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")

            # Check conditions
            if "2024" in url or "2024" in modified_date_str:
                valid_pdfs.append({"url": url, "last_modified": last_modified or "Not Found"})
            else:
                invalid_pdfs.append({"url": url, "last_modified": last_modified or "Not Found"})

        except requests.exceptions.RequestException as e:
            print(f"Error processing URL {url}: {e}")
            invalid_pdfs.append({"url": url, "last_modified": "Error"})

    # Save valid PDFs to a new file
    with open('valid_pdfs.json', 'w') as valid_file:
        json.dump(valid_pdfs, valid_file, indent=4)

    # Save invalid PDFs to another file
    with open('invalid_pdfs.json', 'w') as invalid_file:
        json.dump(invalid_pdfs, invalid_file, indent=4)

    print("Filtered results saved to 'valid_pdfs.json' and 'invalid_pdfs.json'.")
