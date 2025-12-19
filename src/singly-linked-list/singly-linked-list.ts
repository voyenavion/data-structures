import Node, { NodeType } from "./singly-linked-node";

export default class SLL {
  #head: NodeType;
  #tail: NodeType;
  #length: number = 0;
  getHead() {
    return this.#head;
  }
  getTail() {
    return this.#tail;
  }
  getLength() {
    return this.#length;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.#length == 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#length++;
    return this;
  }
  pop(): NodeType {
    const exitingNode = this.#tail;
    if (this.#length == 0) {
    } else if (this.#length == 1) {
      this.#head = undefined;
      this.#tail = undefined;
      this.#length--;
    } else {
      this.#tail = this.secondToLast();
      this.#tail.next = undefined;
      this.#length--;
    }
    return exitingNode;
  }
  shift(): NodeType {
    if (!this.#head) return undefined;
    const exitingNode = this.#head;
    const newHead = exitingNode.next;
    this.#head = newHead;
    this.#length--;
    if (this.#length <= 1) {
      this.#tail = newHead;
    }
    return exitingNode;
  }
  unshift(val: string) {
    const newNode = new Node(val);
    const second = this.#head;
    this.#head = newNode;
    if (this.#length == 0) {
      this.#tail = newNode;
    }
    newNode.next = second;
    this.#length++;
    return this;
  }
  get(index: number): NodeType {
    if (index - 1 > this.#length) {
      return undefined;
    }
    let counter = 0;
    let node = this.#head;
    while (node?.next) {
      if (counter == index) {
        return node;
      }
      node = node.next;
      counter++;
    }
  }
  insert(val: string, index: number) {
    if (index == 0) {
      this.unshift(val);
      return this;
    }
    if (this.#length == 0 || index == this.#length) {
      this.push(val);
      return this;
    }
    if (index > this.#length) {
      return undefined;
    }
    let newNode = new Node(val);
    const prev = this.get(index - 1);
    const displaced = prev.next;
    newNode.next = displaced;
    prev.next = newNode;
    this.#length++;
    return this;
  }
  remove(index: number): NodeType {
    if (this.#length == 0 || index >= this.#length) {
      return undefined;
    }
    if (index == 0) {
      return this.shift();
    }
    if (index == this.#length - 1) {
      return this.pop();
    }
    const prev = this.get(index - 1);
    const target = prev.next;
    prev.next = target.next;
    this.#length--;
    return target;
  }
  reverse() {
    let current = this.#head;
    this.#head = this.#tail;
    this.#tail = current;

    let formerNext;
    let newNext = null;

    for (let i = 0; i < this.#length; i++) {
      formerNext = current.next;
      current.next = newNext;
      newNext = current;
      current = formerNext;
    }
    return this;
  }
  secondToLast(): NodeType {
    let preceding;
    let node = this.#head;
    while (node.next) {
      preceding = node;
      node = node.next;
    }
    console.log(preceding);
    return preceding;
  }
  print(): void {
    let node = this.#head;
    console.log(node?.val);
    while (node?.next) {
      node = node.next;
      console.log(node.val);
    }
  }
}
