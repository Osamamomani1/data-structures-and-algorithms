"use strict";

// let Node=require('./node')

class BinaryTree {
  constructor() {
    this.root = null;
  }
  // preOrder() {
  //   let result = [];
  //   let travers = (node) => {
  //     result.push(node.value);
  //     if (node.left) {
  //       travers(node.left);
  //     }
  //     if (node.right) {
  //       travers(node.right);
  //     }
  //   };
  //   travers(this.root);
  //   return result;
  // }

  // inOrder() {
  //   let result = [];
  //   let travers = (node) => {
  //     if (node.left) {
  //       travers(node.left);
  //     }
  //     result.push(node.value);
  //     if (node.right) {
  //       travers(node.right);
  //     }
  //   };
  //   travers(this.root);
  //   return result;
  // }

  // postOrder() {
  //   let result = [];
  //   let travers = (node) => {
  //     if (node.left) {
  //       travers(node.left);
  //     }
  //     if (node.right) {
  //       travers(node.right);
  //     }
  //     result.push(node.value);
  //   };
  //   travers(this.root);
  //   return result;
  // }

  findMaximum(){
    if (!this.root) {
      return 'tree is empty'
    }
    let max=this.root;
    let travers=(node)=>{
      if (node.value>max.value) {
        max=node;
      }if (node.left) {
        travers(node.left)
      }if (node.right) {
        travers(node.right)
      }
    }
    travers(this.root);
    return max.value;
  }
}


// let node = new Node(9)
// let node1 = new Node(3)
// let node2 = new Node(4)
// let node3 = new Node(11)
// let node4 = new Node(6)
// let node5 = new Node(7)
// let node6 = new Node(8)

// node.left=node1;
// node.right=node2;
// node1.left=node3;
// node1.right=node4;
// node2.left=node5;
// node2.right=node6;

// let eshe= new BinaryTree()
// eshe.root=node;

// console.log(eshe);
// console.log('max',eshe.findMaximum());


module.exports=BinaryTree;

