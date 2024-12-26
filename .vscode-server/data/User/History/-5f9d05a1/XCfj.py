from firecrawl import FirecrawlApp
import warnings
import os 
from dotenv import load_dotenv
warnings.filterwarnings('ignore')
load_dotenv()

# Load environment variables
api_key = os.getenv("FIRECRAWL_API_KEY")

app = FirecrawlApp(api_key=api_key)

# Map a website:
map_result = app.map_url('https://www.indiabudget.gov.in/')
# map_result=app.search("pdf")
print(map_result)


# curl -X POST https://api.firecrawl.dev/v1/map \
#     -H 'Content-Type: application/json' \
#     -H 'Authorization: Bearer YOUR_API_KEY' \
#     -d '{
#       "url": "https://firecrawl.dev",
#       "search": "docs"
#     }'
