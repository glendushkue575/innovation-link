/*
Filename: ComplexCode.js
Content: This code implements a complex mathematical algorithm to calculate prime numbers up to a given limit. It uses advanced optimization techniques to improve performance and includes various helper functions and data structures.
*/

// Helper function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

// Function to calculate all prime numbers up to a given limit
function calculatePrimes(limit) {
  const primes = [];
  const sieve = Array(limit + 1).fill(true);
  for (let p = 2; p * p <= limit; p++) {
    if (sieve[p] === true) {
      for (let i = p * p; i <= limit; i += p) {
        sieve[i] = false;
      }
    }
  }
  for (let p = 2; p <= limit; p++) {
    if (sieve[p] === true) {
      primes.push(p);
    }
  }
  return primes;
}

// Function to display prime numbers
function displayPrimes(primes) {
  console.log("Prime Numbers:");
  primes.forEach((prime) => {
    console.log(prime);
  });
}

// Main function to execute the code
function main() {
  const limit = 1000; // Set the limit to calculate prime numbers up to
  const primes = calculatePrimes(limit);
  displayPrimes(primes);
}

// Execute the main function
main();