Links: [[Leidos Week 4 Running Thoughts]][[Leidos/Leidos]]


Weekly To-Do
- [ ] Ask Mundy if I would be able to do knowledge graph research as a personal project
- [ ] 

_Morning 07/15_
- Reworking message by deleting a lot of information and cleaning up repeated timesteps in the AM JSON file
	- Removed information: velocity, rotation, ew
- Noticed redundancy information in timesteps being recorded
		- 28 lines were repeated in the AM file we got sent
		- Manu and Dylan explained how its an actual issue with how the data is being recorded by AM so there isn't much to do but this is still fine
			- Timesteps are in seconds so math still adds up properly 
- Giving the LLM information as like constants; no status so all entities will always be actionable; no assumptions when tracking, all absolutes; 
- Trying to get json to print a key as a string is a hell on earth that is hard to describe
	- "Solutions" only work for toy problems so far where there are only one weapon or asset on each asset/airport
- I don't remember my reasons as to avoiding proper nouns but I need to get rid of all of my pronouns 

_Afternoon 07/15_
- Final bits of cleaning
	- Airport fuel and health mean nothing and were deleted
	- Last fixes on wording
- Reanalyzing QLoRA (also running it again starting at 2:40 and saving output to Output.txt)
	- **Search for:** 
		- \# THIS NEEDS CHANGING
		- \#THIS NEEDS LOOKING INTO
	- edited the output "metrics.json" fil at the end of train to go to a custom file at "/home/nkungad/main/QLoRAMetrics.json"
	- "hfparser" at the very beginning of train takes parameters we need to change
		- **ModelArguments** needs to be changed to "meta-llama/Meta-Llama-3-8B-Instruct"
		- **DataArguments** has a lot of thing I wouldn't change (because I don't know what they mean) but the dataset field should be changed to our (local) dataset
			- Same thing with the dataset_format path
		- I don't understand a lot of the things going on in **TrainingArguments**
			- "mmlu_dataset" should stay because its already doing few shot but we can change it to zero-shot if need be
		- **def make_data_module(tokenizer: transformers.PreTrainedTokenizer, args) -> Dict:** formatting our own dataset for improvised fine tuning should probably be changed
			- 
		- [Spelling mistake](learning_rate: float = field(default=0.0002, metadata={"help": 'The learnign rate'}))
	- Created Nkunga.py to implement changes
- Ending the day for the most part by reading through qlora.py, creating JSON argument explainer, and labeling some files with name and date
- .endswith is a cool command
	- It takes a string argument
- Found out that I totally missed akv