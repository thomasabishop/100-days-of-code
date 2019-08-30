# 100 Days Of Code - Log

### Day 1: Monday, 19 August 2019 


**Today's Progress**: 
* I began 100D0C

**Link to work:** None yet

### Day 2: Tuesday, 20 August 2019 


**Today's Progress**: 
* I revised basic JS syntax with examples.



**Link to work:**  [refamiliarisation.js](https://github.com/thomasabishop/100-days-of-code/blob/master/wk_01/day_02/refamiliarisation.js)

### Day 3: Wednesday, 21 August 2019 


**Today's Progress**: 
* I practised function expressions
* I practised `while` and `do while` loops
* I built a template for my DOM manipulation projects
* I started a small project: a dark mode toggler. Not yet complete.
* I started my flash card questions 


**Link to work:** 
* [DOM manipulation template](https://codepen.io/thomasabishop/pen/GRKNdmy)
* [Darkmode toggler](https://codepen.io/thomasabishop/pen/ZEzBrxK)

 ### Day 4: Thursday, 22 August 2019 


**Today's Progress**: 
* I learned the correct syntax for creating new DOM nodes.

**Supplementary**: 
* I got distracted by something on my own site today.


**Link to work:** 
* [dom_creating_nodes.html](https://github.com/thomasabishop/100-days-of-code/tree/master/wk_01/day_04)

 
 ### Day 5: Friday, 23 August 2019 


**Today's Progress**: 
* I learned the correct syntax for creating new DOM nodes.

**Supplementary**: 
* I got distracted by something on my own site today.


**Link to work:** 

* [dom_creating_nodes.html](https://github.com/thomasabishop/100-days-of-code/tree/master/wk_01/day_04)

### Day 6: Saturday, 24 August 2019


**Today's Progress**: 
* I solved a practice exercise to calculate the median value for a given array of integers.
* I continued to practise DOM manipulation: adding nodes and started to learn the styling syntax which is pretty straightforward. Basically `node -> style -> color/fontSize etc`.
* I also answered a question on S.O. That way the 75 minutes I spent trying to get VS Code to allow me to use a custom font for comments is my gift to future generations hehe.

**Supplementary**: 
* I found the median exercise tough because placement is important to calculate this kind of average. How do you define 'the middle of the integer sequence' in JS? On the face of it, this doesn't look like something that can be derived purely mathematically. I found a way by filtering my function into two control flows, depending on whether the total number of integers was odd or even (using modulus to derive a 1 for odd and 0 for even). From this I found a way to find the middle value and then apply this to the array.
* I found that you cannot use the DOM manipulation method `node.querySelectorAll()` and then expect whatever change you make to apply automatically to all the matches of the query. This is because the method returns the matches as an array. So, once you have made your selection and match, you must then apply the alteration to each element in the array using a `foreach` loop.


**Link to work:** 
* [dom_creating_nodes2.html](https://github.com/thomasabishop/100-days-of-code/blob/master/wk_01/day_05/dom_creating_nodes2.html)
* [medians.html](https://github.com/thomasabishop/100-days-of-code/blob/master/wk_01/day_05/medians.html)
* [Change the Comment Font in VS Code](https://stackoverflow.com/a/57633298/11594028)

### Day 7: Sunday, 25 August 2019 

**Today's Progress**: 
* I updated all columns in my _Built-in properties and methods_ Notion spreadsheet, improving the syntax and including the full technical name for each method.
* I attempted to refine the medians script. I succeeded but only reduced the code a little bit.
* I installed Gatsby and started working on vers. 2.0 of my professional site.

**Link to work:** 
* [Built-in methods and properties ](https://www.notion.so/4d03f5d50d7447a3b4f0a6a9e2d9b06d?v=e2e44d94f8214a969291be807520b25d)
* [thomas-bishop.co.uk.v2](https://github.com/thomasabishop/thomas-bishop.co.uk__v2.0)

### Day 8: Monday, 26 August 2019 

**Today's Progress**: 
* I spent the day book-studying with Duckett. I learned about `this` and **constructor syntax** for objects and classes.
* I worked on my Gatsby.js professional site.

### Day 9: Tuesday, 27 August 2019 

**Today's Progress**: 
* I started the day with some code exercises. Wasn't very happy with the results.
* My Gatsby site went live on Netflix
* I completed my darkmode toggler.

**Link to work:** 
* [thomas-bishop.co.uk](https://www.thomas-bishop.co.uk)
* [Dark mode toggler](https://codepen.io/thomasabishop/pen/ZEzBrxK)

### Day 10: Wednesday, 28 August 2019 

**Today's Progress**: 
* No JS today as I was occupied with redoing my CV and drafting cover letters for jobs. I am using LaTeX to typeset my resume so I managed to link it to 100 Days of Code by setting up LaTeX to run locally in VS Code, not in Overleaf.
* This also gave me the idea to develop a 'GitHub' style template for LaTeX which could be useful when I want to print written content very clearly with minimal styling.

**Link to work:** 
* [Resume repository](https://github.com/thomasabishop/thomas-resume)


### Day 11: Thursday, 29 August 2019 

**Today's Progress**: 
* Wrote up notes on `this`


### Day 12: Friday, 30 August 2019 

**Today's Progress**: 
* Completed gratuity calculator code challenge in the morning. Now I have the script I will turn this into a CodePen showcase with a GUI soon.
* Started writing up Duckett notes.
* Got a bit waylaid by deliving into Iffy's but it was educative. See below...
* Created comparisons for the different types of function.

**Specific learnings**:
* You can group related functions into one and use an array to distinguish the calls. See [prism.js](week_2/prism.js)
* You can use both anonymous functions and immediately-invoked functions as methods in objects.
* Whilst iffy's are immediately invoked, you can in fact hold them in a variable, however, **the variable does not store the function, it stores the value it generates**.


**Links to work:** 
* [prism.js](week_2/prism.js)
* [gratuity.js](week_2/gratuity.js)
* [function_expressions.js](week_2/function_exprsessions)
