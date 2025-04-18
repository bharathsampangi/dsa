// Problem statement
// A thief is robbing a store and can carry a maximal weight of W into his knapsack. 
// There are N items and the ith item weighs wi and is of value vi. 
// Considering the constraints of the maximum weight that a knapsack can carry, 
// you have to find and return the maximum value that a thief can generate by stealing items.
function compute(idx, W, weights, value, dp) {
    if(idx === 0) {
        if(weights[0] <= W) {
            return value[0]
        } else {
            return 0
        }
    }

    if(dp[idx][W] != -1) {
        return dp[idx][W]
    }

    let notPick = compute(idx-1, W, weights, value, dp)
    let pick = -Infinity

    if(weights[idx] <= W) {
        pick = value[idx] + compute(idx-1, W - weights[idx], weights, value, dp)
    }

    dp[idx][W] = Math.max(pick, notPick)
    return dp[idx][W]
}

function knapsack(n, W, weights, value) {
    let dp = Array.from(Array(n), () => new Array(W+1).fill(-1))
    return compute(n-1, W, weights, value, dp)
}

console.log(knapsack(4, 5, [1,2,4,5], [5,4,8,6]))