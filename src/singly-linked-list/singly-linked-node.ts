export interface NodeType {
  val: string;
  next: NodeType;
}

export default class Node {
  val;
  next;

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
