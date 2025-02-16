// Medium 
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

var minSubArrayLen = function(target, nums) {
    let sum = 0
    let minLength = 0

    while(sum < target && minLength < nums.length) {
        sum = sum + nums[minLength]
        minLength++
    }

    if(sum < target) return 0

    let tempLength = minLength
    let i = 0

    while(i + tempLength - 1 < nums.length) {
        if(sum > target) {
            sum = sum - nums[i]
            tempLength--
            minLength = Math.min(tempLength, minLength)
            i++
        } else {
            sum = sum + nums[i + tempLength]
            tempLength++
        }
    }

    return minLength
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))