/*

console.count() allows you to count 
how many times a specific piece of code 
has been executed.
It's useful for tracking how often a particular function, 
loop, or section of code is called

*/

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const randomNumbers = () => {
  let n = 0;

  for (let i = 0; i <= 10; i++) {
    n = generateRandomNumber();
    console.count(`[Number is ${n}]`);
  }
};

randomNumbers();
