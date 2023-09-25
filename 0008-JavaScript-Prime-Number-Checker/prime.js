const isPrime = (num) => {
  // Edge cases
  if (num <= 1) {
    return false;
    // Numbers less than or equal to 1 are not prime
  } else if (num === 2) {
    return true;
    // 2 is prime
  } else if (num % 2 === 0) {
    return false;
    // Even numbers greater than 2 are not prime
  }

  // Check for divisors from 3 to the square root of the number
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
      // If a divisor is found, the number is not prime
    }
  }

  return true;
  // If no divisors are found, the number is prime
};

// Example usage
const numToCheck = 19;
// Change this to any natural number you want to check

if (isPrime(numToCheck)) {
  console.log(`${numToCheck} is a prime number.`);
} else {
  console.log(`${numToCheck} is not a prime number.`);
}
