/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      // If the queue is empty, the new node becomes both first and last
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, add the new node to the end and update the last node
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) {
      // If the queue is empty, return undefined or handle the error as per your requirements.
      throw new Error('Queue is empty');
    }
    let removedValue = this.first.val;
    if (this.size === 1) {
      // If there is only one node, reset both first and last to null
      this.first = null;
      this.last = null;
    } else {
      // Otherwise, move the first pointer to the next node in the queue
      this.first = this.first.next;
    }
    this.size--;
    return removedValue;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) {
      // If the queue is empty, return undefined or handle the error as per your requirements.
      return undefined;
    }

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
