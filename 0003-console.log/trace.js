/*

console.trace() prints a stack trace to the console, 
showing the function call hierarchy.
It is useful for debugging to understand how 
and from where a particular function was called

*/

const a = () => {
  console.trace("Function 'a' was called");
  console.log("Function 'a'");
};

const b = () => {
  console.log("Function 'b'");
  a();
};

const c = () => {
  console.log("Function 'c'");
  b();
};

c();
