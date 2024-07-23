
_Morning 07/22_
- Started by going back to question answering for a minute with python
- [Error 1](torch.distributed.elastic.multiprocessing.errors.ChildFailedError: )
	- [Solution 1](https://github.com/Vision-CAIR/MiniGPT-4/issues/237)
	- Why isn't any version of LLaMA working?
	- EVA carshed, I changed nothing, and the program ran again
- Poster and Prsentaitons

_Afternoon 07/22_
- Grammatical change log
	- Wording on bullet point one of Slide 3: Motivation
	- Wording on bullet point two of Slide 3: Motivation
- Deleting everything was very self destructive. Remake: Message.py
- Following [QLoRA Finetuning Colab Notebook](https://colab.research.google.com/drive/1VoYNfYDKcKRQRor98Zbf2-9VQTtGJ24k?usp=sharing#scrollTo=E0Nl5mWL0k2T)
- Hour explanation:
	- 6.50 - Overhead for poster design
	- 2.00 - Main project work

_Morning 07/23_
- Brief scare where account got locked but IT fixed it
- Finished QLoRA basic pipeline(?) with points to the two main points the code should change
- Looking into the basic implementation of RAG with [LangChain](https://python.langchain.com/v0.2/docs/tutorials/rag/)
	- Creating an account with them for logging later on
	- [Error 1](USER_AGENT environment variable not set, consider setting it to identify your requests.)
		- [Solution 1](https://github.com/langchain-ai/rag-from-scratch/issues/24)
- Looking into an alternate basic implementation of RAG with [LangChain](https://medium.com/@callumjmac/implementing-rag-in-langchain-with-chroma-a-step-by-step-guide-16fc21815339)


_Afternoon 07/23_
- Nithin sent me a dataset and code to use
- Cleaning pip list again; pip freeze stored in "PIP_07_23.txt"
- LangChain is now done in a notebook and is a pretty clear process imo (I'm lazy)
- NIthin helped a lot with debugging and still following the same tutorial