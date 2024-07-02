
Weekly To-Do
- [ ] Find/Folder for Leidos
- [ ] 

1st July 2024 - To-Do
- Run model test again
- Parse 

_Morning 07/01_
- Started immediately with trying to run Initial.py again
	- Immediately maxed out the GPU (see screenshot) and got the same error
- Created and ran Third.py 
	- Thrid.py is a cannibalized version o Initial.py that one ask he firs question. Gave really strange results but they weren't wrong
	- Am running again (as Fourth.py) to monitor GPU usage and see if response differs at all
- Fifth is the most interesting test because it confirms where the program is getting bottlenecked: at the question itself
- Sixth ran properly using 7B-Chat
	- I don't know if this was due to using the Chat model or if it was just a luck run
	- Also significantly shorter that the typically 7B runs
	- Fifth failed again

_Afternoon 07/01_
- Costco was a lot of fun; Interns got snacks for the group
- Passwords were out of sync? 
	- Had to go to security because I couldn't even log into teams but after thy solved it, I was able to log into both GitLab and the Server
- Getting LLaMA2 set up on server
	- This took five minutes as opposed to 1.5 hours
- Navigating the linux terminal is fun but kind of terrifying
	- I don't know how I'm going to make and edit files on here
- Cooper helped me get the server running in VSCode but I'm missing a .ssh key so I would need to log in every time to eva 
	- Not hard, just kind of annoying
- Testing on Server
	- First (example_text_completion)
		- Goal: base case running
		- LLaMA Version: 7B
		- Results:
			- Time: 20.6 seconds
			- Ran perfectly without errors
	- Second (example_chat_completion)
		- Goal: base case running
		- LLaAM Version: 7B
		- Results:
			- Time: 33.4 seconds
			- Same errors as normal laptop
	- Third (example_text_completion)
		- Goal: base case running
		- LLaMA Version: 7B-chat
		- Results:
			- Time: 20.1 seconds
			- Ran perfectly without errors
	-  Forth (example_chat_completion)
		- Goal: base case running
		- LLaAM Version: 7B-chat
		- Results:
			- Time: 33.5 seconds
			- Ran perfectly without errors
	- ** Running using nccl and not gloo
	- It seems like there is an issue with 7B itself and not the program when trying to run. The error is consistently wrong
- Mundy advised to ignore the errors with 7B and just continue test with 7B-Chat for now
- Created fake JSON file and successfully ran a test with JSON.py
	- Issue with prettifying more than one line of the AM.json files (each line individually is 5800 lines)
	- The AI was extremely wrong for the record but it tried its best
		- Example: When asked how to get from John to the origin using cardinal directions, the program instructed
		1. Move north 45 degrees [units]
		2. Move east 45 degrees
		3. Move south 45 degrees
		4. Move west 45 degrees
		- Upon no so thoroughly examination, I have determined this would result in John not moving at all

_Morning 07/02_
- Minimal amendments to the input message did not help LLaMA process the file an easier
- Mundy advise
	- Parse JSON to have positional information (x,y) as one entry or on sentence [the ____ is located at x, y]
		- Figure out how to parse 
	- Research how other people have overcome this issue in the past (its common)
	- Appl for internships in the Bay (Anthropic)
- Parsing JSON
	- Either can be done in Pandas or Python's json import
		- Neither ae fun to use in this occasion (I don't know how to use them)
- Research
	- Article 1: [Evaluating Spatial Understanding of Large Language Models](https://arxiv.org/html/2310.14540v2)
		- Summary: Models can do very simple special reasoning, but they are not the most accurate in any regard
		- Direct quote when referring to LLaMA 7B and LLaMA 13B: "We omit Llama2-7B and 13B from our discussion because they achieve zero (or very close to zero) accuracy across all structures. This indicates that tackling zero-shot spatial reasoning tasks may necessitate larger models."
			- Very worrying because the goal was to initially create a model that could run on a laptop of if it requires a model like LLaMA 70B (which doesn't have the highest accuracy anyways)
		- Article shows the multiple ways you can give spatial information to a LLM (Square,  Random, Snake, etc)
			- Square: tells the model where objects row by row and left to right and results in the greatest level of accuracy
			- Random: tells the location of objects using coordinates (notably starting from one and not zero) in a random order
				- Has lower accuracy than Square, but higher than snake
				- Could easily be implemented as a for loop for preprocessing
			- LLaMA was omitted from these results because 70B  were already very low
			  
_Afternoon 07/02_
- Lunch and learn with Keith about the missile recovery program, Gremlins, and future research (SHARK)
- Reading articles Mundy sent, noted at 