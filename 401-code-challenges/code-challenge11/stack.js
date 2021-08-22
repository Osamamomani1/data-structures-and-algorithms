'use strict'
const Node=require('./node')
class Stack{
    constructor(){
        this.top=null;

    }


    push(value){
        let newNode=new Node(value)
        if(this.top){
            newNode.next=this.top
            this.top=newNode
        }
        this.top=newNode

        
    }

    pop(){
        if(!this.top) return 'stack is empty'
        let top =this.top 
        this.top=this.top.next
        return top.value
        
    }
    peek(){
        if(!this.top) return -1 
        return this.top.value
    }
    isEmpty(){
        if(!this.top){
            return true
        }
    
          return  false
        
    }

}
// let one=new Stack()
// one.push(1)
// one.push(3)
// one.push(4)




// console.log(one)
// console.log(one.peek())
// console.log(one.isEmpty())



module.exports = Stack;