// part 1

// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let counter = 0;
const increment = () => {
  counter++;
  increment();
};

try {
  increment();
} catch (error) {
  console.log(`Error: ${error}`);
  console.log(`Counter: ${counter}`);
}


// part 2

// Using setTimeout, you can place tasks into the event queue. This sets the task to be executed after the current call stack is cleared and after the browser has had a moment to render.
// Implement the following:
// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.



// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// Once complete, use the alert() method to alert the user that the calculation is finished.

