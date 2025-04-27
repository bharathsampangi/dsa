// Given a boolean 2D matrix grid of size n * m. 
// You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) 
// forms an island. Two islands are considered to be distinct if and only if one island is not equal to 
// another (not rotated or reflected).

// Input:
// grid[][] = {{1, 1, 0, 1, 1},
//             {1, 0, 0, 0, 0},
//             {0, 0, 0, 0, 1},
//             {1, 1, 0, 1, 1}}
// Output:
// 3

function dfs(row, col, matrix, visited, arr, row0, col0) {
    visited[row][col] = 1
    const m = matrix.length
    const n = matrix[0].length

    arr.push({x: row - row0, y: col - col0})

    const deltaRow = [-1, 0, 1, 0]
    const deltaCol = [0, -1, 0, 1]
    

    for(let i=0; i<4; i++) {
        let r = row + deltaRow[i]
        let c = col + deltaCol[i]

        if(r >=0 && c>=0 && r < m && c < n && !visited[r][c] && matrix[r][c] === 1) {
            visited[r][c] = 1
            dfs(r, c, matrix, visited, arr, row0, col0)
        }
    }
}

function distinctIslands(matrix) {
    let m = matrix.length;
    let n = matrix[0].length
    const visited = Array.from(Array(m), () => new Array(n).fill(0))

    let distinct = new Set()

    for(let i=0; i< m; i++) {
        for(let j=0; j<n; j++) {
            if(!visited[i][j] && matrix[i][j] === 1) {
                let arr = []
                visited[i][j] = 1
                dfs(i, j, matrix, visited, arr, i, j)
                if(arr.length)
                distinct.add(JSON.stringify(arr))
            }
        }
    }

    console.log(distinct)
    return distinct.size
}

const grid = [[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]]
console.log(distinctIslands(grid))