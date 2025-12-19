export interface NodeType {
  value: number
  left?: NodeType
  right?: NodeType
}

export default class Node {
  value: number
  left: NodeType
  right: NodeType

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}
