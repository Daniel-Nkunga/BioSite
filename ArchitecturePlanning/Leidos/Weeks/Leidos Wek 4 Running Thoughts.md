
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