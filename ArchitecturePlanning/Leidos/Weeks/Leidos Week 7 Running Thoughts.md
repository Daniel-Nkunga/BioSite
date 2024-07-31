
_Morning 07/29_
- Starting  off with reading [Quantization Article](https://symbl.ai/developers/blog/a-guide-to-quantization-in-llms/)
- Different Techniques for LLM Quantization:
	1. QLoRA
		- Makes models feasible to run on a single GPU
		- Fine turns on an additional set of weights called adapters
		- <span style = "color: red">Seemingly gold standard of quantization. Allows for running on one GPU.</span>
	1. RRILoRA
		- Increases LoRA efficiency trough the introduction of a linear distribution of ranks and importance-based A-weight pruning
		- Achieved better results than LoRA on all datasets
		- <span style = "color: red">Up and coming quantization technique that outperforms LoRA</span>
	1. GPTQ
		- Optimizes quantization models to run on a single GPU
		- Minimizes output error by discovering the quantized wights layer at a time
		- <span style = "color: red">Solid technique that also allows for the running of models on one GPU</span>
	1. GGML/GGUF
		- GGML only runs LLaMA
		- Requires CPP library llama.cpps
		- Allows for running on a GPU
		- Executed in a binary format allowing for many deploy applications
		- <span style = "color: red">Solid technique that also allows for the running of models on one GPU; Primarily works on LLaMA and requires CPP with llama.cpp</span>
	1. AWQ
		- Accounts for activation of the model when trained on the input data minimizing loss from quantization
		- <span style = "color: red">Specialized quantization by placing higher emphasis on the data being fine tuned on; This section was pretty short int he article and honesty I don't care much about it</span>
- Nithin is having me look into something that can print out token usage per second
- Can print token cost*
	- I don't know which tokenizer LLaMA 3 8B Instruct uses so I'm currently testing with GPT-3.5-Turbo's cl100k_base

_Afternoon 07/29_
- [Eco2AI](https://github.com/sb-ai-lab/Eco2AI)
	- Program for keeping tack of power and emissions of LLM
	- We could use this then just add token count if we want
- I found [this](https://github.com/belladoreai/llama3-tokenizer-js) alleged LLaMA 3 Tokenizer 
- Figured out how to access the LLaMA tokenizer
- Set tokenizer per second files to Nithin to run locally
	- Sent as a python file that can hopefully be broken down to a Jupyter notebook
- Got full access to Confluence and GitLab repo

_Morning 07/30_
- Packaging Day
- Redownloading Everything
	1. General Information
	2. Python Version: 3.10.12
	3. Uninstalling Everything
		1. **Command**: pip freeze --exclude-editable | xargs pip uninstall -y
	4. LLaMA 3
		1. Clone LLaMA GitHub Repository
			1. **Command**: git clone https://github.com/meta-llama/llama3.git
		2. Install required packages for LLaMA repository
			1. **Command**: pip install -e .
		3. Go to [Meta LLaMA Website](https://llama.meta.com/llama-downloads/) and download model you want (copy the link)
			1. Model become more and more demanding as time goes on; Just make sure to not download extra things because its inconvenient
		4. Run the download file and choose model to download
			1. **Command**: ./downlaod.sh
			2. Use link from Meta LLaMA Website
		5. PIP list saved as PIP_Freeze_LLaMA.txt
	5. QLoRA
		1. Clone QLoRA GitHub Repository
			1. **Command**: git clone https://github.com/artidoro/qlora.git
		2. Install required packages for QLoRA repository
			1. **Command**: pip install -U -r requirements.txt
		3. Reinstall lower version of numpy
			1. **Command**: pip uninstall numpy
			2. **Command**: pip install numpy\==1.24.4
		4. Install bitsandbytes
			1. **Command**: pip install bitsandbytes-cuda116
		5. Update xformers
			1. **Command**: pip install xformers\==v0.0.22
		6. Reinstall higher version of bitsandbytes
			1. **Command**: pip uninstall bitsandbytes
			2. **Command**: pip install bitsandbytes\==0.43.1
		7. Install lower version of torch
			1. **Command**: pip uninstall torch
			2. **Command**: pip install torch\==2.1.2
		9. Install torch dependencies
			1. **Command**: pip3 install -U torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116
		10. PIP list saved as PIP_Freeze_QLoRA.txt
	6. LangChain (specifically for LangChain.py file)
		1. Install LangChain requirements
			1. **Command**: pip install langchain langchain_community langchain_chroma
		2. Install langchain_huggingface
			1. **Command**: pip install langchain_huggingface
		3. Install datasets
			1. **Command**: pip install datasets
		4. Install missing requirements
			1. **Command**: pip install einops
		5. PIP list saved as PIP_Freeze_LangCahin.txt
- Watched Defense Sector Intern Tech Talk: Defense Systems Overview Zoom meeting
	- This one was one of the best; Doug Jones is a really interesting person
- Reworked 

_Afternoon 07/30_
- Created Confluence LLaMA Download page
- Created Confluence QLoRA Download page
- Created Confluence LangChain Download page

_Morning 07/31_
- Its the last day of July. That's weird
- Creating GitLab repo
	- To-Do
		- [ ] Delete contents of llama3.egg-info
		- [ ] Delete contents of Meta-Llama-3-8B
		- [ ] Delete contents of Meta-Llama-3-8B-Instruct
		- [ ] Delete llama
	- Deleted contents
		- .gitignore
		- Llama3_Repo.jpeg

_Afternoon 07/31_
- Command updates
	- Require the creation of a venv
		- Require this venv has pip
	- REQUIRE PIP
- Apparently I entered too much into a flow state when downloading llama for the first time because I accidentally made things easy on myself
	- My VSCode autoactivates a venv that already has pip installed
	- Pip and python are not inherently installed on eva
	- 