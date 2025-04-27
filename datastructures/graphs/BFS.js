class Graphs {
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
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1)
    }

    removeVertex(v) {
        let edges = this.adjacencyList[v]
        for(let vertex of edges) {
            this.removeEdge(v, vertex)
        }
        delete this.adjacencyList[v]
    }

    breadthFirstSearch(vertex) {
        const queue = []
        const visited = {}
        const result = []

        queue.push(vertex)
        visited[vertex] = true

        while(queue.length) {
            let currElem = queue.shift()
            result.push(currElem)
            for(let v of this.adjacencyList[currElem]) {
                if(!visited[v]) {
                    visited[v] = true
                    queue.push(v)
                }
            }
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

console.log(graph.breadthFirstSearch("D"))