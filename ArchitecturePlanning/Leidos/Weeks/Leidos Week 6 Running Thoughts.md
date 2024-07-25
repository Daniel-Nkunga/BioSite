
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

_Morning 07/24_
- Poster presentations (there were donuts) went well; since a lot of the implementation of my project was yet to be completed, I focused a lot more on explaining and describing the architecture and pipeline of the project and what its eventual final use case would be

_Afternoon 07/24_
- Implementing a local llm [website help](https://semaphoreci.com/blog/local-llm)
- Got all of LangCahin.ipynb to work but things aren't clear
	- Program cannot run on separate python file
	- Many links do not actual lead to actual files
	- Is not actually referencing either file
- Reworking LangCahin.py to work with all things actually working and leading
	- Going by line by line to implement process using text files
		- Using [Obama State of the Union Address](https://obamawhitehouse.archives.gov/the-press-office/2012/01/24/remarks-president-state-union-address) as text file
	- [Error 1](ValueError: Loading nomic-ai/nomic-embed-text-v1.5 requires you to execute the configuration file in that repo on your local machine. Make sure you have read the code there to avoid malicious use, then set the option `trust_remote_code=True` to remove this error.)
		- [Solution 1](https://github.com/zylon-ai/private-gpt/issues/1893) **WORKS IN THEORY
		- Solution 2
			- HuggingFaceEmbeddings(model_name = (r"nomic-ai/nomic-embed-text-v1.5"), model_kwargs={'trust_remote_code':True},)
- 202  \ 234
- Apparently I was using 60 GB of EVA and "crashing" the server so 
	- NVIDIA-SMI
		- kill ########
- Model keeps being "Unable to find matching results" even while list th answer in the first chunk of data

_Morning 07/25_
- Simple solutions to similarity score did not work
- Minor mistake by using inconsistent embedding functions but program didn't fix
	- Did greatly lessen processing time
- Models are able to answer questions!
	- Results saved in RAG_Question1.txt and RAG_Question2.txt
	- Models are vary variant in processing time with some attempts taking under 30 seconds and the other responses taking 3 minutes
	- It will answer every question in relation to the provided data
- Pros and cons of different quantization formats
	- 1-3 models types to tr loading

_Afternoon 07/26_
- i feel really anxious right now and i don't know why
- Alternating practicing presentation and light research until 2:30
- Spent a majority of the rest of the day remaking Message maker