// You are given an integer array coins representing coins of different denominations and an integer amount 
// representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made 
// up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

function compute(idx, target, coins, dp) {
    if(idx === 0) {
        if(target % coins[0] === 0) {
            return 1
        }
        else {
            return 0
        }
    }

    if(dp[idx][target] != -1) {
        return dp[idx][target]
    }

    const notPick = compute(idx - 1, target, coins, dp)
    let pick = 0
    if(coins[idx] <= target) {
        pick = compute(idx , target - coins[idx], coins, dp)
    }

    return dp[idx][target] = pick + notPick
}

var change = function(amount, coins) {
    const dp = Array.from(Array(coins.length), () => new Array(amount+1).fill(-1))
    return compute(coins.length - 1, amount, coins, dp)
};

console.log(change(5, [1,2,5]))