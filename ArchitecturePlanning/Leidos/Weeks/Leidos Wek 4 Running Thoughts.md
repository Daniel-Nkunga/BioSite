Links: [[Leidos Week 3 Running Thoughts]][[Leidos]]


Weekly To-Do
- [ ] Ask Mundy if I would be able to do knowledge graph research as a personal project
- [ ] Copy over Linear Algebra Notes
- [ ] Ask Tim what book he read to learn Linear Algebra
- [ ] Fill

_Morning 07/08_
- Slowly working on JSON parsing
	- Main issue I was having on Thursday was due to the fact that json.loads and the general json import does not work well with multiline inputs. Data will need to down line by line
		- That file has ben saved as CleaningOL.py 
	- Current issues is going through the fun of figuring out how to save everything one line at a time
		- Current object is a dictionary, json wants a string
	- I am TOO GOOD at this programming thing
		- Successfully was able to parse through JSON and clear desired information
		- Slightly annoying but the program "appends" to the JSON so running it multiple times will add to the document; make sure to reset before trying to clean the data again
- Back to testing LLaMA with JSON with two implicit ()and relatively simple goals in mind:
	- Does LLaMA remember previous chats in the same program
		- i.e. if I ask to name a dog, then create a story about the dog it just named, will it actually use the same dog name?
	- Barebones teacher-studnet test
		- easiness of test test revolves around previous test results
