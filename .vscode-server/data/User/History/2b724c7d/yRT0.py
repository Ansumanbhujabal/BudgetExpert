import requests
import json

# Load the JSON file and extract the URL
with open('mapped_result.json', 'r') as f:
    mapped_data = json.load(f)

# Assuming the JSON contains multiple links in the "links" key
# Replace "links" with the actual key name in your JSON file if different
urls = mapped_data.get("links", [])

if not urls:
    print("No URLs found in the JSON file.")
else:
    # Initialize a list to store results
    url_last_modified = []

    for url in urls:
        print(f"Checking URL: {url}")
        try:
            # Make a HEAD request to get the Last-Modified header
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

            # Append the result
            url_last_modified.append({"url": url, "last_modified": last_modified})
        except Exception as e:
            print(f"Error processing URL {url}: {e}")
            url_last_modified.append({"url": url, "last_modified": "Error"})

    # Save the results to a new JSON file
    with open('url_last_modified.json', 'w') as output_file:
        json.dump(url_last_modified, output_file, indent=4)

    print("Results saved to 'url_last_modified.json'")
