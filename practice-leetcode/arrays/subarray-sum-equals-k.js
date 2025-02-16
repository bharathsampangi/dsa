// Medium
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

var subarraySum = function(nums, k) {
    let count = 0
    let start = 0
    let i=0
    let sum = 0

    while(sum < k && i < nums.length) {
        sum = sum + nums[i]
        i++
    }

    if(sum === k) {
        count++
    }

    while(i < nums.length) {
        if(sum == k) {
            count++
        }
        if(sum >= k) {
            sum = sum - nums[start]
            start++
        } else {
            sum = sum + nums[i]
            i++
        }
    }

    return count
};

console.log(subarraySum([1,1,1], 2))
console.log(subarraySum([1,2,3], 3))