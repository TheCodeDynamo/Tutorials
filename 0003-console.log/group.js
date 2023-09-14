/*

console.group() allow you to group console log messages 
together under a common label.
This can help you organize and 
structure your console output,
especially when you're dealing with a complex application 
where multiple components or functions are logging information

*/

const logProcess = () => {
  console.group("Function Call");

  for (let i = 0; i <= 3; i++) {
    console.log(`Step ${i}`);
  }

  console.groupEnd();
};

console.group("Main Application");
console.log("Initializing...");

logProcess();

console.log("Completed initialization.");
console.groupEnd();
