import requests
import json

with open('mapped_result.json', 'r') as f:
    mapped_data = json.load(f)

url = mapped_data.get("links", None)

if not url:
    print("No URL found in the JSON file.")
else:
    print(f"Checking URL: {url}")

    # Make a HEAD request to get the Last-Modified header
    response = requests.head(url)

    if response.status_code == 200:
        last_modified = response.headers.get("Last-Modified", None)
        if last_modified:
            print(f"The document was last modified on: {last_modified}")
        else:
            print("The Last-Modified header is not available.")
    else:
        print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")
