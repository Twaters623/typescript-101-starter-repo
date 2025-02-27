function sayPrime(n: number): string[] {
  let primeNumbers: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i <= 1) {
      primeNumbers.push(i.toString());
    } else if (i <= 3) {
      primeNumbers.push("prime");
    } else if (i % 2 === 0 || i % 3 === 0) {
      primeNumbers.push(i.toString());
    } else {
      let isPrime = true;
      for (let j = 5; j * j <= i; j += 6) {
        if (i % j === 0 || i % (j + 2) === 0) {
          primeNumbers.push(i.toString());
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeNumbers.push("prime");
      }
    }
  }

  return primeNumbers;
}

console.log(sayPrime(100));

// console.log(sayPrime(100));
