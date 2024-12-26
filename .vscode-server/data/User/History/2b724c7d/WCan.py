import requests
import json
import time
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(
    filename='script.log',
    filemode='a',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Log start of script
logging.info("Script started")

# Load JSON data
try:
    with open('mapped_result.json', 'r') as f:
        mapped_data = json.load(f)
    logging.info("Loaded JSON data successfully")
except Exception as e:
    logging.error(f"Failed to load JSON file: {e}")
    raise

urls = mapped_data.get("links", [])

if not urls:
    logging.warning("No URLs found in the JSON file.")
else:
    valid_pdfs = []
    invalid_pdfs = []

    for url in urls:
        logging.info(f"Checking URL: {url}")
        time.sleep(3)  # Rate limiting

        last_modified = None  # Ensure it's initialized
        try:
            response = requests.head(url, timeout=10)  # Timeout to avoid hanging
            if response.status_code == 200:
                last_modified = response.headers.get("Last-Modified", None)
                if last_modified:
                    try:
                        modified_date = datetime.strptime(last_modified, "%a, %d %b %Y %H:%M:%S %Z")
                        modified_date_str = modified_date.strftime("%Y")
                        logging.info(f"Last modified: {modified_date}")
                    except ValueError:
                        modified_date_str = "Invalid Format"
                        logging.warning(f"Unable to parse Last-Modified date for URL: {url}")
                else:
                    modified_date_str = "Not Found"
                    logging.warning(f"No Last-Modified header for URL: {url}")
            else:
                modified_date_str = "Not Found"
                logging.warning(f"Failed to retrieve document. HTTP status code: {response.status_code} for URL: {url}")

            # Check conditions
            if "2024" in url or "2024" in modified_date_str:
                valid_pdfs.append({"url": url, "last_modified": last_modified or "Not Found"})
                logging.info(f"URL added to valid PDFs: {url}")
            else:
                invalid_pdfs.append({"url": url, "last_modified": last_modified or "Not Found"})
                logging.info(f"URL added to invalid PDFs: {url}")

        except requests.exceptions.RequestException as e:
            logging.error(f"Error processing URL {url}: {e}")
            invalid_pdfs.append({"url": url, "last_modified": "Error"})

    # Save valid PDFs to a new file
    try:
        with open('valid_pdfs.json', 'w') as valid_file:
            json.dump(valid_pdfs, valid_file, indent=4)
        logging.info("Saved valid PDFs to 'valid_pdfs.json'")
    except Exception as e:
        logging.error(f"Failed to save valid PDFs: {e}")

    # Save invalid PDFs to another file
    try:
        with open('invalid_pdfs.json', 'w') as invalid_file:
            json.dump(invalid_pdfs, invalid_file, indent=4)
        logging.info("Saved invalid PDFs to 'invalid_pdfs.json'")
    except Exception as e:
        logging.error(f"Failed to save invalid PDFs: {e}")

    logging.info("Script completed successfully")
