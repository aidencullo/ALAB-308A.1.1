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


// part 3

// Using setTimeout, you can place tasks into the event queue. This sets the task to be executed after the current call stack is cleared and after the browser has had a moment to render.
// Implement the following:
// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.

const element = document.createElement('div');
document.body.appendChild(element);

function isPrime(n){
  for (let i = 2; i < n; i++) {
    if (n % i == 0){
      return false;
    }
  }
  return true;
}

function getNext(i, n){
  if (isPrime(i)){
    const el = document.createElement('div');
    el.textContent = i;
    element.appendChild(el);
  }
  if (i < n){
    setTimeout(() => {
      getNext(i + 1, n);
    }, 0);
  } else {
    alert('Calculation is finished');
  }
}

getNext(0, 1000);
