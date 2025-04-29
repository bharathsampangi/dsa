function dfs(row, col, visited, grid) {
    visited[row][col] = 1

    let m = grid.length
    let n = grid[0].length

    const deltaRow =  [-1, 0, 1, 0]
    const deltaCol = [0, -1, 0, 1]

    for(let i=0; i<4; i++) {
        let r = row + deltaRow[i]
        let c = col + deltaCol[i]

        if(r >=0 && r < m && c >= 0 && c < n && !visited[r][c] && grid[r][c] == 1) {
            visited[r][c] = 1
            dfs(r, c, visited, grid)
        }
    }
}

var numIslands = function (grid) {
    let m = grid.length
    let n = grid[0].length

    let islands = 0

    const visited = Array.from(Array(m), () => new Array(n).fill(0))

    for(let i=0; i < m; i++) {
        for(let j=0; j < n; j++) {
            if(!visited[i][j] && grid[i][j] === 1) {
                visited[i][j] = 1
                islands++
                dfs(i, j, visited, grid)
            }
        }
    }

    return islands
}

const grid = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 1]]
console.log(numIslands(grid))