import pinecone

# Initialize Pinecone (Vector DB)
pinecone.init(api_key="YOUR_PINECONE_API_KEY")
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
