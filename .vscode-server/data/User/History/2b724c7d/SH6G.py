import requests
import json

# Load the JSON file and extract the URL
with open('mapped_result.json', 'r') as f:
    mapped_data = json.load(f)

# Assuming the JSON has a key that contains the URL, e.g., "url"
# Replace 'url' with the actual key name in your JSON file
url = mapped_data.get("url", None)

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
