export default class Node {
  val;
  next;
  prev;

  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
