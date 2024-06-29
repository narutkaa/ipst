function fibonacciUpTo(max) {
    const fibonacci = [0, 1];
    let nextFib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

    while (nextFib <= max) {
        fibonacci.push(nextFib);
        nextFib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }

    return fibonacci;
}

const fibUpTo200 = fibonacciUpTo(200);
console.log(fibUpTo200);