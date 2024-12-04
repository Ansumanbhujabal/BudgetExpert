import pinecone

# Initialize Pinecone (Vector DB)
# PINECONE_API_KEY="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V"
pinecone.init(api_key="pcsk_3ftM6d_C4NpuCttSsZXQbgDPffRpMcBRQoy8jLMUWAJYKHcakq4kzJKik3t6SakQ25VX5V")
index = pinecone.Index("pdf-text-index")

# Store vector embeddings of PDF content in Pinecone
def store_embeddings(filename, text):
    embeddings = LLMPredictor().get_embeddings(text)
    index.upsert([(filename, embeddings)])

# Query the Pinecone index for relevant answers
def query_embeddings(question):
    q_embeddings = LLMPredictor().get_embeddings(question)
    results = index.query(q_embeddings, top_k=1)
    return results
