## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
querySelector returns the first mathcing Element node within then node"s subtree. Then querySelectorAll returns a NodeList containing all matching Element nodes within the nodes subtree. while getElementsByClassName returns a live collection. and  gelElementById return a single element. 

## How do you create and insert a new element into the DOM?
first you need to create a new element with document.createElement("div") then set its content and then append it to an existing element .

## What is Event Bubbling and how does it work?
Event bubbling is a concept in the dom. it happens when an element receives an event, and that event bubbles up to its parent element in the dom tree.

## What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a pattern based upon the concept of Event  bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received. it improves both the performance and maintainability of you code.


## What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser’s default action (like a link opening or a form submitting).
stopPropagation() stops the event from bubbling up to parent elements, so only the target element handles it.