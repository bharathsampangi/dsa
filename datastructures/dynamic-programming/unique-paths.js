function calcPaths(m, n, sum, dp) {
    if(m===0 & n===0) {
        return 1
    }
    if(m <0 || n < 0) {
        return 0
    }

    if(dp[m][n] >= 0) {
        return dp[m][n]
    }

    let up = sum + calcPaths(m-1, n, sum, dp)

    let left = sum + calcPaths(m, n - 1, sum, dp)

    dp[m][n] = up + left
    return dp[m][n]
}

function uniquePaths(m, n) {
    const dp = Array.from(Array(m), () => new Array(n).fill(-1))
    return calcPaths(m-1, n-1, 0, dp)
}

console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))