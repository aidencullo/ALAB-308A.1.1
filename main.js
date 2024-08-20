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
