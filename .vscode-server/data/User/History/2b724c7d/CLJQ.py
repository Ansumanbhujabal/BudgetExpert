import requests
import json
import time
from datetime import datetime

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
        time.sleep(3) 
        try:
            response = requests.head(url)

            if response.status_code == 200:
                last_modified = response.headers.get("Last-Modified", None)
                if last_modified:
                    # Parse the Last-Modified date
                    try:
                        modified_date = datetime.strptime(last_modified, "%a, %d %b %Y %H:%M:%S %Z")
                        print(f"Last modified: {modified_date}")
                    except ValueError:
                        modified_date = None
                        print("Unable to parse Last-Modified date.")
                else:
                    modified_date = None
                    print("The Last-Modified header is not available.")
            else:
                modified_date = None
                print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")

            # Check conditions
            
            modified_date_str = modified_date.strftime("%Y") if modified_date else " "
            print(f" The modi date in stream is {modified_date_str}")
            if "2024" in url or "2024" in modified_date_str:
                print(modified_date_str)
            # if "2024" in url or ("2024"in modified_date):
                valid_pdfs.append({"url": url, "last_modified": last_modified })
            else:
                print(f'invalid date >>>{modified_date_str}')
                invalid_pdfs.append({"url": url, "last_modified": last_modified })

        except Exception as e:
            print(f"Error processing URL {url}: {e}")
            invalid_pdfs.append({"url": url, "last_modified": "Error"})

    # Save valid PDFs to a new file
    with open('valid_pdfs.json', 'w') as valid_file:
        json.dump(valid_pdfs, valid_file, indent=4)

    # Save the rest to another file
    with open('invalid_pdfs.json', 'w') as invalid_file:
        json.dump(invalid_pdfs, invalid_file, indent=4)

    print("Filtered results saved to 'valid_pdfs.json' and 'invalid_pdfs.json'.")























# import requests
# import json
# import time

# with open('mapped_result.json', 'r') as f:
#     mapped_data = json.load(f)

# urls = mapped_data.get("links", [])

# if not urls:
#     print("No URLs found in the JSON file.")
# else:
#     url_last_modified = []

#     for url in urls:
#         print(f"Checking URL: {url}")
#         time.sleep(2)
#         try:
#             response = requests.head(url)

#             if response.status_code == 200:
#                 last_modified = response.headers.get("Last-Modified", None)
#                 if last_modified:
#                     print(f"Last modified: {last_modified}")
#                 else:
#                     last_modified = "Not Available"
#                     print("The Last-Modified header is not available.")
#             else:
#                 last_modified = f"HTTP Error {response.status_code}"
#                 print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")

#             url_last_modified.append({"url": url, "last_modified": last_modified})
#         except Exception as e:
#             print(f"Error processing URL {url}: {e}")
#             url_last_modified.append({"url": url, "last_modified": "Error"})

#     with open('url_last_modified.json', 'w') as output_file:
#         json.dump(url_last_modified, output_file, indent=4)

#     print("Results saved to 'url_last_modified.json'")