- Chat memory
	- LLaMA DOES NOT inherently remember conversations (see Memory1.txt)
		- When sequentially prompting it to create a dog, then make a story about the dog it just created, it will create a new dog for the story
		- When asked to summarize the last prompt, it will dance around the question
		- The responses given are a constant. They do not vary from run to run
			- The "new dog" is always a Snurfle named Buddy and the story always revolves around Max
		-  [Solution 1](https://www.reddit.com/r/LocalLLaMA/comments/18mpkez/does_llamma_have_local_memory_of_previous_prompts/)
			- This is not that actual solution; tl;dr: store all previous chats to a database that the LLM can refer to before answering new questions 
			- <span style ="color: green">Closing testing on Initial.py</span>
- Also new interns arrived today from California

 _Afternoon 07/08_
  - Message can be sent in from a .txt file and be read in to provide context to the LLM
	  - <span style ="color: green">Closing testing on Second.py </span>
  - Third.py is doing brute force test on trying to describe the cleaned AM JSON
	  - [Error 1](TypeError: zeros(): argument 'size' failed to unpack the object at pos 2 with error "Overflow when unpacking long")
		  -  Apparently LLaMA doesn't want to read in 120,000 lines
  - Long meeting with Mundy and Nithin
	  - Simplify JSON testing to just focus on two entities
	  - Help NIthin set up LLaMA later
  - <span style ="color: green">Closing testing on Third.py </span>
	  - LLaMA still wasn't able to read anything from only two entities
  - Reading and hand-annotating an [article](https://medium.com/@dillipprasad60/qlora-explained-a-deep-dive-into-parametric-efficient-fine-tuning-in-large-language-models-llms-c1a4794b1766) about how to fine tune using QLoRA
	  - Tl;dr: QLoRA is a alternate backprop model that is lighter weight than regular backprop by using a Lower Rank Matrix than the typical delta w used (I cannot explain much more than this)
	  - I have a very surface level understanding but I'm not sure how this is going to help with difficulty later on; hard part still seems like it would b getting things locally and on our own devices
  - Linear Algebra and Calculus III keep on showing up; LA was expected but Calculus is appearing so much more than I was expecting; I might need to retake Calculus III just for a better understanding of everything 
  - LLaMA 70B Chat cannot be run on eva because it only has two GPU's available 
  - Future research links
	  - [WebNLG](https://paperswithcode.com/dataset/webnlg)
	  - [QLoRA Paper](https://arxiv.org/pdf/2106.09685)
	  - [3 Hour YouTube Video](https://www.youtube.com/watch?v=pov3pLFMOPY)

_Morning 07/09_
- Started by reading 2/3 articles for MLBC
	- Articles focused on embedding this week; both the reason why machines do it, how they can be trained to do so, and different methods o encourage good embeddings
		- Do our brains work the same way? Do neurons work together the same way these vectors do or is does our brain biology work different? Are we a biological computer or something totally different. 
			- Thinking back to the SAT/ACT paper talking about the babies being shown abstracted faces immediately after birth
	- Started research onto QLoRA implementation by following their [GitHub repository's](https://github.com/artidoro/qlora) test example
		-  Couldn't figure out how to create a separate environment in the EVA because the server doesn't let you deactivate a .venv (most likely for convince reasons so people won't accidentally create a overarching repo) so I ran the "pip install -U -r requirements.txt" in my main environment
			- No issues came up, just documenting in case things go wrong later on
		- Tried to run command "python qlora.py --model_name_or_path /home/nkungad/main/LLaMA2/llama/llama-2-7b-chat" to run test example but got an error
		- [Error 1](OSError: /home/nkungad/main/LLaMA2/llama/llama-2-7b-chat does not appear to have a file named config.json. Checkout 'https://huggingface.co//home/nkungad/main/LLaMA2/llama/llama-2-7b-chat/None' for available files.)
			- It is onto something; my LLaMA2 doesn't have a config.json file and neither does the GitHub repository for LLaMA2
			- The link I sent doesn't exist because my LLM is not created through HF so the config file might be native to that download
			- [Solution 1](https://github.com/meta-llama/llama3)
				- Following Nithin, download model from HuggingFace and use their versions
				- **[Concerning line in the agreements](By clicking Submit below I accept the terms of the license and acknowledge that the information I provide will be collected stored processed and shared in accordance with the Meta Privacy Policy)
				- It says I still don't have access to the model even though HF says I do

_Afternoon 07/09_
- Redownlaoded LLaMA3 because I disconnected the first time
- Failed to download HF model again
	- Why are the repository and HF recursively pointing to each other? That so stupid
- Solution 1:
	- I just asked Nithin for help and he helped me log into HF which makes a lot of sense because they provided a generic link and I did specify where I was elsewhere
- Nkunga.py
	- Uses transformers and LLaMA3
	- Does a stupid  long sequence where it loads in the checkpoints taking about a minute?
		- Hard to access time taken because it happens before the main function meaning my time command isn't used
- QLoRA
	- Got one successful run(?) but it no longer recognizes bitsandbytes as a valid import so progress has stagnated
	- [Error 1](I forgot to record it; tl;dr: it didn't recognize bitsandbytes and reintallig everything somewhat sorted things out)
		- [Solution](https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html)
	- [Error 2](TypeError: _BaseAutoModelClass.from_pretrained() missing 1 required positional argument: 'pretrained_model_name_or_path')
- Mundy and Nithin talk
	- RAG approach is best option for starting (specific reasons of why is rag > fine-tuning is beyond me)
- [QLoRA](https://github.com/artidoro/qlora)

_Morning 07/10_
- Started with a small research onto the structure of RAG architectures
	- Article itself was pretty okay (they were gassing up this one guy to heck and back)
	- Architecture itself is pretty intuitive with the only real thing of not being the retrieval process
		- Sparse Retrievers: utilize traditional search indexes (hash table?) to find relevant data
			- If we ask "What is the location of bB0?" it should go to the hash of bB0_location_timestep to get the exact coordinates
				- Can also be used for distance by getting the location of two objects and passing them through a distance calculator function
		- Dense Retrievers: represents information as dense vectors and use similarity metrics to retrieve the most relevant content
			- This is also really good, I just can't think of a good good scenario
		- Domain-Specific Retrievers: tailored o specific fields of data (ex: scientific papers)
			- This is okay. Ideally most of our information comes in preprocessed and this happens naturally but we can also tune a model to find relevant game information from a larger file and just learn how to read that file
- QLoRA - one hour attempt
	- Limited attempt time to optimize time spent trying o fix the issue and because I know how to get everything to a usable state relatively fast
	1. I uninstalled everyhting from pip
		- This was extreme but since the issue was with imports and I tended to be messing with those quite a bit, it felt like the "right approach"
			- [Command: python pip freeze --exclude-editable | xargs pip uninstall -y](https://stackoverflow.com/questions/11248073/how-do-i-remove-all-packages-installed-by-pip)
	2. I installed everything needed for llama3
		- Still following commands from the [LLaMA 3 GitHub page](https://github.com/meta-llama/llama3)
			- Commands (in order):
				- pip install -e .
				- pip install huggingface-hub
				- huggingface-cli download meta-llama/Meta-Llama-3-8B-Instruct --include "original/*" --local-dir meta-llama/Meta-Llama-3-8B-Instruct
					- This command might not work initially because I was already logged into HF. Follow process using log in key
					- Path to local directory will change per person
				- pip install transformers
					- I had a small error (next command) so this might not be needed; try skipping
				- huggingface-cli download meta-llama/Meta-Llama-3-8B  --local-dir /home/nkungad/main/LLaMA3/llama3
					- Path to local directory will change per person
					- ***Command not run in final program
		- ***Quick total restart following same steps and redownloading llama repository entirely
	3. I tried reinstalling QLoRA
		1. Still following instructions from the [QLoRA GitHub page](https://github.com/artidoro/qlora)
			- Commands (in order):
				- pip install -U -r requirements.txt
- Joined Digital Moderation Sector Outreach Teams Meeting
	- Stressful because anyone had the power to unmute anyone which ***WHY?
		- I feel unsafe in a room full of unserious people who are willing to make a really funny joke (Carson is a menace and I can't look away from my laptop)
	- They could've said the most interesting things but I was paying zero attention to anything they
	- [Internship page](https://careers.leidos.com/pages/intern-and-new-graduate-jobs)

_Afternoon 07/10_
- Continuing QLoRA Testing
	- [Error 1](AttributeError: /home/nkungad/main/.venv/lib/python3.10/site-packages/bitsandbytes/libbitsandbytes_cpu.so: undefined symbol: cquantize_blockwise_fp16_nf4)
		- [Solution 1](https://github.com/artidoro/qlora/issues/31) **DID NOT WORK
		- [Solution 2](https://github.com/bitsandbytes-foundation/bitsandbytes/issues/112)
			- pip install bitsandbytes-cuda116
	- [Error 2](OSError: libcudart.so.11.0: cannot open shared object file: No such file or directory)
		- [Solution 1](https://github.com/vllm-project/vllm/issues/1369)
	- [Error 3](AttributeError: module 'bitsandbytes.nn' has no attribute 'Linear8bitLt')
		- [Solution 1](https://github.com/bitsandbytes-foundation/bitsandbytes/issues/185)
			- uninstalled and reinstalled bitsandbytes: slightly hiver version: 0.40.0 > 0.43.1
	- [Error 4](RuntimeError: CUDA error: no kernel image is available for execution on the device CUDA kernel errors might be asynchronously reported at some other API call, so the stacktrace below might be incorrect. For debugging consider passing CUDA_LAUNCH_BLOCKING=1. Compile with `TORCH_USE_CUDA_DSA` to enable device-side assertions.)
		- [Solution 1](https://github.com/vllm-project/vllm/issues/629) **UNTESTESD
		- [Solution 2](https://stackoverflow.com/questions/69968477/runtimeerror-cuda-error-no-kernel-image-is-available-for-execution-on-the-devi)
			- <span style="color:pink">ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts.xformers 0.0.22 requires torch==2.0.1, but you have torch 2.3.1 which is incompatible.</span>
				- Terminal still finished 
				- Command: pip3 install -U torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116
			- Caused Error 5
	- [Error 5](ImportError: /home/nkungad/main/.venv/lib/python3.10/site-packages/torch/lib/libtorch_cuda.so: undefined symbol: ncclCommRegister)
		- [Solution 1](https://github.com/pytorch/pytorch/issues/119932)
			- <span style="color:pink">ERROR: pip's dependency resolver does not currently take into account all the packages that are installed. This behaviour is the source of the following dependency conflicts. torchaudio 2.3.1 requires torch==2.3.1, but you have torch 2.1.2 which is incompatible. torchvision 0.18.1 requires torch==2.3.1, but you have torch 2.1.2 which is incompatible. xformers 0.0.22 requires torch==2.0.1, but you have torch 2.1.2 which is incompatible.</span>
	- Nkunga.py ran; (Pdb) is prompting me for a name but I don't know what Pdb is or what its wanting from me
		- Its the python debugger; type "continue" to finish the program
- Nkunga.py
	- Copy and paste of guanaco_generate.py located in examples
	- Notably generates different messages with every run
	- Biggest changes to code:
		- Allowing it more tokens 
		- Commented out Python Debugger
		- Both pink errors are gone
	- Just a text completion program
- A lot of reading for journal club
- qlora.py
	- [Error 1](raise ValueError( ValueError: Tokenizer class GPTNeoXTokenizer does not exist or is not currently imported)
		- [Solution 1](https://github.com/artidoro/qlora/issues/123)
	- qlora.py is being run after that one error and it's training something
		- I have not ben paying attention to much but it looks like it takes 10 minutes for 1% meaning it will take 16 hours to 

_Afternoon 07/11_
- I totally neglected to update this all morning
	- QLoRA model failed to run overnight, running it throughout the day with one restart at 10:00; after five hours, only progressed to 25%
	- Nithin talked me to write up and process the JSON into a sentence while loosing no information
		- Need to add units to a lot of the options
		- Had a few issues processing the JSON but mostly because I was being stupid
	- Did a lot of reading for Journal Club and Book Club
- Kyle Meeting
	- Discussion on what I'm doing and notes and smaller explanations on the simulation
- Journal Club
- Created working  message generator
- Got a lot of clarification on the units and specific of AM
- Lunch and learn over the general aerospace sector and a lot of cool information about the work they do with space industry
- Message is a lot more complicated than I thought
	- Each component needs to be a lot more specific than I would think and has multiples ways it can be interpreted/misinterpreted
	- Just the position, velocity, and orientation of the rocket took an entire page in this iteration
	- It's also going to require quit a bit of math in the preprocessing