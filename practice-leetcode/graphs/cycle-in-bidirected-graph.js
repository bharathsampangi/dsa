class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(v) {
        if(!this.adjacencyList[v]) {
            this.adjacencyList[v] = []
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
    }

    isCycle(V) {
        const visited = {}
        const path = {}

        for(let i=1; i<=V; i++) {
            visited[i] = 0
            path[i] = 0
        }

        for(let i=1; i <= V; i++) {
            if(!visited[i]) {
                if(this.dfs(i, visited, path) === true) {
                    return true
                }
            }
        }

        return false
    }

    dfs(node, visited, path) {
        visited[node] = 1
        path[node] = 1

        for(let neighbor of this.adjacencyList[node]) {
            if(!visited[neighbor]) {
                if(this.dfs(neighbor, visited, path) === true) {
                    return true
                }
            }
            else if(path[neighbor]) {
                return true
            }
        }

        path[node] = 0
        return false
    }
}

const graph = new Graph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)
graph.addVertex(8)
graph.addVertex(9)
graph.addVertex(10)
graph.addEdge(1, 2)
graph.addEdge(2, 3)
graph.addEdge(3, 4)
graph.addEdge(4, 5)
graph.addEdge(5, 6)
graph.addEdge(7, 5)
graph.addEdge(8, 2)
graph.addEdge(8, 9)
graph.addEdge(9, 10)
// graph.addEdge(10, 8)
console.log(graph.isCycle(10))
