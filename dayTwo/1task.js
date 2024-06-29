function getPrimes(max) {
    const sieve = [];
    const primes = [];

    for (let i = 2; i <= max; i++) {
        sieve[i] = true;
    }

    for (let i = 2; i <= max; i++) {
        if (sieve[i]) {
            primes.push(i);
            for (let j = i * i; j <= max; j += i) {
                sieve[j] = false;
            }
        }
    }

    return primes;
}

const primesUpTo100 = getPrimes(100);
console.log(primesUpTo100);
