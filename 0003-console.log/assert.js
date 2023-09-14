/*

console.assert() allows you to conditionally log an error message 
to the console if a specified assertion evaluates to false.
It is useful for debugging and verifying assumptions in your code.

*/

// if false, then log error

const divide = (x, y) => {
  console.assert(y !== 0, "Division by zero is not allowed!");
  return x / y;
};

console.log(divide(10, 2)); // Valid division

console.log(divide(8, 0)); // Invalid division
