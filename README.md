# Indian Budget Expert

This project aims to create an interactive RAG(Retrieval Augmented Generation) System to help users understand the Indian Budget by leveraging various technologies such as LLMA, Pinecone,LangChain ,FastAPI, Streamlit. The tool allows users to query budget documents and receive relevant answers based on their queries.
##  Demo
![Screenshot from 2024-12-26 11-05-05](https://github.com/user-attachments/assets/ad962d9f-35c3-4b84-917e-09837222bb6c)

## Features

- **Document Loading and Chunking**: Loads PDF documents, splits them into smaller chunks for processing.
- **Embedding and Indexing**: Uses Pinecone and HuggingFace embeddings for efficient document retrieval.
- **Query and Answer**: Provides a FastAPI endpoint for querying the document index and retrieving answers.
- **User Interface**: A user-friendly interface built with Streamlit for easy interaction.
##  Workflow
![Untitled - Frame 1 (2)](https://github.com/user-attachments/assets/a99ef364-9459-4f5b-b37d-f8667c13e0c6)

## Setup and Installation

### Prerequisites

- Python 3.8+
- [Pinecone API Key](https://www.pinecone.io/)
- [Groq API Key](https://www.groq.com/)

### Environment Setup

1. Clone the repository:
   ```sh
   git clone [https://github.com/your-username/indian-budget-expert.git](https://github.com/Ansumanbhujabal/BudgetExpert.git)
   ```

2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```sh
   pip install -r requirements.txt
   ```

4. Create a `.env` file with your Pinecone API key:
   ```sh
   echo "PINECONE_API_KEY=your_pinecone_api_key" > .env
   echo "GROQ_API_KEY=your_groq_api_key" > .env
   ```

### Running the Application

1. **Download and Prepare Documents**:
   - Extract budget URLs from the internet using Firecrawl.
   - Filter the URLs to include only those posted after 2023.
   - Download the PDFs and manually select the useful ones.

2. **Start FastAPI Server**:
   ```sh
   uvicorn main:app --reload
   ```

3. **Start Streamlit Interface**:
   ```sh
   streamlit run main.py
   ```

## Usage

- **FastAPI Endpoint**:
  - Endpoint: `/query`
  - Method: `POST`
  - Input:
    ```json
    {
      "query": "Explain the allocation for healthcare",
      "top_k": 2
    }
    ```
  - Output:
    ```json
    {
      "query": "Explain the allocation for healthcare",
      "answer": "The healthcare allocation has been increased by 10%..."
    }
    ```

- **Streamlit Interface**:
  - Navigate to the Streamlit interface in your browser.
  - Enter your query in the input box and click "Get Answer".
  - The answer will be displayed below the input box.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [LangChain](https://www.langchain.com/)
- [Pinecone](https://www.pinecone.io/)
- [Streamlit](https://www.streamlit.io/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [LightningAi](https://lightning.ai/)

---

Happy querying!
