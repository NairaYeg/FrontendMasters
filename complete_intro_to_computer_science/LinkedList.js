class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return this.tail;
  }

  find(idx) {
    if (idx > this.length - 1) return undefined;
    let current = this.head;
    while (idx > 0) {
      current = current.next;
      idx--;
    }
    return current;
  }

  get(idx) {
    const node = this.find(idx);
    if (node) return node.value;
    return void 0;
  }

  delete(idx) {
    if (idx === 0) {
      const head = this.head;
      this.head = head.next;
      this.length--;
      return true;
    }

    const prevNode = this.find(idx - 1);
    const node = prevNode.next;
    prevNode.next = node.next;
    this.length--;

    return true;
  };

  reverse() {
   let next = null;
   let prev = null;
   let current = this.head;
    
   while(current !== null) {
     next = current.next
     current.next = prev
     prev = current
     current = next
   }; 
    
   return prev;
  };
}

const newList = new LinkedList();

newList.push("value 1");
newList.push("value 2");
newList.push("value 3");
newList.push("value 4");
newList.push("value 5");

// console.log('newList', newList);
// console.log("newList", newList);

// console.log(newList.get(2));

// newList.delete(2);

// newList.delete(0);

console.log(newList.reverse());
// console.log("list", newList);
