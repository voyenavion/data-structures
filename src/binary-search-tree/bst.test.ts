import { describe, expect, it } from "vitest"
import BST from "./bst"
import Node from "./bst-node"

const setUpBst = (arr: Array<number>) => {
  const bst = new BST()
  arr.forEach((v) => {
    bst.insert(v)
  })
  return bst
}

let bst

describe("insert", () => {
  it("should insert root when null", () => {
    bst = new BST()
    bst.insert(10)
    expect(bst.root.value).toBe(10)
  })
  it("should insert a leaf on root in correct position", () => {
    bst = setUpBst([10, 12, 9, 3, 15])
    expect(bst.root.right.value).toBe(12)
    expect(bst.root.right.right.value).toBe(15)
    expect(bst.root.left.value).toBe(9)
    expect(bst.root.left.left.value).toBe(3)
  })
})

describe("findParent", () => {
  it("should find the right parent", () => {
    bst = new BST()
    bst.root = new Node(10)
    expect(bst.findParent(11, bst.root.value)).toBe(10)
  })
})

describe("find", () => {
  it("should find", () => {
    bst = setUpBst([10, 12, 9, 3, 15])
    expect(bst.find(10)).toBeInstanceOf(Node)
    expect(bst.find(10).value).toBe(10)
    expect(bst.find(15).value).toBe(15)
    bst = setUpBst([])
    expect(bst.find(10)).toBeUndefined()
  })
})

describe("breadth first traversal", () => {
  it("should traverse", () => {
    bst = setUpBst([10, 12, 9, 3, 15])
    const result = bst.bft()
    expect(result).toEqual([10, 9, 12, 3, 15])
  })
})

describe("depth first traversal preorder", () => {
  it("should traverse", () => {
    bst = setUpBst([10, 6, 15, 3, 8, 20])
    /*
          10
        6   15 
      3   8   20

    */
    const result = bst.dftPre()
    expect(result).toEqual([10, 6, 3, 8, 15, 20])
  })
})

describe("depth first traversal post order", () => {
  it("should traverse", () => {
    bst = setUpBst([10, 6, 15, 3, 8, 20])
    /*
          10
        6   15 
      3   8   20

    */
    const result = bst.dftPost()
    expect(result).toEqual([3, 8, 6, 20, 15, 10])
  })
})

describe("depth first traversal in order", () => {
  it("should traverse", () => {
    bst = setUpBst([15, 20, 10, 12, 1, 5, 50])
    /*
          10
        6   15 
      3   8   20

    */
    const result = bst.dftInOrder()
    expect(result).toEqual([1, 5, 10, 12, 15, 20, 50])
  })
})
