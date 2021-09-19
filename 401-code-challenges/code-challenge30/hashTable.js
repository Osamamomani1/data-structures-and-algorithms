'use strict'
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        } 
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

}

class Hashmap{
    constructor(size){
this.size=size;
this.map=new Array(size)
    }
    hash(key) {
        return key.split('').reduce((acc, char)=> {
            // console.log("char.charCodeAt(0) =====> ", char.charCodeAt(0))
            return acc + char.charCodeAt(0);
        }, 0) * 7 % this.size;
    }

    add(key, value) {
        let hash = this.hash(key);
        // console.log("hash >>", hash)
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key] : value} 
        this.map[hash].append(entry);
    }
    get(key){
        let hash=this.hash(key)
        if(!this.map[hash]) return null 
        let index=this.map[hash]
        let current=index.head
        if(!current) return 'does not exiset'
        if(current.value[key]) return current.value[key]
        while(current.next){
            current=current.next
            if(current.value[key]) return current.value[key]
        }
    }
    contain(key){
        let hash=this.hash(key)
        if(!this.map[hash]) return false 
        let index=this.map[hash]
        let current=index.head
        if(!current) return false
        if (current.value[key]) return true;

      while (current.next) {
        current = current.next;
        if (current.value[key]) return true;
      }

    }


}


module.exports = Hashmap;