
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