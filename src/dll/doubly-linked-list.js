// @ts-check
import Node from "./doubly-linked-node";

export default class DoublyLinkedList {
  head;
  tail;
  length;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const target = this.tail;
    if (this.length == 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
      return target;
    }
    let prev = target.prev;
    prev.next = null;
    this.tail = prev;
    this.length--;
    return target;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length == 1) return this.pop();
    const target = this.head;
    const formerNext = target.next;
    formerNext.prev = null;
    this.head = formerNext;
    this.length--;
    return target;
  }
  unshift(val) {
    if (!this.head) return this.push(val);
    const node = new Node(val);
    const formerFirst = this.head;
    node.next = formerFirst;
    formerFirst.prev = node;
    this.head = node;
    this.length++;
    return this;
  }
  get(index) {
    if (!this.head || index >= this.length) return null;
    const searchForward = index < this.length / 2;
    let start;
    let counter;
    if (searchForward) {
      start = this.head;
      counter = 0;
      while (start.next) {
        if (counter == index) {
          return start;
        }
        start = start.next;
        counter++;
      }
    } else {
      start = this.tail;
      counter = this.length - 1;
      while (start.prev) {
        if (counter == index) {
          return start;
        }
        start = start.prev;
        counter--;
      }
    }
  }
  set(index, val) {
    if (index >= this.length) return false;
    const node = this.get(index);
    node.val = val;
    return true;
  }

  remove(index) {
    if (this.length === 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    const prev = this.get(index - 1);
    const target = prev.next;
    const next = target.next;
    prev.next = target.next;
    next.prev = prev;
    this.length--;
    return target;
  }
  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (this.length === 0 || index == this.length) {
      this.push(val);
      return true;
    }
    if (index > this.length) {
      return false;
    }
    let newNode = new Node(val);
    const prev = this.get(index - 1);
    const displaced = prev.next;
    newNode.next = displaced;
    displaced.prev = newNode.next;
    newNode.prev = prev;
    prev.next = newNode;
    this.length++;
    return true;
  }

  reverse() {
    if (!this.head) return this;
    let current = this.head;
    let formerNext;
    let newNext = null;
    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      formerNext = current.next;
      current.prev = formerNext;
      current.next = newNext;
      newNext = current;
      current = formerNext;
    }
    return this;
  }
  print() {
    const fncter = (node) => {
      if (arr1) {
        arr1.push(node.val);
      }
    };

    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
