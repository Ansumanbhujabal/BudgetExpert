import os
from dotenv import load_dotenv
import streamlit as st
from langchain_community.document_loaders import UnstructuredPDFLoader
from langchain_text_splitters.character import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
# from langchain_huggingface import HuggingFaceEmbeddings
from langchain.chains import create_retrieval_chain
from langchain_groq import ChatGroq
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain


# load the environment variables
load_dotenv()

working_dir = os.path.dirname(os.path.abspath(__file__))


def load_document(file_path):
    loader=UnstructuredPDFLoader(file_path)
    documents=loader.load()
    return documents

def setup_vectorstore(documents):
    embeddings=HuggingFaceEmbeddings()
    text_splitter=CharacterTextSplitter(
     separator="\n",
     chunk_size=1000,
     chunk_overlap=200
    )
    document_chunks=text_splitter.split_documents(documents)
    vectorstore=FAISS.from_documents(document_chunks,embeddings)
    return vectorstore

def create_chain(vectorstore):
    llm=ChatGroq(
        model="llama-3.1-70b-versatile",
        temperature=0
    )
    retriever=vectorstore.as_retriever(search_type="similarity")

    memory=ConversationBufferMemory(
        llm=llm,
        output_key="answer",
        memory_key="chat_history",
        return_messages=True

    )


    #     # Define a prompt for combining documents
    # prompt_template = """
    # Use the following pieces of context to answer the question at the end.
    # If you don't know the answer, just say that you don't know, don't try to make up an answer.

    # {context}

    # Question: {question}
    # Answer:"""
    # prompt = prompt_template(template=prompt_template, input_variables=["context", "question"])

    # Load a question-answering chain (e.g., for summarization or QA tasks)
    combine_docs_chain = load_qa_chain(
        llm=llm,
        chain_type="map_reduce"
        # prompt=prompt
    )
    chain=create_retrieval_chain(
        # llm=llm,
        # retriever=retriever,
        # chain_type="map_reduce",
        # memory=memory,
        # verbose=True
        retriever,
        combine_docs_chain,
        return_source_documents=True
        )
    return chain


st.set_page_config(
    page_title="Chat with Doc",
    page_icon="📄",
    layout="centered"
)

st.title("🦙 Chat with Doc - LLAMA 3.1")

# initialize the chat history in streamlit session state
if "chat_history" not in st.session_state:
    st.session_state.chat_history = []


uploaded_file = st.file_uploader(label="Upload your pdf file", type=["pdf"])

if uploaded_file:
    file_path = f"{working_dir}/{uploaded_file.name}"
    with open(file_path, "wb") as f:
        f.write(uploaded_file.getbuffer())


    if "vectorstore" not in st.session_state:
        st.session_state.vectorstore = setup_vectorstore(load_document(file_path))

    if "conversation_chain" not in st.session_state:
        st.session_state.conversation_chain = create_chain(st.session_state.vectorstore)

for message in st.session_state.chat_history:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])


user_input = st.chat_input("Ask Llama...")


if user_input:
    st.session_state.chat_history.append({"role": "user", "content": user_input})

    with st.chat_message("user"):
        st.markdown(user_input)


    with st.chat_message("assistant"):
        response = st.session_state.conversation_chain({"question": user_input})
        assistant_response = response["answer"]
        st.markdown(assistant_response)
        st.session_state.chat_history.append({"role": "assistant", "content": assistant_response})
