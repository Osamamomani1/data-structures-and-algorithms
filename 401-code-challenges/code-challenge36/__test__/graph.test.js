let Graph = require('../graph');

describe("breadth-first traversal graph.", () => {


    it("Implement a breadth-first on a graph.", () => {
        let graph = new Graph();

        graph.addVertex("munchin")
        graph.addVertex("Dortmund")
        graph.addVertex("Libzig")
        graph.addVertex("Berlin")
        graph.addVertex("Shaclke")
        graph.addVertex("Kolen")

        graph.addEdge("munchin", "Dortmund")
        graph.addEdge("Dortmund", "Libzig")
        graph.addEdge("Dortmund", "Berlin")
        graph.addEdge("Libzig", "Berlin")
        graph.addEdge("Libzig", "Shaclke")
        graph.addEdge("Libzig", "Kolen")
        expect(graph.breadthFirst("munchin")).toEqual([ 'munchin',
        'Dortmund',
        'Libzig',
        'Berlin',
        'Shaclke',
        'Kolen' ]
      );
    })

})