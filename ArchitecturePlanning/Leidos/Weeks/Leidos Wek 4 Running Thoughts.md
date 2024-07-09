Links: [[Leidos Week 3 Running Thoughts]][[Leidos]]


Weekly To-Do
- [ ] Ask Mundy if I would be able to do knowledge graph research as a personal project
- [ ] Copy over Linear Algebra Notes
- [ ] Ask Tim what book he read to learn Linear Algebra

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