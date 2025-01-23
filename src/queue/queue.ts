import Node from "../sll/singly-linked-node";

export default class Queue {
  first;
  last;
  constructor() {
    this.first = null;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return this;
  }
}
