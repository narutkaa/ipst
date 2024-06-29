function getText(input) {
    const wordsArray = input.split(' ');
    let result = '';

    wordsArray.forEach(word => {
        const char = word[0];
        for (let i = 0; i < word.length; i++) {
            result += char;
        }
        result += ' ';
    });

    return result.trim();
}

const text = 'hello alexandr!';
const editText = getText(text);

console.log(editText); // Output: "hhhhh aaaaaaaaa"
