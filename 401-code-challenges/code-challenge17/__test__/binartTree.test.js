'use strict';

const BinaryTree = require('../binaryTree');
const Node = require('../node');
let node = new Node(2)
let node1 = new Node(7)
let node2 = new Node(5)
let node3 = new Node(2)
let node4 = new Node(6)
let node5 = new Node(9)
let node6 = new Node(5)
let node7 = new Node(11)
let node8 = new Node(4)

node.left=node1;
node.right=node2;
node1.left=node3;
node1.right=node4;
node2.right=node5;
node4.left=node6;
node4.right=node7;
node5.left=node8;

let eshe= new BinaryTree();
let tree= new BinaryTree();
eshe.root=node;

describe('tree-breadth-first--->', ()=>{
  

    it('breadthfirst', ()=> {
        let breadthfirst = eshe.breadthfirst(eshe);
        expect(breadthfirst).toEqual([2,7,5,2,6,9,5,11,4]);
    });
    it('if tree is empty-->', ()=> {
        let breadthfirst = eshe.breadthfirst(tree);
        expect(breadthfirst).toEqual('tree is empty');
    });

});

