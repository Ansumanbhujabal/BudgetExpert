import os
import requests
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain.tools import Tool
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import CharacterTextSplitter
load_dotenv()

# Load environment variables
os.environ["MODEL_PATH"] = "llama-3.1-70b-versatile"
os.environ["FAISS_PATH"] = "./vectorstore.faiss"

# Initialize LLM
llm = ChatGroq(model=os.environ["MODEL_PATH"], temperature=0.7)

# Setup memory for conversational context
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

# Helper: Detect Intent
def get_intent(user_input):
    prompt = f"""
    You are an e-commerce assistant. Detect the user's intent from the following query:
    Query: {user_input}
    Possible intents: Greeting, Product Inquiry, Bargaining, Order Tracking, Unknown
    Respond with the detected intent only.
    """
    response = llm({"prompt": prompt})
    return response["choices"][0]["text"].strip()

# Helper: Fetch Products from API
def fetch_products(category=None):
    response = requests.get("https://fakestoreapi.com/products")
    products = response.json()
    if category:
        products = [p for p in products if category.lower() in p['category'].lower()]
    return [
        f"{p['title']} - ${p['price']}: {p['description']}" for p in products[:5]
    ]

fetch_products_tool = Tool(
    name="FetchProducts",
    func=lambda x: fetch_products(x),
    description="Fetch product details based on category."
)

# Helper: Handle Bargaining Logic
def handle_bargaining(user_input, discount_state):
    prompt = f"""
    The user said: "{user_input}". 
    You are an e-commerce bot handling bargaining. Current discount offered: {discount_state}%.
    If the user insists, increase the discount incrementally by 5%, but don't exceed 20%. Suggest cheaper alternatives if necessary.
    """
    response = llm({"prompt": prompt})
    return response["choices"][0]["text"].strip()

# Helper: Respond Multilingually
def respond_multilingual(user_input, language="en"):
    prompt = f"""
    Respond to the following query in {language}:
    Query: "{user_input}"
    """
    response = llm({"prompt": prompt})
    return response["choices"][0]["text"].strip()

# Core Chatbot Logic
def chatbot_response(user_input, context, discount_state=0):
    intent = get_intent(user_input)

    if intent == "Greeting":
        return "Hello! Welcome to our store. How can I assist you today?"

    elif intent == "Product Inquiry":
        category = user_input.split("about")[-1].strip()  # Extract category dynamically
        products = fetch_products(category)
        return "\n".join(products)

    elif intent == "Bargaining":
        return handle_bargaining(user_input, discount_state)

    elif intent == "Order Tracking":
        return "Please provide your order ID to track your order."

    elif intent == "Unknown":
        return "I'm sorry, I didn't understand that. Could you rephrase?"

# Example: Conversation Loop
if __name__ == "__main__":
    print("Welcome to the E-Commerce Chatbot! Type 'exit' to quit.")
    context = {}
    discount_state = 0

    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            print("Goodbye!")
            break

        response = chatbot_response(user_input, context, discount_state)
        print(f"Bot: {response}")
