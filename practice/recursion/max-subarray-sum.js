// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

const maxSubarraySum = (arr, nums) => {
    let maxSum = -Infinity
    let sum = 0
    if(arr.length < nums) {
        return null
    }

    for(let i=0; i < nums; i++) {
        sum = sum + arr[i]
    }
    maxSum = Math.max(sum, maxSum)

    for(let i=nums; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - nums]
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null