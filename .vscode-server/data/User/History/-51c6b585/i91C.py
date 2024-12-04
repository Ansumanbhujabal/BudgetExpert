# import os
# import requests
# from dotenv import load_dotenv
# import streamlit as st
# from langchain_community.document_loaders import UnstructuredPDFLoader
# from langchain_text_splitters.character import CharacterTextSplitter
# from langchain_community.vectorstores import FAISS
# from langchain_community.embeddings import HuggingFaceEmbeddings
# from langchain_groq import ChatGroq
# from langchain.memory import ConversationBufferMemory
# from langchain.chains import ConversationalRetrievalChain

# # Load environment variables
# load_dotenv()

# working_dir = os.path.dirname(os.path.abspath(__file__))

# # Define function to fetch products from the API
# def fetch_products():
#     response = requests.get("https://fakestoreapi.com/products")
#     if response.status_code == 200:
#         return response.json()
#     else:
#         return []

# # Define function to get intent (simplified version for this example)
# def get_intent(user_input):
#     if "hello" in user_input.lower() or "hi" in user_input.lower():
#         return "greeting"
#     elif "price" in user_input.lower() or "available" in user_input.lower():
#         return "product_inquiry"
#     elif "discount" in user_input.lower() or "bargain" in user_input.lower():
#         return "bargaining"
#     elif "track" in user_input.lower() or "order" in user_input.lower():
#         return "order_tracking"
#     else:
#         return "fallback"

# # Define function to create chain
# def create_chain():
#     llm = ChatGroq(
#         model="llama-3.1-70b-versatile",
#         temperature=0
#     )
#     memory = ConversationBufferMemory(
#         llm=llm,
#         output_key="answer",
#         memory_key="chat_history",
#         return_messages=True
#     )
#     chain = ConversationalRetrievalChain.from_llm(
#         llm=llm,
#         retriever=None,  # No retriever needed for static intents
#         chain_type="map_reduce",
#         memory=memory,
#         verbose=True
#     )
#     return chain

# # Set up Streamlit page config
# st.set_page_config(
#     page_title="E-Commerce Chatbot",
#     page_icon="🛍️",
#     layout="centered"
# )

# st.title("🛒 E-Commerce Chatbot")

# # Initialize chat history in Streamlit session state
# if "chat_history" not in st.session_state:
#     st.session_state.chat_history = []

# # Load the product data once
# if "products" not in st.session_state:
#     st.session_state.products = fetch_products()

# # Display chat history
# for message in st.session_state.chat_history:
#     with st.chat_message(message["role"]):
#         st.markdown(message["content"])

# # Input from the user
# user_input = st.chat_input("Ask something...")

# # Process user input
# if user_input:
#     # Append the user message to the chat history
#     st.session_state.chat_history.append({"role": "user", "content": user_input})

#     # Get the intent
#     intent = get_intent(user_input)

#     # Handle different intents
#     response_content = ""
#     if intent == "greeting":
#         response_content = "Hello! How can I assist you today?"
#     elif intent == "product_inquiry":
#         # Search for products related to the user query
#         matching_products = [p for p in st.session_state.products if user_input.lower() in p['title'].lower()]
#         if matching_products:
#             product = matching_products[0]  # Just show the first match
#             response_content = f"Product: {product['title']}\nPrice: ${product['price']}\nDescription: {product['description']}"
#         else:
#             response_content = "Sorry, I couldn't find any products related to your query."
#     elif intent == "bargaining":
#         response_content = "I can offer you a 10% discount on your next purchase! What product would you like a discount for?"
#     elif intent == "order_tracking":
#         response_content = "Please provide your order number to track your order."
#     else:
#         response_content = "Sorry, I didn't quite understand that. Can you rephrase your question?"

#     # Display the assistant's response
#     with st.chat_message("assistant"):
#         st.markdown(response_content)
    
#     # Append the assistant's response to the chat history
#     st.session_state.chat_history.append({"role": "assistant", "content": response_content})



import os
import requests
from dotenv import load_dotenv
import streamlit as st
from langchain_community.document_loaders import UnstructuredPDFLoader
from langchain_text_splitters.character import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain

# Load environment variables
load_dotenv()

working_dir = os.path.dirname(os.path.abspath(__file__))

# Define function to fetch products from the API
def fetch_products():
    response = requests.get("https://fakestoreapi.com/products")
    if response.status_code == 200:
        return response.json()
    else:
        return []

# Initialize LLM for the chatbot
llm = ChatGroq(
    model="llama-3.1-70b-versatile",
    temperature=0
)

memory = ConversationBufferMemory(
    llm=llm,
    output_key="answer",
    memory_key="chat_history",
    return_messages=True
)

# Intent Handlers
def handle_greeting(user_input):
    greetings = ["hello", "hi", "hey", "good morning", "good evening"]
    if any(greet in user_input.lower() for greet in greetings):
        return "Hello! How can I assist you today?"
    return None

def handle_product_inquiry(user_input):
    products = fetch_products()
    for product in products:
        if product['title'].lower() in user_input.lower():
            return f"Product: {product['title']}\nPrice: ${product['price']}\nDescription: {product['description']}"
    return "Sorry, I couldn't find any product that matches your query."

def handle_bargaining(user_input):
    if "discount" in user_input.lower():
        return "I can offer you a 10% discount on this product! Would you like to proceed?"
    return None

def handle_order_tracking(user_input):
    # You would integrate order tracking logic here, such as querying an order database.
    if "track" in user_input.lower():
        return "Please provide your order ID to track your order."
    return None

def handle_fallback(user_input):
    return "I'm sorry, I didn't quite understand that. Can you please rephrase?"

# Main function to process user input and return the bot's response
def process_user_input(user_input):
    response = handle_greeting(user_input)
    if response:
        return response
    
    response = handle_product_inquiry(user_input)
    if response:
        return response
    
    response = handle_bargaining(user_input)
    if response:
        return response
    
    response = handle_order_tracking(user_input)
    if response:
        return response
    
    return handle_fallback(user_input)

# Streamlit UI
def run_chatbot():
    st.title("E-commerce Dynamic Chatbot")
    
    user_input = st.text_input("You: ", "")
    if user_input:
        bot_response = process_user_input(user_input)
        st.write(f"Bot: {bot_response}")

if __name__ == "__main__":
    run_chatbot()
