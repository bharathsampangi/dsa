// Problem statement
// You are given an array/list of ‘N’ integers. You are supposed to return the maximum sum 
// of the subsequence with the constraint that no two elements are adjacent in the given array/list.

// Note:
// A subsequence of an array/list is obtained by deleting some number of elements (can be zero) 
// from the array/list, leaving the remaining elements in their original order.

function calcSum(idx, nums, dp) {
    if(idx === 0) return nums[idx]
    if(idx < 0) return 0

    if(dp[idx]) {
        return dp[idx]
    }

    let pick = calcSum(idx - 2, nums, dp) + nums[idx]
    let notPick = calcSum(idx - 1, nums, dp) + 0

    dp[idx] = Math.max(pick, notPick)
    return dp[idx]
}

function maximumNonAdjacentSum(nums) {
    const dp = new Array(nums.length).fill(0)
    return calcSum(nums.length - 1, nums, dp)
}

console.log(maximumNonAdjacentSum([2, 1, 4, 9]))