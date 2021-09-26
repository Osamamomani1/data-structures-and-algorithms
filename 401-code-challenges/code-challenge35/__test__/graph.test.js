'use strict'
let Graph = require('../graph');
let Vertex= require('../vertex');

describe("Graph Moule", () => {


    it("Node can be successfully added to the graph", () => {
        let graph = new Graph();
        graph.addVertexNode(50);
        expect(graph.included(50)).toBeTruthy();
    })

    it("An edge can be successfully added to the graph", () => {
        let graph = new Graph();
        graph.addVertexNode(40);
        graph.addVertexNode(30);
        graph.addDirectedEdge(40, 30);
        expect(graph.included(30)).toBeTruthy()
    })

    it("All appropriate neighbors can be retrieved from the graph", () => {
        let graph = new Graph();
        const two = new Vertex(20);
        const three = new Vertex(30);
        graph.addVertexNode(two);
        graph.addVertexNode(three);
        graph.addDirectedEdge(two, three, 2);
        expect(graph.getNeighbours(two)).toEqual([{"vertex": {"value": 30}, "weight": 2}]);

    })

    it("The proper size is returned, representing the number of nodes in the graph", () => {
        let graph = new Graph();
        graph.addVertexNode(50);
        graph.addVertexNode(30);
        graph.addDirectedEdge(50, 30);
        expect(graph.size()).toEqual(2)

    })
    it("An empty graph properly returns null", () => {
        let graph = new Graph();
        expect(graph.isEmpty()).toBeTruthy;
    })



})