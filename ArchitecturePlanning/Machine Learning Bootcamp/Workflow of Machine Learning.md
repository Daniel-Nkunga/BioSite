Links: 

https://towardsdatascience.com/workflow-of-a-machine-learning-project-ec1dba419b94
Look up later
- PCA - for wide data
- Clustering - for long data
	- KNN

**With Mundy

1. Det Data - Preprocessing
	1. Preprocessing
		1. Format
		2. Impute 
			1. Filling in missing values, outliers, noisy data, 
			2. Done by wholesale deleting data, finding a mean, weight the option
		3. **Representation**
			1. Records, JSON, etc.
			2. How is it fed in? Raw, Graphed
	2. Choose a model
		1. What type of data do we have
			1. *Ordinal data* - number when it comes to orders, not necessarily magnitude
	3. Build your model
	4. Train, Test, and Validate your model
		1. 
		2. Train
			1. Inputting information and creating weights for each node of the model
		3. Test
			1. Verifying the models accuracy and using it to retrain your model
		4. Validate
			1. Information the model that has never seen that should tie your model into real like
			2. Validate is often skipped
				1. Either seen as the same thing as Test or skipped entirely
		5. Validation and Test have metrics decided on by the builder or the user of the model
			1. Skeptics most needed here 
			2. True Positive (etc.), AUC, ROC curve