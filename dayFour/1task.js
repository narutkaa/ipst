function objectToNestedArray(obj) {
    return Object.entries(obj);
}

const input = { a: 1, b: 2 };
const result = objectToNestedArray(input);
console.log(result); // Output: [['a', 1], ['b', 2]]