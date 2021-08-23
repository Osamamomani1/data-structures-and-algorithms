'use strict'

const Node = require("./node");

class AnimalShelter  {
    constructor() {
    this.front=null
    this.length=0
    }

    enqueue(value){
      if (value.type !== 'dog' && value.type !== 'cat') {
        return 'you can only enter dog or cat here'
      }
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
    this.length++;
    }

    delete(){
      let deletedValue=this.front
      if (!this.front) {
          return 'queue is empty'  
      }
      this.front=this.front.next
      this.length--;
      return deletedValue.value
    }

    dequeue(pref){

      if (this.length==0) {
        return 'queue is empty'
      }
      if (pref != 'cat' && pref!='dog') {
        return 'null'
      }
      let newval='';
      let cond=true
        for (let i = 0; i <= this.length; i++) {
          
           if (pref===this.front.value.type && cond===true){
            let value = this.front.value;
            this.delete()
            newval=value;
            cond=false;
            
          } else
          {this.enqueue(this.front.value);
            this.delete()}
          
      }
      return newval;
    }

    toString() {
      let current = this.front;
      if (!current) {
        throw new Error("the linked list does not exisit");
      }
  
      let format = "";
      while (current) {
        format += `{${current.value.name}--${current.value.type}}-->`;
        current = current.next;
      }
      return (format += "NULL");
    }
    
}



let newQueue= new AnimalShelter();
newQueue.enqueue({name:'kitty',
type:'cat'});
newQueue.enqueue({name:'esco',
type:'dog'});
newQueue.enqueue({name:'kiki',
type:'cat'});
newQueue.enqueue({name:'hit',
type:'dog'});

                 
console.log('BEFOR-->',newQueue.toString());
// console.log('nananannaann',newQueue.dequeue('fd'));
// console.log(queue);
newQueue.dequeue('dog')
// console.log(queue.dequeue('cat'));

console.log('AFTER-->',newQueue.toString());


// console.log(queue.front.value);

module.exports=AnimalShelter