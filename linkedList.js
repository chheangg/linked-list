class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.getTail(this.head !== null ? this.head : null);
  }

  getTail(node) {
    if (this.head === null) {
      return null;
    }
    if (node.nextNode === null) {
      return node;
    } else {
      return this.getTail(node.nextNode);
    }
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const lastNode = this.getTail(this.head);
      lastNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  getSize(node) {
    if (node === null) {
      return 0;
    }
    if (node.nextNode === null) {
      return 1;
    }
    return 1 + this.getSize(node.nextNode);      
  }

  get size() {
    return this.getSize(this.head);
  }

  cycler(node, index) {
    if (index === 0) {
      return node;
    }
    return this.cycler(node.nextNode, index - 1)
  }

  at(index) {
    return this.cycler(this.head, index); 
  }

  pop() {
    const index = this.getSize(this.head) - 2;
    console.log(index);
    if (index < 0) {
      this.head = null;
    } else {
      this.at(index).nextNode = null;
    }
  }

  finder(node, value, num) {
    if (node.value() === value) {
      if (num >= 0) {
        return num;
      }
      return true;
    } else {
      if (node.nextNode === null) {
        if (num >= 0) {
          return null;
        }
        return false;
      }
      if (num >= 0) {
        return this.finder(node.nextNode, value, num + 1);
      }
      return this.finder(node.nextNode, value);
    }
  }

  contains(value) {
    return this.finder(this.head, value);
  }

  find(value) {
    return this.finder(this.head, value, 0);
  } 

  stringCycler(node) {
    if (node.nextNode === null) {
      return 'null'
    }
    return `( ${node.value()} ) -> ` + this.stringCycler(node.nextNode);
  }

  toString() {
    return this.stringCycler(this.head);
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value, this.at(index));
      this.at(index - 1).nextNode = newNode;
    }
  }
}

class Node {
  constructor(data = null, next = null) {
    this.value = () => data;
    this.nextNode = next;
  }
}

const list = new LinkedList();
list.append('hey');
list.append('hey');
list.append('hi');

