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
    while (current) {
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
  
}

let list = new LinkedList();

list.insert(1);
list.append(2);
list.append(3);
list.insertBefore(2,5);
list.insertAfter(1,4);

// // console.log('fat7e');
// console.log(list.toString());
// // console.log(list.length);
console.log(list.kthFromEnd(5));

let list01 = new LinkedList();
let list02 = new LinkedList();

// list01.insert(1);
// list01.append(3);
// list01.append(2);





list02.insert(5);
list02.append(9);
list02.append(4)
list02.append(7);
list02.append(11);



// console.log(list.zipLists(list01, list02));
console.log(list.zipLists(list01, list02).toString());



module.exports=LinkedList