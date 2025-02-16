// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

var maxProduct = function(nums) {
    let max2 = -Infinity
    let max = -Infinity
    let prod = 1

    for(let i=0; i < nums.length; i++) {
        let num = nums[i]
        prod = prod * num
        if(prod > max) {
            max = prod
        }
        if(prod === 0) {
            prod = 1
        } 
    }
    prod = 1
    for(let j=nums.length - 1; j > 0; j--) {
        let num = nums[j]
        prod = prod * num
        if(prod > max2) {
            max2 = prod
        }
        if(prod == 0) {
            prod = 1
        }
    }

    return Math.max(max, max2)
};

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))