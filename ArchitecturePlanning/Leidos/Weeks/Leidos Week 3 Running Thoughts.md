  
Links: [[Leidos]] [[Leidos Week 4 Running Thoughts]]

Weekly To-Do

- [x] Find/Folder for Leidos

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

    -  Forth (example_chat_completion)

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

        - Article shows the multiple ways you can give spatial information to a LLM (Square,  Random, Snake, etc)

            - Square: tells the model where objects row by row and left to right and results in the greatest level of accuracy

            - Random: tells the location of objects using coordinates (notably starting from one and not zero) in a random order

                - Has lower accuracy than Square, but higher than snake

                - Could easily be implemented as a for loop for preprocessing

            - LLaMA was omitted from these results because 70B  were already very low

_Afternoon 07/02_

- Lunch and learn with Keith about the missile recovery program, Gremlins, and future research (SHARK)

- Reading articles Mundy sent, noted at [[Extended Reading - LLMs and Spatial Reasoning]]

  

_Morning 07/03_

- Very slow morning; reading for both Journal and Book Club

    - The journal is really good

    - Exploration/Exploitation was a bit slow imo, but Sorting is fun

    - Journal Club went very long today; Book Club got pushed back into text week

  

_Afternoon 07/03_

- Reading papers, annotating initially on paper

- Mini-Rant about spatial awareness with LLMs

    - Most LLMs are trying to do Spatial Awareness from pure language which isn't common anywhere and is hard even as a human who in theory can do it. Most of the time when presented with pure text, my first instinct is to draw out the situation which a LLM can't do. When it comes to coordinates, the idea is the same though to a (admittedly) lesser degree because of he way coordinates are structured

    - End of day update.

  

    Most of the papers you sent me are focused on spatial reasoning from pure text (ex. the StepGame Benchmark) which is something we could do by preprocessing the JSON into a text based coordinates, but it has the disadvantage (in my opinion) of being a convoluted solution. For example, when I to follow the benchmarks myself, my first instinct is to try and draw them out and when I remind myself that I shouldn't do it because the LLM can't do that, I'm constantly second guessing my answers even though these problems aren't hard. I worry that this approach will fall into the same hurdles that these researches are fighting through, but if that the method we want to take, I'm not opposed to trying it out. 

    If we came from a pure coordinate based approach, we can see the model isn't able to process the full JSON and even in smaller files (like the dummy case I've been using), it still doesn't produce the best results. 

  

    This is a pretty major and roundabout approach to processing the data but we could focus on each object individually and record metrics on how they are interacting with each other. For example for a plane, we can keep track of its distance an airport and, if the distance decreases over three timesteps, the model that slightly increase its approaching metric by X points. At a threshold of points, the model will add to another.

  

_Morning 07/04_

- Multiple paths:

    - Preprocess JSON to input coordinates/positional information as a text string/description

        - Most commonly practiced by the articles and thus has the most information on how to do it/its shortcomings

    - Fine tune model of JSON raw and hope the LLM learns what descriptions we're looking for from the information we find it

        - LLM has already proven to not be great at interpreting JSONs and I haven't done much research at the moment at how to train this

        - This can also be varied with different amounts of preprocessing to clean the JSON or add a bit of additional context

    - Preprocessing using a LLM (test proposed by Cooper)

        - Feed in the JSON as input, ask the LLM to describe the situation as a question, feed that question back into the LLM and use those questions as a base to question the LLM

        - Teacher-Student approach

    - Projection based approach (proposed by Sid)

        - Train he LLM to have the spatial reasoning of a room down to a tee; when inputting the data from the simulation, have the LLM describe it as something projected onto the idealized room

            - Ex: if you have a perfect understanding of your office, to describe someone walking around in the room above you, instead of describing them in their room, you try to describe them in your room

                - "Guy is walking towards Chris's desk, where they have their chair positioned at"

    - Metric approach (multimodal approach proposed by Daniel)

        - Model One is a cleaner AI that focuses on each object individually and describes its relation to every other object in the simulation

            - Plane 1:

                  Distance from Port 1: 50 units

                  Distance from Port 2: 75 units

                  Distance from Plane 1: 25 units

        - Model Two looks at the relations between every other object and sees their relation over time. If the relation between two object over time, it will add a sentence to the "the Metric" describing what's going on

            - Example addition to Metric:

                  Timestep 1:

                      Plane 1:

                          Distance from Port 1: 75 Units

                  Timestep 2:

                      Plane 1:

                          Distance from Port 1: 70 Units

                  Timestep 3:

                      Plane 1:

                          Distance from Port 1: 65 Units

              Plane approaching Port 1: +0.1

      - Model Three looks at the metrics of an objects and generates a sentence about that object if the metric reaches a certain threshold. That sentence is then added to the "Storybook" which will be fed into the final LLM

          - Example addition to story book

                Plane 1 approaching Port 1: 0.5

                    Storybook: Plane one is approaching the airport at (XX, YY)

        - This at this level, the model can/should also be trained to also combine metric together:

              Plane 1 approaching Port 1: 0.5

              Plane 2 approaching Port 1: 0.7

              Plane 3 approaching Port 1: 0.6

                  Storybook: Team 1 is attacking the airport at (XX, YY) with three planes (plane 1, 2, and 3)

      - Final model will take the Storybook and make a general summary about the state of the simulation. If a user ask a more specific question, it will then refer to the smaller details in the Storybook and see if it has any information related to the question

  - I also began reading "Evaluating Spatial Understandings of Large Language Models"

  

_Afternoon 07/04_

  

After much consideration, I have come to terms with the fact that I am not good at spatial reasoning. When I read Harry Potter as a child and ingested JK Rowling's words of the Great Hall in book one, I couldn't' imagine in great detail what the hall looked like. I knew about the floating candles that illuminated the rook like starts in the night. I knew about the tables hundreds of feet long where kids sat divided by their house. I knew the house colors, the people, their great feast that sat before them, and everything about the situation. But in reality, I wasn't able to visualize much more than the features in isolation. I had cheated to get the general look of the hall by the small snippets of the movie I had seen. I couldn't even begin to explain the exact positions of the table, the chairs, or anything in the room

  

And thus is the problem with Large Language Models when it comes to spatial reasoning becomes somewhat apparent. The model is trained off of all of the vast sums of human writing and, though Harry Potter might not be the best example case, it becomes quickly present that human language is not to specific when it comes to describing locations. . . .

  

- Worked on learning the json import and cleaning up the one line AM file (saved as new_AM.json)

- a;lskdfj;ajd;lksajf;lsakjfsa