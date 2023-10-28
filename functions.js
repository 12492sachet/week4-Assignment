/*// This function calculates the area of a rectangle
function calculateArea(length, width) {
  let area = length * width; // Gts the area of rectangle by multipling width and length
  return area; // Return the calculated area
}

let length = 6; // Length of the rectangle
let width = 7; // Width of the rectangle
let area = calculateArea(length, width); // Calling the function to calculate the area

// Displaying the calculated area to the console
console.log("The area of the rectangle is: " + area);*/


/*//Declare a global variable 'globalVar' in the global scope
var globalVar = "I am a global variable";

//Inside a function, declare a local variable 'localVar' with a different value
function demonstrateScope() {
  var localVar = "Hello world!";
  
  //Attempt to access both 'globalVar' and 'localVar' within the function
  console.log("Inside the function:");
  console.log("globalVar:", globalVar);
  console.log("localVar:", localVar);
}

// Call the function
demonstrateScope();

// Observations about variable scope
console.log("Outside the function:");
console.log("globalVar:", globalVar);
// Uncommenting the following line would result in an error since 'localVar' is not defined outside the function.
// console.log("localVar:", localVar);*/


/*function counter() {
  let count = 0; // Private counter variable
  
  // The inner function, which has access to the count variable due to closure
  function innerCounter() {
      count++;
      return count;
  }
  
  return innerCounter; // Return the inner function
}

// Create multiple counters
const counter1 = counter();
const counter2 = counter();

// Increment and display counters separately
console.log("Counter 1:", counter1()); // Output: 1
console.log("Counter 1:", counter1()); // Output: 2

console.log("Counter 2:", counter2()); // Output: 1
console.log("Counter 2:", counter2()); // Output: 2*/




// Defining a function expression named 'calculate' that takes two parameters: 'num1' and 'num2'
const calculate = function(num1, num2) {
  // Returning an object with calculated properties
  return {
      // Calculating the sum of 'num1' and 'num2'
      sum: num1 + num2,

      // Calculating the absolute difference between 'num1' and 'num2'
      difference: Math.abs(num1 - num2),

      // Calculating the product of 'num1' and 'num2'
      product: num1 * num2,

      // Verifying that 'num2' does not equal zero, computing the quotient, and handling division by zero
      quotient: num2 !== 0 ? num1 / num2 : "Zero division has no defined result. Hence Undifined"
  };
};

// Testing if it works
//Using '9' and '4' as arguments, call the 'calculate' function as an example, and store the outcome in the'result' variable
const result = calculate(9, 4);

// Log the 'result' to the console to see the calculated values
console.log(result);//{ sum: 13, difference: 5, product: 36, quotient: 2.25 }



// Function that uses a callback to carry out the action
function performOperation(num1, num2, operationCallback) {
  return operationCallback(num1, num2);
}

// Callback function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Callback function to subtract the second number from the first
function subtractNumbers(num1, num2) {
  return num1 - num2;
}

// Callback function to multiply two numbers
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// testing the code if it works:
const num1 = 9;
const num2 = 7;

// Using the 'addNumbers' callback
const additionResult = performOperation(num1, num2, addNumbers);
console.log("Addition Outcome:", additionResult);

// Using the 'subtractNumbers' callback
const subtractionResult = performOperation(num1, num2, subtractNumbers);
console.log("Subtraction Outcome:", subtractionResult);

// Using the 'multiplyNumbers' callback
const multiplicationResult = performOperation(num1, num2, multiplyNumbers);
console.log("Multiplication Outcome:", multiplicationResult);
