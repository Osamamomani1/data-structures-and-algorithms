'use strict'
const Stack=require('./stack')

class PesudoQueues{
    constructor() {
        this.stack1=new Stack()
        this.stack2=new Stack()
       
      }
      enqueue(value) {
        this.stack1.push(value);
      }
    
      dequeue() {
        
        if(this.stack2.isEmpty()){
          while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop())
          }
        }
        return this.stack2.pop()
      }

      
    
     
}

// let pQ=new PesudoQueues()
// pQ.enqueue(1)
// pQ.enqueue(2)
// pQ.enqueue(3)

// console.log(pQ.dequeue())
// console.log(pQ)

module.exports=PesudoQueues