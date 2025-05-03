class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    checkIfBipartite(node, colors) {
        const queue = []
        colors[node] = false
        queue.push(node)

        while(queue.length) {
            let elm = queue.shift()
            for(let neighbor of this.adjacencyList[elm]) {
                if(colors[neighbor] === -1) {
                    colors[neighbor] = !colors[elm]
                    queue.push(neighbor)
                } else if(colors[neighbor] === colors[elm]) {
                    return false
                }
            }
        }

        return true
    }

    isBipartite(V) {
        const colors = {};

        for(let i=1; i <= V; i++) {
            colors[i] = -1
        }
    
        for (let i = 1; i <= V; i++) {
            if(colors[i] === -1) {
                if (this.checkIfBipartite(i, colors) === false) {
                    return false;
                }
            }
        }
    
        return true;
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
graph.addEdge(1, 2)
graph.addEdge(2, 3)
graph.addEdge(2, 6)
graph.addEdge(3, 4)
graph.addEdge(6, 5)
graph.addEdge(4, 5)
graph.addEdge(4, 7)
graph.addEdge(7, 8)
console.log(graph.isBipartite(8))

// const graph = new Graph()
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(3)
// graph.addVertex(4)
// graph.addVertex(5)
// graph.addVertex(6)
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(2, 5)
// graph.addEdge(3, 4)
// graph.addEdge(5, 4)
// graph.addEdge(4, 6)
// console.log(graph.isBipartite(6))