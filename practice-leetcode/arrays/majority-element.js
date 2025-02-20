// Easy
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function(nums) {
    nums.sort((a, b) => a - b)
    let start = 0
    let i = 1
    let maxLen = -Infinity
    let majorElem 

    while(i < nums.length) {
        if(nums[i] - nums[i-1] == 0) {
            if(i -start + 1 > maxLen) {
                majorElem = nums[i]
                maxLen = i - start + 1
            }
        } else {
            start = i
        }
        i++
    }

    return maxLen > (nums.length / 2) ? majorElem : undefined
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))