# Brief

To create a basic functional version of "rock paper scissors" in the console (front end to be added later)

## Thoughts before beginning

From my experience thus far, I anticipate the problem not being finding 'a' working solution but finding the most efficient, logical and readable solution.

## Thoughts after completion

*Wow* that was hard. I think a lot of what made that so difficult was me, that is to say:

- I am a perfectionist

For my code to determine a winner, for example, every solution I considered and threw out was less because I hadn't understood the problem and more because of my avoidance of the simplest solution, i.e.:  
```
if (playerSelection === 'paper') {
  if (computerSelection === 'rock') {
      // player wins
  } else if (computerSelection ==='scissors') {
      // player loses
  }
// etc.
```
I was trying to pursue the cleanest, DRYest answer and tied myself in many knots thinking 'but no, there must be a more efficient way of doing it than this' midway through solutions. As it is, I'm sure there are many superior solutions, but at least I'm settled on one which strikes (for me) a balance between being DRY and readable. I had all kinds of wild options floating in my head because:

- I am also a beginner

I now understand that the Odin Project was expecting me to come up with one of a few solutions to the problem as they have only taught me a small handful of 'tools' with which to solve it. In the back of my mind, I was also answering other questions Working from a purely abstracted state of logic, there were all kinds of ideas to find a solution which each begged the question 'is that a thing in JavaScript?' As an example, one idea was to create a scoring system (rock < paper < scissors < rock) by creating an array, either with 4 values and comparing last indexes and first indexes as necessary (to account for the repetition of the first and last value) or by creating a 3 value array by adding values before and after the player selection and comparing indexes. What a headache... As it is, by giving me preparatory steps to the main exercise I was being directed towards a specific way of solving the problem, when with my personal logic I may have approached it differently.

I was also asking myself 'down the road' questions like 'what if more variables were to be introduced', or 'what if I wanted the whole game function to return one enormous string I could invoke wherever I wanted' or all other kinds of additional layers of complexity each representing a challenge beyond the scope of this exercise. I'm aware that the ideal solution could easily transform in to 'rock paper scissors lizard Spock' if required, but mine sure doesn't! I also found myself constantly thinking about the functionality I would like the game to have beyond the functionality asked of me in the exercise (this is still visible in how my version outputs the scores and choices, which was not required). For example, if the player inputs are misspelt, shouldn't some sort of `while` loop ask again until a correct variable is provided? But then if it really was a game of rock paper scissors, wouldn't the UI be some sort of selection (buttons etc.) rather than a text box anyway? I decided I had to put these sorts of ideas aside, at least until I'm asked to return to the project.

## Areas for improvement

- I need more experience at problem solving to know which method is best for me. This project I used a mix of a mess of comments in the IDE, Post-Its on the wall, filling pages of a notebook and rubber duck debugging at my cat Post-It dispenser. The notebook was the most successful, first writing out what `game()` must return, what must change each round, which other problems require access to which information and then the vague 'parts', before writing out progressively more interpretable drafts of the pseudo code until I couldn't observe any problems without debugging, after which the code came quite quickly (as it should). Next time I really need to start with a notebook.

- From what I understand online, functions are a means of making code reusable elsewhere in the code, including in expressions. However, in this exercise, the only time code is rerun is within the 5-round loop, so ultimately I don't see why they're necessary other than to make neat 'boxes' labelling code blocks for readability (just as variables label values for readability). I have been taught that most code is contained within functions, so I guess this principle is important. As things stand, the idea of going back in to my code and wrapping it in a function just to give it a name seems quite arbitrary.

- If the purpose of a function is to calculate new information available outside of it, I don't yet understand the difference between using it to modify variables at a higher scope level and relying on the function's `return` value. In my code block I did a little of both as a result. Most likely this will come with experience.

- I just need more tools! Even the exercise admits you may need to learn `for` loops to complete it correctly.

## Lessons learned

### Start in the notebook!

Being able to quickly and visually interpret the problem (and put a big X through the page and start again) is, unsuurprisingly, the way to start. If I had to guess at a good template now before having the experience to settle on a better one, I'd say:

- the end result
- which decisions must be made to provide it
- which decisions are required to provide everything necessary for the above decisions
- which information is required to make those decisions
- sort which decisions share required information
- create a vague order in which all decisions have access to the information they require (reworking to make logical and DRY)
- repeated pseudo code drafts until perfect

Also:

### Comments don't work for me

A wall of green text with slashes at the start doesn't help me conceive the problem better, it obfuscates it.

### Make every choice about functionality before you begin

This could be in the form of a diagram or a 'movie' script. even I'm sure this is bread-and-butter for UI/UX people.

### Accept that it will get easier as I learn more

The course hasn't even covered arrays yet... Problem solving feels like an entirely new skill, so there will be teething pains.
