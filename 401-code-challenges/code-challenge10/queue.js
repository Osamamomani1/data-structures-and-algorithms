'use strict'

const Node = require("./node");

class Queue  {
    constructor() {
    this.front=null
    }

    enqueue(value){
      let newNode= new Node(value);
      if (!this.front) {
        this.front = newNode;
      } else {
        let currentNode = this.front;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    
    }

    dequeue(){
        let deletedValue=this.front
        if (!this.front) {
            return 'queue is empty'  
        }
        this.front=this.front.next
        return deletedValue.value
    }

    peek(){
        let peekvalue=this.front
        if (!this.front) {
            return 'queue is empty'  
        }
         return peekvalue.value
    }

    empty(){
        if (!this.front) {
            return true
        }
        return false
    }
    
}



let queue= new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);

console.log(queue.peek());


module.exports=Queue

