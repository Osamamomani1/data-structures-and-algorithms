const Stack = require("./stack");
const Node = require("./node");


class Queue  {
    constructor() {
    this.front=null
    this.stack= new Stack()
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

    Pseudoenqueue1(value){
        this.stack.push(value);
        while(!this.stack.empty()){
            this.enqueue(this.stack.pop())
        }
    }

    
}



let queue= new Queue();
queue.Pseudoenqueue1(1);
queue.Pseudoenqueue1(2);
queue.Pseudoenqueue1(3);
console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);

// console.log(queue.peek());


module.exports=Queue
// class Queue  {
//     constructor() {
//     this.top=null
//     this.stack= new Stack()
//     }

//     push1(value){
     
//       let newNode= new Node(value);

//     newNode.next=this.top
//         this.top=newNode
    
//     }

//     pop1(){
//         let deletedValue=this.top
//         if (!this.top) {
//             return 'stack is empty'  
//         }
//         this.top=this.top.next
//         return deletedValue.value
//     }

//     peek1(){
//         let peekvalue=this.top
//         if (!this.top) {
//             return 'stack is empty'  
//         }
        
//         return peekvalue.value
//     }

//     empty1(){
//         if (!this.top) {
//             return true
//         }
//         return false
//     }

//     enqueue(value){
    //     this.stack.push(value);
    //     let output= this.stack.top;
    // if (this.stack.length>0) {
    //     output.next=this.top
    //     this.top=output
    //     // output=this.stack.pop()
    // }
//     //    for (let i = 0; i < this.stack.length; i++) {
//     //     this.push1(output) 
//     //     output=this.stack.pop()
//     //      console.log('osama');
          
//     //    } 
//     // }else{
//     //     console.log('fat7e');
//     // }
//     // this.stack.push(value);
//     // let output=this.stack.pop()
//     // this.push(output)
    
//     }
    
// }



