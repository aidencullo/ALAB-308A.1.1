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

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
//   Once complete, use the alert() method to alert the user that the calculation is finished.

// Using what you have learned throughout this lesson, modify your function such that each number has an opportunity to render after it is calculated, and the alert only appears once all numbers have been rendered.


// Cache the HTML element into a JavaScript variable
const primeContainer = document.getElementById('prime-container');

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function addPrimesToContainer(n) {
    primeContainer.innerHTML = '';
    let i = 1;
    function calculatePrimes() {
        if (i <= n) {
            if (isPrime(i)) {
                const p = document.createElement('p');
                p.textContent = i;
                primeContainer.appendChild(p);
            }
            i++;
            setTimeout(calculatePrimes, 0);
        } else {
            alert('Calculation finished!');
        }
    }
    calculatePrimes();
}

addPrimesToContainer(1000);
