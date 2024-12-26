import requests
import json 

url = [ ]
with open('mapped_result.json','w') as f:
    url=f.read()



response = requests.head(url)

if response.status_code == 200:
    last_modified = response.headers.get("Last-Modified", None)
    if last_modified:
        print(f"The document was last modified on: {last_modified}")
    else:
        print("The Last-Modified header is not available.")
else:
    print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")
