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
-
Error message [DO NOT OPEN]
'''
	(LLaMA2) C:\Users\nkungad\Desktop\LLaMA2\llama>torchrun --nproc_per_node 1 example_chat_completion.py \ --ckpt_dir llama-2-7b-chat/ \ --tokenizer_path tokenizer.model \ --max_seq_len 512 --max_batch_size 6
	W0625 13:30:08.454000 27336 torch\distributed\elastic\multiprocessing\redirects.py:27] NOTE: Redirects are currently not supported in Windows or MacOs.
	[W socket.cpp:697] [c10d] The client socket has failed to connect to [d-5QMM9N3.corp.leidos.com]:29500 (system error: 10049 - The requested address is not valid in its context.).
	
	A module that was compiled using NumPy 1.x cannot be run in
	NumPy 2.0.0 as it may crash. To support both 1.x and 2.x
	versions of NumPy, modules must be compiled with NumPy 2.0.
	Some module may need to rebuild instead e.g. with 'pybind11>=2.12'.
	
	If you are a user of the module, the easiest solution will be to
	downgrade to 'numpy<2' or try to upgrade the affected module.
	We expect that some modules will need time to support NumPy 2.
	
	Traceback (most recent call last):  File "C:\Users\nkungad\Desktop\LLaMA2\llama\example_chat_completion.py", line 8, in <module>
	    from llama import Llama, Dialog
	  File "C:\Users\nkungad\Desktop\LLaMA2\llama\llama\__init__.py", line 4, in <module>
	    from .generation import Llama, Dialog
	  File "C:\Users\nkungad\Desktop\LLaMA2\llama\llama\generation.py", line 13, in <module>
	    from fairscale.nn.model_parallel.initialize import (
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\__init__.py", line 16, in <module>
	    from . import nn
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\nn\__init__.py", line 11, in <module>
	    from .data_parallel import FullyShardedDataParallel
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\nn\data_parallel\__init__.py", line 20, in <module>
	    from .sharded_ddp import ShardedDataParallel
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\nn\data_parallel\sharded_ddp.py", line 26, in <module>
	    from fairscale.optim import OSS
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\optim\__init__.py", line 13, in <module>
	    from .oss import OSS
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\optim\oss.py", line 48, in <module>
	    obj: Any, src_rank: int, group: object = dist.group.WORLD, dist_device: torch.device = torch.device("cpu")
	C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\optim\oss.py:48: UserWarning: Failed to initialize NumPy: _ARRAY_API not found (Triggered internally at ..\torch\csrc\utils\tensor_numpy.cpp:84.)
	  obj: Any, src_rank: int, group: object = dist.group.WORLD, dist_device: torch.device = torch.device("cpu")
	C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\distributed_c10d.py:613: UserWarning: Attempted to get default timeout for nccl backend, but NCCL support is not compiled
	  warnings.warn("Attempted to get default timeout for nccl backend, but NCCL support is not compiled")
	[W socket.cpp:697] [c10d] The client socket has failed to connect to [d-5QMM9N3.corp.leidos.com]:29500 (system error: 10049 - The requested address is not valid in its context.).
	Traceback (most recent call last):
	  File "C:\Users\nkungad\Desktop\LLaMA2\llama\example_chat_completion.py", line 104, in <module>
	    fire.Fire(main)
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fire\core.py", line 143, in Fire
	    component_trace = _Fire(component, args, parsed_flag_args, context, name)
	                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fire\core.py", line 477, in _Fire
	    component, remaining_args = _CallAndUpdateTrace(
	                                ^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fire\core.py", line 693, in _CallAndUpdateTrace
	    component = fn(*varargs, **kwargs)
	                ^^^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\llama\example_chat_completion.py", line 35, in main
	    generator = Llama.build(
	                ^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\llama\llama\generation.py", line 85, in build
	    torch.distributed.init_process_group("nccl")
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\c10d_logger.py", line 75, in wrapper
	    return func(*args, **kwargs)
	           ^^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\c10d_logger.py", line 89, in wrapper
	    func_return = func(*args, **kwargs)
	                  ^^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\distributed_c10d.py", line 1312, in init_process_group
	    default_pg, _ = _new_process_group_helper(
	                    ^^^^^^^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\distributed_c10d.py", line 1513, in _new_process_group_helper
	    raise RuntimeError("Distributed package doesn't have NCCL built in")
	RuntimeError: Distributed package doesn't have NCCL built in
	E0625 13:30:13.849000 27336 torch\distributed\elastic\multiprocessing\api.py:826] failed (exitcode: 1) local_rank: 0 (pid: 34876) of binary: C:\Users\nkungad\Desktop\LLaMA2\Scripts\python.exe
	Traceback (most recent call last):
	  File "<frozen runpy>", line 198, in _run_module_as_main
	  File "<frozen runpy>", line 88, in _run_code
	  File "C:\Users\nkungad\Desktop\LLaMA2\Scripts\torchrun.exe\__main__.py", line 7, in <module>
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\elastic\multiprocessing\errors\__init__.py", line 347, in wrapper
	    return f(*args, **kwargs)
	           ^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\run.py", line 879, in main
	    run(args)
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\run.py", line 870, in run
	    elastic_launch(
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\launcher\api.py", line 132, in __call__
	    return launch_agent(self._config, self._entrypoint, list(args))
	           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\launcher\api.py", line 263, in launch_agent
	    raise ChildFailedError(
	torch.distributed.elastic.multiprocessing.errors.ChildFailedError:
	============================================================
	example_chat_completion.py FAILED
	------------------------------------------------------------
	Failures:
	  <NO_OTHER_FAILURES>
	------------------------------------------------------------
	Root Cause (first observed failure):
	[0]:
	  time      : 2024-06-25_13:30:13
	  host      : d-5QMM9N3.corp.leidos.com
	  rank      : 0 (local_rank: 0)
	  exitcode  : 1 (pid: 34876)
	  error_file: <N/A>
	  traceback : To enable traceback see: https://pytorch.org/docs/stable/elastic/errors.html
	============================================================
	
	(LLaMA2) C:\Users\nkungad\Desktop\LLaMA2\llama>
'''
Initial traceback issue stops here
	'''
		Traceback (most recent call last):  File "C:\Users\nkungad\Desktop\LLaMA2\llama\example_chat_completion.py", line 8, in <module>
		    from llama import Llama, Dialog
		  File "C:\Users\nkungad\Desktop\LLaMA2\llama\llama\__init__.py", line 4, in <module>
		    from .generation import Llama, Dialog
		  File "C:\Users\nkungad\Desktop\LLaMA2\llama\llama\generation.py", line 13, in <module>
		    from fairscale.nn.model_parallel.initialize import (
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\__init__.py", line 16, in <module>
		    from . import nn
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\nn\__init__.py", line 11, in <module>
		    from .data_parallel import FullyShardedDataParallel
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\nn\data_parallel\__init__.py", line 20, in <module>
		    from .sharded_ddp import ShardedDataParallel
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\fairscale\nn\data_parallel\sharded_ddp.py", line 26, in <module>
		    from fairscale.optim import OSS
	'''
Socket error is thrown here
	'''
		C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\distributed_c10d.py:613: UserWarning: Attempted to get default timeout for nccl backend, but NCCL support is not compiled
		  warnings.warn("Attempted to get default timeout for nccl backend, but NCCL support is not compiled")
		[W socket.cpp:697] [c10d] The client socket has failed to connect to [d-5QMM9N3.corp.leidos.com]:29500 (system error: 10049 - The requested address is not valid in its context.).
	'''

