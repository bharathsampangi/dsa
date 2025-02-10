// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.

function countUniqueValuesWithOnePointer(arr) {
    let counter = 0
    let prevElement

    for(let i=0; i < arr.length; i++) {
        if(arr[i] != prevElement) {
            counter++
        }
        prevElement = arr[i]
    }
    return counter
}
  
console.log(countUniqueValuesWithOnePointer([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithOnePointer([-2, -1, -1, 0, 1])); // 4