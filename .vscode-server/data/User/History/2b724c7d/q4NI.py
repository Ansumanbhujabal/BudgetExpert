import requests
import json
import time

with open('mapped_result.json', 'r') as f:
    mapped_data = json.load(f)

urls = mapped_data.get("links", [])

if not urls:
    print("No URLs found in the JSON file.")
else:
    url_last_modified = []

    for url in urls:
        print(f"Checking URL: {url}")
        time.sleep(2)
        try:
            response = requests.head(url)

            if response.status_code == 200:
                last_modified = response.headers.get("Last-Modified", None)
                if last_modified:
                    print(f"Last modified: {last_modified}")
                else:
                    last_modified = "Not Available"
                    print("The Last-Modified header is not available.")
            else:
                last_modified = f"HTTP Error {response.status_code}"
                print(f"Failed to retrieve the document. HTTP status code: {response.status_code}")

            url_last_modified.append({"url": url, "last_modified": last_modified})
        except Exception as e:
            print(f"Error processing URL {url}: {e}")
            url_last_modified.append({"url": url, "last_modified": "Error"})

    with open('url_last_modified.json', 'w') as output_file:
        json.dump(url_last_modified, output_file, indent=4)

    print("Results saved to 'url_last_modified.json'")
