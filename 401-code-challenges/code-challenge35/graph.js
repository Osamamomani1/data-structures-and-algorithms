'use strict';
let Edge = require('./edge')


class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }
    addVertexNode(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log("NOT FOUND!");
            return;
        }
        const adjacencies = this._adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }

    getNeighbours(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            console.log("NOT FOUND!");
            return;
        }
        return this._adjacencyList.get(vertex);
    }

    printAll() {
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            console.log(' vertex : ', vertex , ' Edge : ' , edge);
          
        }
    }
    getNodes() {
        return this._adjacencyList.entries();
    }

    size() {
        return this._adjacencyList.size
    }
    included(vertex) {
        return this._adjacencyList.get(vertex) ? true : false;
    }
    isEmpty() {
        return this._adjacencyList.size > 0 ? false : null
    }

}

module.exports=Graph