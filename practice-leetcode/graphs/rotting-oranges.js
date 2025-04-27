// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
// If this is impossible, return -1

var orangesRotting = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let visited = Array.from(Array(m), () => new Array(n).fill(0))
    const queue = []

    for(let i=0; i < m; i++) {
        for(let j=0; j <n; j++) {
            if(grid[i][j] === 2) {
                visited[i][j] = 2
                queue.push([[i, j], 0])
            }
        }
    }

    let deltaRow = [-1, 0, 1, 0]
    let deltaCol = [0, 1, 0, -1]
    let tm = 0

    while(queue.length) {
        let row = queue[0][0][0]
        let col = queue[0][0][1]
        let t = queue[0][1]
        tm = Math.max(tm, t)
        queue.shift()

        for(let i=0; i<4; i++) {
            let rRow = row + deltaRow[i]
            let rCol = col + deltaCol[i]

            if(rRow >=0 && rRow < m && rCol >=0 && rCol < n && visited[rRow][rCol] != 2 && grid[rRow][rCol] === 1) {
                visited[rRow][rCol] = 2
                queue.push([[rRow, rCol], t + 1])
            }
        }
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 1 && visited[i][j] !== 2) {
                return -1
            }
        }
    }

    return tm
};

const grid = [[2,1,1],[1,1,0],[0,1,1]]
console.log(orangesRotting(grid))