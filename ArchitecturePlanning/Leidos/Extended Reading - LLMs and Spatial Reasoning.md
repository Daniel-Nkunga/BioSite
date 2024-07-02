
[**Exploring and Improving the Spatial Reasoning Abilities of Large Language Models**](https://arxiv.org/pdf/2312.01054)
*By [Manasi Sharma](https://manasi-sharma.github.io/) - Stanford University* %%This a stupid simple but really easy to read GitHub page%%
- **Abstract**: paper will explore out of the box performances for spatial reasoning of Large Language Models, will propose novel prefix-based prompting which yields 33% improvement in 3D trajectory  and 10% increase in zero-shot prompting
	- _<u>What is zero shot prompting</u>: prompts that the model an understand and use that don't contain examples or demonstrations
- **Introduction**
	- LLM are great at labeling data but fall flat at spatial recognition, a type of labeling data
	- Accuracy for spatial recognition can be improved wit prompting techniques such as In-Context Learning and/or Chain-of-Though prompting
		- Proposed method in paper is a pre-fix prompt with more general examples and  achievements
		- <u>What is In-Context Learning (ICL) prompting?</u>: a method of prompt engineering where demonstrations of the task are provided to the model as a part of the prompt in natural language
			- <span style ="color: blue">This can be done for a quick test where my context is explaining how I would tell Mark to go to (0,0) before asking LLaMA o tell Mark how to go elsewhere</span>
		- <u>What is Chain of Though (CoT) prompting?</u>: prompting where yo provide n example showing how you reason throughout a similar problem and ask the LLM a similar question to have it also reason out to you its process
			- <span style ="color: blue">This can also be done as a quick test in combination with the last message</span>
- **Related Works**
	- LLMs can improve and compete complete low-level robotic action sequences or repetitive progressions but tend to struggle for longer sequences with more parameters/information
	- Though LLM have been applied to robotic, this paper will delve into how they can understand and control robotic processes in a zero-shot manner
	- CoT and ICL have been shown to improve results in general but not explicitly in spatial recognition trends
- **Language Models and Trajectory Labelers**
	- <span style ="color: #e3c42b">Section 3.1.1 is still above me but it talks about the generation of tokens using Product Notation (like summation notation)</span>
	- <span style ="color: #e3c42b">**This entire section was skipped due to its complexity**</span>%%I want this bolded but that's an issue for later%%
- **Conclusion**
	- Models (ChatGPT 3.5, 4, and LLaMA 2 7B) were tested on 2D direction and path labeling, 3D trajectory labeling and abstract relationship identification
	- Models are okay in 2D direction labeling, bad at 3D trajectory labeling
		- Culprits of 3D issues: irregularities f the trajectories, reliance of CoT needing specific examples, 
	- Developed Spatial Prefix-Prompting that ask a  simple related question first in order to answer a larger, more complex question on spatial situations 
		- <span style ="color: e3c42b">You skipped this and will need to come back and read this</span>

[**Advancing Spatial Reasoning in Large Language Models: An In-Depth Evaluation and Enhancement Using the StepGame Benchmark**](https://arxiv.org/pdf/2401.03991)
*By: Fangjun Li, David C. Hogg, & [Anthony G. Cohn](https://www.turing.ac.uk/people/researchers/anthony-cohn) at the Alan Turing Institute*
- **Abstract**: Spatial reason remains to be a major hurdle for LLMs, especially when using the StepGame Benchmark. There is some errors in the StepGame benchmark, will be redefined by combining template-to-relations mapping with logic-based reasoning to provide a more accurate dataset for model evaluation. Chain of Thought and Tree of Thought achieve higher accuracy with other enhancements in this paper to show the the true reasoning skills of LLMs.
	- %%I don't like the column format and this was not fun to read imo%%
	- <u>What is Tree of Thought prompting?</u>: prompting method based off the CoT technique where the suer provides a multistep problem and the LLM provides step-by-step reasoning for its solution
- **Conclusion**
	-  Revisions to the StepGame benchmark have corrected template error; this paper focuses on StepGame but further research can be don on other benchmark using their methods
	- <span style ="color: e3c42b">You skipped this because the language of this paper in general just isn't fun</span>

[**Reframing Spatial Reasoning Evaluation in Language Models: A Real-World Simulation Benchmark for Qualitative Reasoning**](https://arxiv.org/pdf/2405.15064)
*By: Fangjun Li, David C. Hogg, & Anthony G. Cohn at the Alan Turing Institute*

**Disentangling Extraction and Reasoning in Multi-hop Spatial Reasoning**
*[Roshanak Mirzaee](https://roshanakmirzaee.com/) &  Parisa Kordjamshidi at Michigan State university*
- **Abstract**: Spatial reasoning is hard 