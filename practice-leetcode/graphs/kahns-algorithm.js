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
    }

    findToposort(V) {
        const indegree = {}
        const toposort = []

        for(let i=0; i < V; i++) {
            indegree[i] = 0
        }
        
        for(let i=0; i < V; i++) {
            for(let neighbor of this.adjacencyList[i])  {
                indegree[neighbor]++
            }
        }

        const queue = []
        for(let i=0; i < V; i++) {
            if(indegree[i] === 0) {
                queue.push(i)
            }
        }

        while(queue.length) {
            let node = queue.shift()
            toposort.push(node)

            for(let neighbor of this.adjacencyList[node]) {
                indegree[neighbor]--
                console.log("neighbor", neighbor, indegree)
                if(indegree[neighbor] === 0) {
                    queue.push(neighbor)
                }
            }
        }

        return toposort
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
graph.addEdge(4, 0)
graph.addEdge(2, 3)
graph.addEdge(3, 1)
graph.addEdge(4, 1)
graph.addEdge(5, 2)
console.log(graph.findToposort(6))