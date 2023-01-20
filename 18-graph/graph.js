// Here is a graph implementation  adjencyList using hashtable or objects in js 

class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		this.adjacencyList[vertex] = []
	}

	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2)
		this.adjacencyList[vertex2].push(vertex1)
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
			return v !== vertex2
		})
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
			return v !== vertex1
		})
	}

	removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
        const adjVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
}

