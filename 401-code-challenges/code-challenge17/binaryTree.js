"use strict";

let Node=require('./node')

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthfirst(tree) {
    if (!tree.root) {
      return "tree is empty";
    }
    let queue = [tree.root];
    let result = [];
    while (queue.length > 0) {
      let item = queue[0];
      let value = item.value;
      result.push(value);
      if (item.left != null) {
        queue.push(item.left);
      }
  
      if (item.right != null) {
        queue.push(item.right);
      }
      queue.shift();
    }
    return result;
  }

}

// function breadthfirst(tree) {
//   if (!tree.root) {
//     return "tree is empty";
//   }
//   let queue = [tree.root];
//   let result = [];
//   while (queue.length > 0) {
//     let item = queue[0];
//     let value = item.value;
//     result.push(value);
//     if (item.left != null) {
//       queue.push(item.left);
//     }

//     if (item.right != null) {
//       queue.push(item.right);
//     }
//     queue.shift();
//   }
//   return result;
// }
// let node = new Node(2)
// let node1 = new Node(7)
// let node2 = new Node(5)
// let node3 = new Node(2)
// let node4 = new Node(6)
// let node5 = new Node(9)
// let node6 = new Node(5)
// let node7 = new Node(11)
// let node8 = new Node(4)

// node.left=node1;
// node.right=node2;
// node1.left=node3;
// node1.right=node4;
// node2.right=node5;
// node4.left=node6;
// node4.right=node7;
// node5.left=node8;

// let eshe= new BinaryTree()
// eshe.root=node;
// console.log(eshe);
// console.log('==============================================');
// console.log('--->',breadthfirst(eshe));

module.exports=BinaryTree;


