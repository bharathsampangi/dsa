class Graphs {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!(vertex in this.adjacencyList)) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((item) => item !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1)
    }

    removeVertex(vertex) {
        const edge = this.adjacencyList[vertex]
        for(let v of edge) {
            this.removeEdge(vertex, v)
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex) {
            if(!vertex) return null
            result.push(vertex)
            visited[vertex] = true
            adjacencyList[vertex].forEach((neighbor) => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);
        
        return result
    }

    depthFirstIterative(start) {
        const result = []
        const stack = []
        const visited = {}

        stack.push(start)
        visited[start] = true

        while(stack.length) {
            const vertex = stack.pop()
            result.push(vertex)
            
            this.adjacencyList[vertex].forEach((neighbor) => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }

        return result
    }
}

const graph = new Graphs()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph.depthFirstIterative("A"))