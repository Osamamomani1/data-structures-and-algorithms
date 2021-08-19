'use strict'

const Node = require("./node");

class Stack  {
    constructor() {
    this.top=null
    }

    push(value){
      let newNode= new Node(value);

    newNode.next=this.top
        this.top=newNode
    
    }

    pop(){
        let deletedValue=this.top
        if (!this.top) {
            return 'stack is empty'  
        }
        this.top=this.top.next
        return deletedValue.value
    }

    peek(){
        let peekvalue=this.top
        if (!this.top) {
            return 'stack is empty'  
        }
        
        return peekvalue.value
    }

    empty(){
        if (!this.top) {
            return true
        }
        return false
    }
    
}



let stack= new Stack();
//  stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

console.log('before',stack);

// console.log('TESTING',stack.pop());
console.log('TESTING',stack.peek());
console.log('after',stack);


 console.log('TESTING',stack.empty());

module.exports=Stack


