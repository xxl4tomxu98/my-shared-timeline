// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
        }
        if (this.length > 0) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) {
            return undefined;
          }
          let popped = this.tail;
          if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return popped;
          }
          let node = this.head;
          while(node.next !== this.tail){
            node = node.next;
          }
          node.next = null;
          this.tail = node;
          this.length--;
          return popped;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        if (this.length === 0) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) {
            return undefined;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return oldHead;
        }
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while (node !== null) {
            if (node.value === target) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length || index <0) {
            return null;
        }
        let count = 0;
        let node = this.head;
        while (count < index) {
            node = node.next;
            count++;
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let count = 0;
        let node = this.head;
        while (count < index) {
            node = node.next;
            count++;
            if (node === null) {
                return false;
            }
        }
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length || index < 0) {
            return false;
        }
        let count = 0;
        let node = this.head;
        while (count < index - 1) {
            node = node.next;
            count++;
        }
        let oldNext = node.next;
        let newNode = new Node(val);
        newNode.next = oldNext;
        node.next = newNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length || index < 0) {
            return undefined;
        }
        let count = 0;
        let node = this.head;
        while (count < index - 1) {
            node = node.next;
            count++;
        }
        let removed = node.next;
        node.next = node.next.next;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
