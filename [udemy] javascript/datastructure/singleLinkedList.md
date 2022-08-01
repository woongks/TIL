# Singly Linked List

comparisons with arrays:

lists

- do not have indices
- connected via nodes with a next pointer
- random access is not allowed

arrays

- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index

```JavaScript

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;}
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
    return this;
    }

  pop(){
    if (!this.tail) return undefined
    else {
      let current = this.head
      while(current.next) {
        let newTail = current
        current = current.next
      }
      this.tail = newTail
      this.tail.next = null;
      this.length --
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current
      }
    }
  shift(){
    if (!this.head) return undefined
    let oldHead = this.head
    this.head = oldHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return oldHead;
  }
}

```
