class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (this.adjacencyList[key]) {
      return undefined;
    }
    this.adjacencyList[key] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (element) => element !== v2,
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (element) => element !== v1,
    );
  }
  removeVertex(key) {
    this.adjacencyList[key].forEach((element) => {
      this.removeEdge(element, key);
    });
    delete this.adjacencyList[key];
  }
}

const graph = new Graph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addEdge("a", "b");
graph.addEdge("a", "c");
console.log("before removing vertex 'a': ", graph);
graph.removeVertex("a");
console.log("after removing:", graph);
