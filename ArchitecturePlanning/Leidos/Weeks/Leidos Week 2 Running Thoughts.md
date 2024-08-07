Links: [[Leidos]] [[Leidos Week 1 - June 17-21]]

Link: [[Error Messages]]
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
- Environment was set up pretty easily but currently erroring out when trying to run the example program because of socketing issues (it wants to use the internet); I don't know where this call is being made
	- Exact code run: torchrun -1 1 example_chat_completion.py \ --ckpt_dir llama-2-7b-chat/ \ --tokenizer_path tokenizer.model \ --max_seq_len 512 --max_batch_size 6
		- I don't know what exactly the program wants from the second and third parameters. To me, the instructions of what to replace for that part are a bit ambiguous but I'll ask someone else about it in a moment
			- Specifically, I edited the -nproc_per_node parameter with the value they wanted from me but I'm unsure if they want "-1" or just "1"
				- If its just one (which would make more sense), there's a small typo on the instructions 
		- I haven' touched the paths at all since everything is still local to the one folder but that also might be a potential issue
- Error possible comes here:  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\launcher\api.py", line 132, in \_\_call__ return launch_agent(self._config, self._entrypoint, list(args))
- End of morning was thoroughly spent by me trying to avoid the networking issue and making the page look nice and adding a navbar

_Afternoon 06/25_
- Finishing navbar and html design immediately after lunch
- Began downloading Llama3 as a background task
- Went through error debugging trying to go step by step, minor if zero breakthroughs
- Machine Learning Bootcamp Day 1
	- Notes in separate folder

_Morning 06/26_
- Error with SSL Verification
	- Possible solution: connect to the "Big IP" VPN
		- This is counterintuitive; majority of searches said this was the issue
- Error with other dependencies
	- Good link: https://github.com/numpy/numpy/issues/24377
	- Cython downloaded, setuptools downgraded
	- Goal at the movement: fix The distutils package is deprecated and slated for removal in Python 3.12. Use setuptools or check PEP 632 for potential alternatives
- Moved all error messages 
- Crated a new virtual environment to run through all error messages again
	- '''$ pip list
	Package           Version   Editable project location
	----------------- --------- -------------------------------------
	fairscale         0.4.13
	filelock          3.15.4
	fire              0.6.0
	fsspec            2024.6.0
	intel-openmp      2021.4.0
	Jinja2            3.1.4
	llama             0.0.1     C:\Users\nkungad\Desktop\LLaMA2\llama
	MarkupSafe        2.1.5
	mkl               2021.4.0
	mpmath            1.3.0
	networkx          3.3
	numpy             2.0.0
	pip               24.1
	sentencepiece     0.2.0
	setuptools        65.5.0
	six               1.16.0
	sympy             1.12.1
	tbb               2021.13.0
	termcolor         2.4.0
	torch             2.3.1
	typing_extensions 4.12.2'''

