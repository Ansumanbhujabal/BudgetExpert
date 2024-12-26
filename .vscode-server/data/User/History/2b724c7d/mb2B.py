import requests

url = "https://www.indiabudget.gov.in/doc/Key_to_Budget_Document_2024.pdf"

# Send a HEAD request to fetch only the headers
response = requests.head(url)

if response.status_code == 200:
    # Check for the Last-Modified header
    last_modified = response.headers.get("Last-Modified", None)
    if last_modified:
        print(f"The document was last modified on: {last_modified}")
    else:
        print("The Last-Modified header is not available.")
else:
    print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")
