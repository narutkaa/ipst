class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    // uppercase first letter
    ucFirst(str) {
        if (str.length === 0) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    // uppercase first letter every word
    ucWords(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}


const myString = new MyString();

console.log(myString.reverse('zora')); // Output: 'aroz'
console.log(myString.ucFirst('zora')); // Output: 'Zora'
console.log(myString.ucWords('zora zora')); // Output: 'Zora Zora'
