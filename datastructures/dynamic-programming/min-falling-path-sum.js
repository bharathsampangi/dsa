function calc(i, j, matrix, dp) {
    if(j < 0 || j >= matrix.length ) {
        return Infinity
    }

    if(i===0) {
        return matrix[0][j]
    }

    if(dp[i][j] != -1) {
        return dp[i][j]
    }

    let left = matrix[i][j] + calc(i-1, j-1, matrix, dp)
    let up = matrix[i][j] + calc(i-1, j, matrix, dp)
    let right = matrix[i][j] + calc(i-1, j+1, matrix, dp)

    dp[i][j] = Math.min(up, left, right)
    return dp[i][j]
}

function minFallingPathSum(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let min = Infinity
    let dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1));

    for(let j=0; j < n; j++) {
        dp[0][j] = matrix[0][j]
    }

    for(let j=0; j < n; j++) {
        min = Math.min(min, calc(m - 1, j, matrix, dp))
    }

    return min
}

const matrix = [[2,1,3],[6,5,4],[7,8,9]]
console.log(minFallingPathSum(matrix))