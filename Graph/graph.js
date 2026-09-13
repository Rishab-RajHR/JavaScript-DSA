class Graph{
   constructor(){
     this.adjacencyList = {};
   } // graph is non linear 
   addVertex(vertex){
     if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = [];
     }
   } // graph is 2D
   addEdge(vertex1, vertex2){
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
   }
}

// Graph 

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");

console.log(graph.adjacencyList);
