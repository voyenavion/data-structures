import Node, { NodeType } from "./bst-node"

export default class BST {
  root: NodeType

  constructor() {
    this.root = null
  }

  isLeaf(node: NodeType) {
    return node?.left == null && node?.right == null
  }

  isLess(val: number, node: NodeType) {
    return node.value > val
  }

  findParent(val: number, node: NodeType): NodeType {
    while (!this.isLeaf(node)) {
      let temp = this.leftOrRight(val, node)
      if (temp == null) {
        break
      }
      node = temp
    }
    return node
  }

  leftOrRight(val: number, node: NodeType): NodeType {
    let isLess = this.isLess(val, node)
    return isLess ? node.left : node.right
  }

  insert(val: number) {
    const newNode = new Node(val)
    if (this.root) {
      let parent: NodeType = this.findParent(val, this.root)
      let isLess = this.isLess(val, parent)
      isLess ? (parent.left = newNode) : (parent.right = newNode)
    } else {
      this.root = new Node(val)
    }
  }

  find(val: number): NodeType {
    let current = this.root
    while (current) {
      if (current.value === val) return current
      current = this.leftOrRight(val, current)
    }
    return undefined
  }

  bft(): Array<number> {
    const queue: Array<NodeType> = []
    const visited: Array<NodeType> = []
    if (!this.root) return undefined
    queue.push(this.root)
    while (queue.length > 0) {
      visited.push(queue.shift())
      const left = visited[visited.length - 1].left
      const right = visited[visited.length - 1].right
      if (left) queue.push(left)
      if (right) queue.push(right)
    }
    return visited.map((n) => n.value)
  }

  dftPre(): Array<number> {
    let result: Array<number> = []
    let helper = (node: NodeType) => {
      result.push(node.value)
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
    }
    helper(this.root)
    return result
  }

  dftPost(): Array<number> {
    let result = []
    const helper = (node: NodeType) => {
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
      result.push(node.value)
    }
    helper(this.root)
    return result
  }

  dftInOrder(): Array<number> {
    let result = []
    const helper = (node: NodeType) => {
      if (node.left) helper(node.left)
      result.push(node.value)
      if (node.right) helper(node.right)
    }
    helper(this.root)
    return result
  }
}
