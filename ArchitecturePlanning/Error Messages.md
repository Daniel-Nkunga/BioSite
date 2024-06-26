Link: [[Leidos Week 2 Running Thoughts]]

_06/25_
Running: ```
torchrun --nproc_per_node 1 example_text_completion.py \
    --ckpt_dir llama-2-7b/ \
    --tokenizer_path tokenizer.model \
    --max_seq_len 128 --max_batch_size 4
```
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

_06/25_
Running: ```
torchrun --nproc_per_node 1 example_text_completion.py \
    --ckpt_dir llama-2-7b/ \
    --tokenizer_path tokenizer.model \
    --max_seq_len 128 --max_batch_size 4
```

_06/26_
1. Running Nkunga.py
	1. Tl;dr: Numpy is too advanced and needs to be downgraded to below 2.X.X
	2. '''A module that was compiled using NumPy 1.x cannot be run in
		NumPy 2.0.0 as it may crash. To support both 1.x and 2.x
		versions of NumPy, modules must be compiled with NumPy 2.0.
		Some module may need to rebuild instead e.g. with 'pybind11>=2.12'.
		
		If you are a user of the module, the easiest solution will be to
		downgrade to 'numpy<2' or try to upgrade the affected module.
		We expect that some modules will need time to support NumPy 2.
		
		Traceback (most recent call last):  File "C:\Users\nkungad\Desktop\LLaMA2\llama\Nkunga.py", line 8, in <module>
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
		Traceback (most recent call last):
		  File "C:\Users\nkungad\Desktop\LLaMA2\llama\Nkunga.py", line 104, in <module>
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
		  File "C:\Users\nkungad\Desktop\LLaMA2\llama\Nkunga.py", line 35, in main
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
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\distributed_c10d.py", line 1305, in init_process_group
		    store, rank, world_size = next(rendezvous_iterator)
		                              ^^^^^^^^^^^^^^^^^^^^^^^^^
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\rendezvous.py", line 234, in _env_rendezvous_handler
		    rank = int(_get_env_or_raise("RANK"))
		               ^^^^^^^^^^^^^^^^^^^^^^^^^
		  File "C:\Users\nkungad\Desktop\LLaMA2\Lib\site-packages\torch\distributed\rendezvous.py", line 219, in _get_env_or_raise
		    raise _env_error(env_var)
		ValueError: Error initializing torch.distributed using env:// rendezvous: environment variable RANK expected, but not set
2. Running:
	1. Error Focus: 
	   '''
	    C:\Users\nkungad\AppData\Local\Temp\1\pip-install-mcx_kr89\numpy_da2b332a0c744c4f8d30b9cc2a45802c\tools\cythonize.py:75: DeprecationWarning: distutils Version classes are deprecated. Use packaging.version instead.required_version = LooseVersion('0.29.14')
	   '''
	3. Solution: 
3. askldfjs'a
4. asdfa
5. dasfd
6. adfa
7. dafdsa
8. fa
9. sdfa
10. sdf
11. asdf
12. asdf