from firecrawl import FirecrawlApp
import warnings
import os
import requests
from dotenv import load_dotenv
warnings.filterwarnings('ignore')
load_dotenv()

api_key = os.getenv("FIRECRAWL_API_KEY")
app = FirecrawlApp(api_key=api_key)

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

payload = {
    "url": "https://www.indiabudget.gov.in/",
    "search": "pdf"
}

response = requests.post("https://api.firecrawl.dev/v1/map", json=payload, headers=headers)
if response.status_code == 200:
    map_result = response.json()
    print(map_result)
else:
    print("Error:", response.status_code, response.text)


####################################v2######################

# # Map a website:
# map_result = app.map_url('https://www.indiabudget.gov.in/')
# map_result=app.search("pdf")
# print(map_result)


# curl -X POST https://api.firecrawl.dev/v1/map \
#     -H 'Content-Type: application/json' \
#     -H 'Authorization: Bearer YOUR_API_KEY' \
#     -d '{
#       "url": "https://firecrawl.dev",
#       "search": "docs"
#     }'

