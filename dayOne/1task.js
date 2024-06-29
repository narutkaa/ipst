function getUniqueCharacters(input) {
    const uniqueChars = {};
    let result = '';

    for (const char of input) {
        if (!uniqueChars[char]) {
            uniqueChars[char] = true;
            result += char;
        }
    }
    return result;
}

const inputString = 'DDADSADASDAAADS';
const uniqueCharacters = getUniqueCharacters(inputString);

console.log(uniqueCharacters); // Output: "DAS"