import os
import requests
from dotenv import load_dotenv
import streamlit as st
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain

# Load the environment variables
load_dotenv()

# Set up your working directory
working_dir = os.path.dirname(os.path.abspath(__file__))

# Define a function to load product data from an API
def fetch_products():
    url = "https://fakestoreapi.com/products"
    response = requests.get(url)
    return response.json()  # Returns product data as a list of dictionaries

# Set up the vector store for product descriptions
def setup_vectorstore(products):
    embeddings = HuggingFaceEmbeddings()

    # Format products into doc_chunks with descriptions
    doc_chunks = [{"page_content": product["description"]} for product in products]

    # Print to inspect the documents before creating the vector store
    print(doc_chunks[:2])  # Print the first two to check

    # Now FAISS can work with these documents
    vectorstore = FAISS.from_documents(doc_chunks, embeddings)
    return vectorstore


# Create the conversation chain with ChatGroq model
def create_chain(vectorstore):
    llm = ChatGroq(
        model="llama-3.1-70b-versatile",
        temperature=0
    )
    retriever = vectorstore.as_retriever()
    memory = ConversationBufferMemory(
        llm=llm,
        output_key="answer",
        memory_key="chat_history",
        return_messages=True
    )
    chain = ConversationalRetrievalChain.from_llm(
        llm=llm,
        retriever=retriever,
        chain_type="map_reduce",
        memory=memory,
        verbose=True
    )
    return chain

# Streamlit page configuration
st.set_page_config(
    page_title="E-Commerce Chatbot",
    page_icon="🛒",
    layout="centered"
)

st.title("💬 E-Commerce Chatbot")

# Initialize the chat history in Streamlit session state
if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

# Fetch product data from the API
if "products" not in st.session_state:
    st.session_state.products = fetch_products()

# Set up the vector store and conversation chain only once
if "vectorstore" not in st.session_state:
    st.session_state.vectorstore = setup_vectorstore(st.session_state.products)

if "conversation_chain" not in st.session_state:
    st.session_state.conversation_chain = create_chain(st.session_state.vectorstore)

# Display chat history
for message in st.session_state.chat_history:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Handle user input
user_input = st.chat_input("Ask about products, prices, or tracking...")

if user_input:
    # Store user input in the chat history
    st.session_state.chat_history.append({"role": "user", "content": user_input})

    with st.chat_message("user"):
        st.markdown(user_input)

    # Generate response from the chatbot
    with st.chat_message("assistant"):
        # Pass the user input to the conversation chain
        response = st.session_state.conversation_chain({"question": user_input})
        assistant_response = response["answer"]
        st.markdown(assistant_response)

        # Append assistant response to chat history
        st.session_state.chat_history.append({"role": "assistant", "content": assistant_response})
