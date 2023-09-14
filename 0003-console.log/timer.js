/*

console.time() | console.timeEnd()
These methods help you measure the execution time 
of a specific code block or function

*/

// Start the timer with the label "MyTimer"
console.time("MyTimer");

// Simulate some time-consuming operation
for (let i = 0; i < 100000; i++) {
  // ...
}

// Stop the timer and display the elapsed time
console.timeEnd("MyTimer");
