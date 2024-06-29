function makePalindrome(input) {
    function createPalindrome(str) {
        let mirrored = str.slice(0, -1);
        return str + mirrored.split('').reverse().join('');
    }

    return input.map(str => createPalindrome(str));
}

const strings = ['дим', 'манек', 'рота'];
const palindromes = makePalindrome(strings);

console.log(palindromes); // Output: ["димид", "манекенам", "ротатор"]