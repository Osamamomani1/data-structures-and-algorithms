const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this.head;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  insertBefore(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    if(current.value===value){
      newNode.next=current;
      this.head=newNode;
    }
    while (current.next) {
      if(current.next.value==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
    this.length++;
  }
  insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    while (current) {
      if(current.value==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
    this.length++;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`the ${value} is founded in list`);
        return true;
      }
      current = current.next;
    }
    console.log(`the ${value} is not found in list`);
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error("the linked list does not exisit");
    }

    let format = "";
    while (current) {
      format += `{${current.value}}-->`;
      current = current.next;
    }
    return (format += "NULL");
  }

  kthFromEnd(k) {
    if (k<0) {
      return 'there is no results for searching less than zero';
    }
    if (k>=this.length) {
      return 'there is no results 3aaaa';   
    }
    

    let current= this.head;
    let i = this.length - k-1; //-1 to avoid null value in case k=0
    while (i>0) {
      current=current.next;
      i--;
    }
    return current.value;
  }

  zipLists(list1, list2){
   
    let listzip= new LinkedList();
    if (!list1.head) {
      return list2
    }

    if (!list2.head) {
      return list1
    }

    if (!list1.head && !list2.head) {
      return console.log('List is empty, please check your input');
    }
    
    listzip.insert(list1.head.value);
    listzip.append(list2.head.value);
    let currentL1 = list1.head;
    let currentL2 = list2.head;
    let x;

    if (list1.length>=list2.length) {
      x = list1.length
    }else{
       x = list2.length
    }
    for (let i = 0; i <x; i++) {

      if (currentL1.next) {
        listzip.append(currentL1.next.value)
        currentL1=currentL1.next
      }
      
      if (currentL2.next) {
        listzip.append(currentL2.next.value)
        currentL2=currentL2.next
      }
    }


    return listzip
  }

  Reverse(){
    let temp= new LinkedList();
    let current=this.head
    temp.insert(current.value)
  while (current.next!=null) {
    temp.insertBefore(current.value,current.next.value)
    current=current.next;
  }
  return temp
  }
  palindrome(){
    let current=this.head;
    let value=this.head
    let merrorValue;
    let i = this.length-1;
    let x = Math.floor(this.length/2)
    let y = this.length-1;
    while(x>0){
      y--;
    console.log('i-->',i);
    while(i>0){
    console.log(current.value);
    current=current.next;
    i--;
    }
    console.log('i-->',i);
    merrorValue=current
    current=this.head
    console.log('merror',merrorValue.value);
    i=y
    console.log('i-->',i);
    if(value.value!=merrorValue.value) return false ;
    console.log('value',value.value);
    value=value.next;
    console.log('value',value.value);
    x--
    }
    return true ;
    }
  
}

let list = new LinkedList();

list.insert(1);
list.append(2);
list.append(3);
list.append(4);
list.append(3);
list.append(2);
list.append(1);


console.log(list.palindrome());



module.exports=LinkedList