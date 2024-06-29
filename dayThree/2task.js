let numArray = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
const strArray = ['one', 'two', 'three'];

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}

numArray = bubbleSort(numArray);

const resultArray = numArray.concat(strArray);

console.log(resultArray); // Output: [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two', 'three']
