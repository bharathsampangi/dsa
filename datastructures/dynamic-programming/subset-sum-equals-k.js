function compute(i, target, arr, dp) {
    if(target === 0) return true
    if(i === 0) return arr[0] === target

    if(dp[i][target] != -1) {
        return dp[i]
    }

    let notPick = compute(i-1, target, arr, dp)

    let pick = false
    if(target >= arr[i]) {
        pick = compute(i-1, target - arr[i], arr, dp)
    }

    return dp[i][target] = pick || notPick
}

function subsetSumToK(n, k, arr) {
    // Write your code here.
    const dp = Array.from(Array(n), () => new Array(k+1).fill(-1))
    return compute(n-1, k, arr, dp)
}

console.log(subsetSumToK(5, 5, [2, 5, 1, 6, 7]))