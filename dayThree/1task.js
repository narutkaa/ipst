function filterAndSortArray(arr) {
    const uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // not found
}

const array = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];
const target = 0;

const filteredSortedArray = filterAndSortArray(array);
console.log('Filtered and Sorted Array:', filteredSortedArray);

const index = binarySearch(filteredSortedArray, target);
if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}
