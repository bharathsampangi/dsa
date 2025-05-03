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

    topologicalSort(V) {
        const st = []
        const visited = {}
        const ans = []

        for(let i=0; i<=V; i++) {
            if(!visited[i]) {
                visited[i] = 1
                this.dfs(i, visited, st)
            }
        }

        while(st.length) {
            ans.push(st.pop())
        }

        return ans
    }

    dfs(node, visited, st) {
        visited[node] = 1

        for(let neighbor of this.adjacencyList[node]) {
            if(!visited[neighbor]) {
                visited[neighbor] = 1
                this.dfs(neighbor, visited, st)
            }
        }

        st.push(node)
    }
}

const graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addEdge(5, 0)
graph.addEdge(5, 2)
graph.addEdge(2, 3)
graph.addEdge(3, 1)
graph.addEdge(4, 1)
graph.addEdge(4, 0)
console.log(graph.topologicalSort(5))