s**Monday**

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