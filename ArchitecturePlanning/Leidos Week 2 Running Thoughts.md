**Monday**

_Morning 06/24_
- Trying to download LLaMA this morning. After reading through the terms and conditions and determining that we  could download both LLaMA 2 and LLaMA 3, we decided to run with LLaMA 2 for the project
	- LLaMA 3's smallest model has 8 Billion parameters. According to a quick Google search, it takes a laptop 4GB of ram to run 1 Billion Parameters so though this laptop (with its 32GB of RAM) could technically handle the 8B model, after a quick look at the current RAM usage and realistic approach to the ease of running the model, it makes more sense to go with the 7B model of LLaMA 2
- Issues with getting LLaMA set up. Needs me to run a .sh file which "allegedly" needs a Linux terminal to run. 
	- Mundy suggest a bypass using the Git Bash terminal. It works surprisingly well but the issue 
- Issue with terminal closing after ". download.sh" 
	- Terminal keep saying "wget: comand not found" even though it is already downloaded in the environment
	- "md5sum" is also not downloaded due to "Could not find a version that satisfies the requirement md5sum (from versions: none)"

_Afternoon 06/24_
- md5sum is automatically downloaded with Git
	- md5sm is able to turn any file into a 16-byte hash, it shouldn't be too integral to the issues at hand
- Worked on outline the webpage a lot more (focusing on the homepage at the time or writing this). Goal is to rework the webpage today to literally include zero css/design and just get all the content ready
- After talking with Mundy about the issues I was having with the installation of LLaMA, it seems the issue has been with me all along and the way my git terminal was set up
	- After sliding down the thread, one of the commenters (SenthilVikram my goat) instructed how wget and md5sum have to be native to the terminal itself, not just in an environment
	- Issue: Leidos security does not appreciate me trying do download .exe files. 
		- It will let me download the zip without the .exe, or I can download the .exe but running it will close the program immediately 
	- Current running plan is to download the wget.exe and then manually move the file to where all the other Git Bash executables are stored
- Visited IT to re-get dev enabled access; nothing about the situation has changed
	- Being DevEnabled is not the same things as being an administrator meaning I still can't run executables* or move executables wherever I want 
		- Obsidian executable did and still is able to run. 
- This issue will be put off until tomorrow for two reasons. 
	- I sent in a request to IT for a SmartCard (or more accurately, the ability to download and move wget)
	- Might want to walk Mundy through the plan

_Morning 06/25_
- DevEnabled access does give access to Admin privileges on the laptops, I just needed to log in via a different method
	- So much struggle yesterday and for what? A two second showcase to IT where they fixed the problem without even trying? 
- LLaMA is downloading but I now worry it might be taking its sweet time
	- That being said, nothing beats the satisfaction of things being download
- Downloading both 7B and &B chat because it seems like 7B Chat (7BC) will provide a more conversational response which is more in tune with the goal of this model
	- While waiting for the models to download (about 1.5 hours), I both read through the articles for MLBC and worked a bit on the Blog/Website