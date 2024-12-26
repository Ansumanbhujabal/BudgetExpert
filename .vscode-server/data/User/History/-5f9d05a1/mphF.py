from firecrawl import FirecrawlApp

app = FirecrawlApp(api_key="fc-YOUR_API_KEY")

# Map a website:
map_result = app.map_url('https://firecrawl.dev')
print(map_result)


# curl -X POST https://api.firecrawl.dev/v1/map \
#     -H 'Content-Type: application/json' \
#     -H 'Authorization: Bearer YOUR_API_KEY' \
#     -d '{
#       "url": "https://firecrawl.dev",
#       "search": "docs"
#     }'
