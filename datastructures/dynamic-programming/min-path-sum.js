// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
// which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

function calPathSum(i, j, grid, dp) {
    if(i===0 && j === 0) {
        return grid[0][0]
    }
    if(i < 0 || j < 0) {
        return Infinity
    }

    if(dp[i][j] != -1) {
        return dp[i][j]
    }

    let up = grid[i][j] + calPathSum(i-1, j, grid, dp)
    let left = Infinity
    left = grid[i][j] + calPathSum(i, j-1, grid, dp)

    dp[i][j] = Math.min(up, left)
    return dp[i][j]
}

function minPathSum(grid) {
    const dp = Array.from(Array(grid.length), () => new Array(grid[0].length).fill(-1))
    return calPathSum(grid.length - 1, grid[0].length - 1, grid, dp)
}

const grid  = [[1,3,1],[1,5,1],[4,2,1]]
console.log(minPathSum(grid))