const calculateFactorial = (num) => {
  // Base case: If num is 0 or 1, the factorial is 1.
  if (num <= 1) return 1;

  let factorial = 1;

  // Multiply 'factorial' by numbers from 2 to 'num'
  for (let i = 2; i <= num; i++) {
    factorial *= i;
    // factorial = factorial * i;
  }

  return factorial;
};

const recursiveFactorial = (num) => {
  if (num <= 1) return 1;

  return recursiveFactorial(num - 1) * num;
};

// Example usage:
const number = 3;
const factorial = recursiveFactorial(number);

console.log(`Factorial of ${number} is: ${factorial}`);
