// Given an unsorted array and a number n, find if there exists a pair of elements
// in the array whose difference is n. This function should return true
// if the pair exists or false if it does not.

// Solve this with the following requirements:
// Time Complexity - O(n log n)
// Space Complexity - O(n)

// const findPair = (arr, numsDiff) => {
//     numsDiff = Math.abs(numsDiff)
//     let map = {}

//     for(let i=0; i<arr.length; i++) {
//         let diff = Math.abs(numsDiff - arr[i])
//         if(diff === 0)
//             return true
        
//         let remainingDiff = Math.abs(numsDiff - arr[i])
//         if(map[remainingDiff] || map[-remainingDiff]) {
//             return true
//         }
//         map[arr[i]] = 1
//     }

//     return false
// }

const findPair = (arr, numsDiff) => {
    const obj = {}

    for(let item of arr) {
        if(obj[item + num] || obj[item - num]) return true
        obj[item] = item
    }

    return false
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([-2, 5, 10, 15, 16], 0)); // false