_Afternoon 06/26_
- 40 minutes work on Blog css
- Back to debugging
	- **SSL** Errors definitely come from not being connected to the VPN; I auto disconnected from the VPN and immediately got SSL errors again and it immediately went away after connecting to the VPN
	- Deprecating **distutils** error comes from **setuptools** being too updated. Needs to be under 60.X.X 
		- [Error 1](C:\Users\nkungad\AppData\Local\Temp\1\pip-install-csc9hhc6\numpy_99c8740b858f4cd8818ad7ec56b52f79\tools\cythonize.py:75: DeprecationWarning: distutils Version classes are deprecated. Use packaging.version instead.required_version = LooseVersion('0.29.14'))
			- [Solution 1](https://stackoverflow.com/questions/71666214/deprecation-warnings-distutils-and-netcdf-file); **DID NOT WORK**
				- [Set Up Tools Versions](https://pypi.org/project/setuptools/#history); we went with 59.8.0
			- [Solution 2](https://stackoverflow.com/questions/74928500/python-module-install-error-when-i-tried-to-pip-numpy); **DID NOT WORK**
				- python -m pip install --force-reinstall numpy==1.18.5
			- [Solution 3](https://github.com/pytorch/pytorch/issues/84712); **DID NOT FOLLOW THROUGH**
				- Edited [file](C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\utils\tensorboard\__init__.py)
				- Error message from 2022; They might have updated the file because it looks different
			- Solution 4; **DID NOT WORK
				- Manually try installing upgrades fer every downloaded package
					- Skipped: numpy, setuptools
					- 
		- [Error 2](  C:\Users\nkungad\AppData\Local\Temp\1\pip-install-20mpxuw0\numpy_b0851c84221147cc81e28756bf6a229d\tools\cythonize.py:77: DeprecationWarning: distutils Version classes are deprecated. Use packaging.version instead.    if LooseVersion(cython_version) < required_version:)
			- Solution 1; **DID NOT WORK**
				- I'm just upgrading Cython to most modern version
					- Original version: 0.29.37
			- Solution 2; **DID NOT WORK**
				- I'm changing version to 0.29.14 to follow the "LooseVersion"
				- Failed to build wheels
- I can't install different versions of Numpy in clean environments either; moved testing to conda to test their environments/an environment in python 3.8
	- Conda environment: numpy3.11.9
		- Came premade with numpy 2.0.0
		- Could **NOT** install numpy 1.18.5
	- Conda environment: numpy3.8.19
		- Installed numpy 1.24.4 without prompting
		- Could **NOT** install numpy  2.0.0
		- Could not install fairscale when trying to test further and 
	- Conda environment: python3.9.19
		- Installs both numpy 2.0.0 and 3.9.19
		- Runs Nkunga.py with a different error
		- Is not available to download from python website

_Morning 06/27_
- Arrived at 7:20
- Updated blog
- Created python environemnt
	- Python Version = 3.10.11
	  numpy = 1.24.4
	- Created in VSCode (this is a really efficient method)
	- Numpy dependency issues are gone 
- [Error 1](c:\Users\nkungad\Desktop\LLaMA2\.venv\lib\site-packages\torch\distributed\distributed_c10d.py:613: UserWarning: Attempted to get default timeout for nccl backend, but NCCL support is not compiledwarnings.warn("Attempted to get default timeout for nccl backend, but NCCL support is not compiled"))
	- [Solution](https://discuss.pytorch.org/t/runtimeerror-distributed-package-doesnt-have-nccl-built-in/176744) **DID NOT WORK**
		- NCCL Error: pytoch is using cpu-onlypip 
	- [Solution 2](https://aronhack.com/run-llama-2-and-other-open-source-llm-in-python-locally/)
		- 
- [Error 2](ValueError: Error initializing torch.distributed using env:// rendezvous: environment variable RANK expected, but not set)
	- ***Cannot torchrun anything due to SSL Verification Issues
- Caniballize Nkunga.py
	- Didn't result in much. File runs fine except when it tries to run everything in the file
- Just use pythorch

_Afternoon 06/27_
- Before leaving internship, ask Cooper how he interned for the antional la
- Lunch and learn was very cool
	- Aviation and drone branch; got to see a test flight; really cool makerspace
- [Error 1](c:\Users\nkungad\Desktop\LLaMA2\.venv\lib\site-packages\torch\distributed\distributed_c10d.py:613: UserWarning: Attempted to get default timeout for nccl backend, but NCCL support is not compiled warnings.warn("Attempted to get default timeout for nccl backend, but NCCL support is not compiled")) 
	- PTwGPU.py
		- Cuda is available for GPU usage
			- [Source](https://saturncloud.io/blog/how-to-check-if-pytorch-is-using-the-gpu/#:~:text=Checking%20if%20PyTorch%20is%20Using%20the%20GPU,-So%2C%20how%20do&text=calling%20the%20torch.-,cuda.,want%20to%20use%20the%20CPU.)
			- Reinstalling pytorch to making sure that pytorch is trying to use cuda
				- [Source](https://github.com/meta-llama/llama3/issues/153)
		- Dead end: PyTorch is using GPU
			- Interesting, even when testing with Torch using the CPU, the NCCL error still occurs
	- LLaMA not on Windows [thread](https://github.com/meta-llama/llama3/issues/132)?
		- Gloo
			- Links
				- https://github.com/meta-llama/llama3/issues/127
				- https://github.com/meta-llama/llama3/blob/main/llama/generation.py#L68
				- https://github.com/meta-llama/llama3/issues/132
				- https://github.com/ccozad/ml-reference-designs/blob/master/llm/llama-3/hello-world/README.md
				- https://discuss.pytorch.org/t/how-to-set-backend-to-gloo-on-windows/161448/8
				- https://discuss.huggingface.co/t/run-training-script-in-ddp-using-gloo/15406
			- Tl;dr: changed line 85 in generation.py
				- Original: torch.distributed.init_process_group("nccl")
				- New: torch.distributed.init_process_group("gloo")
	- [Error 2](python -m torch.distributed.launch llama/example_chat_completion.py)
		- Rank not found
			- [Solution](https://github.com/meta-llama/llama/issues/391)
	- One last error with rank and perhaps socketing. 

_Morning 06/28_
- [Warning 1](W0628 08:22:34.334000 26188 torch\distributed\elastic\multiprocessing\redirects.py:27]NOTE: Redirects are currently not supported in Windows or MacOs.c:\Users\nkungad\Desktop\LLaMA2\.venv\lib\site-packages\torch\distributed\launch.py:183: FutureWarning: The module torch.distributed.launch is deprecatedand will be removed in future. Use torchrun.Note that --use-env is set by default in torchrun.)
	- Use [torchrun](https://pytorch.org/docs/stable/elastic/run.html)
	- pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
- [Error 1]([rank0]: AssertionError: no checkpoint files found in llama\llama-2-7b-chat)
	- Solution: changed the path in Nkunga.py from a relative path of the entire path **VALIDATION**
- [Error 2]([rank0]: AssertionError: llama\tokenizer.model)
	- Solution: changed the path in Nkunga.py from relative path to the entire path **VALIDATION!!!!**
- Book/Journal club
	- Both were fun; book club got snubbed because we had to talk about journal club
- THE PROGRAM RAN
	- Still has a few errors
	- It took 820 seconds to run 
		- This is 13 minutes
	- Created Nkunga.txt to model model testing. 
		- All Nkungas have been changed to Initials

_Afternoon 06/28_
- I tried restructuring things for a GitHub repository (private) and broke everything. Things are broken in a very stable way though so I'm remaking the environemnt
- Mundy notes
	- Using the model:
			- Give the raw JSON
				- Intermediat filter
			- Filter model gets rid of irrelevant data
			- LLaMA
	- Schedule weekly tormeeting with Kyle 
	- Heilemier conjecutre
- Everything is fixed now on the environment side
- Second.py is able to run
- Initial.py ran again (2:35) but with no message errors/glitches 
	- Old Initial.txt is now saved in as InitialGLICHED.txt
	- Replacement Initial.txt is now being created
- I commented out the warning about redirects not being supported in Windows or MacOs [at](W0628 14:41:04.223000 36916 torch\distributed\elastic\multiprocessing\redirects.py:27] NOTE: Redirects are currently not supported in Windows or MacOs.) 
- Initial.txt failed when trying to crat the emoji question
- Making a new venv?
	- torchrun stopped working so I had to remake another venv; is this going to be a constant thing?
	- I had the paths wrong and the version of pythorc downlaoded
- How to set up a venv
	1. In VSCode, create a new venv through the bottom left option to create one using a specific version of Python
		1. Make sure to do this in the folder you want the environment to exist in
		2. By creating the venv in the wanted folder, VSCode my prompt you to already download the modules needed through a requirement.txt file
	2. In the Command Prompt (not terminal), activate the .venv by going the respctive folder > .venv > Scripts and typing the command: activate.bat
	3. exit that folder (cd ../../llama) and pip install any missing modules
		1. pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
	4. Run programs with torchrun
- Half of the runs made have "Initial" runs made jsut break with no real reason as to wy at the moment
- ToDo
	- Test a run while internet is off
	- Parse fake JSON file 
		- Create fake JSON file
		- Fil should have simple coordinates and ask the LLM how to get to one point to another
	- What for GPU usage