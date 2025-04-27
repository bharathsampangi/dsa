class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    detectCycle(vertex) {
        const visited = {}
        const dfs = (vertex, parent) => {
            for(let neighbor of this.adjacencyList[vertex]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    return dfs(neighbor, vertex)
                } else if(parent !== neighbor) {
                    return true
                }
            }
            return false
        }


        return dfs(vertex, -1)
    }

    isCycle(V) {
        for(let i=1; i <= V; i++) {
            if(this.detectCycle(i)) {
                return true
            }
        }
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
graph.addEdge(1,2)
graph.addEdge(2,5)
graph.addEdge(5,7)
graph.addEdge(1,3)
graph.addEdge(3,6)
graph.addEdge(6,7)
graph.addEdge(3,4)

console.log(graph.isCycle(7))