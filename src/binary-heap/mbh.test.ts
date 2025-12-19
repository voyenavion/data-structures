import { beforeEach, describe, expect, it } from "vitest"
import MBH from "./mbh"

let mbh
let expectedArr

describe("mbh", () => {
  beforeEach(() => {
    mbh = new MBH()
    expectedArr = []
  })

  it("should insert and reorder", () => {
    mbh.insert(1)
    mbh.insert(2)
    expectedArr = [2, 1]

    expect(mbh.values).toStrictEqual(expectedArr)

    mbh.insert(3)
    mbh.insert(4)
    mbh.insert(5)
    expectedArr = [5, 4, 2, 1, 3]

    expect(mbh.values).toStrictEqual(expectedArr)
    mbh.insert(6)
    expectedArr = [6, 4, 5, 1, 3, 2]
    expect(mbh.values).toStrictEqual(expectedArr)
  })

  it("should max extract and reorder", () => {
    mbh.insert(1)
    mbh.insert(2)
    mbh.insert(3)
    mbh.insert(4)
    mbh.insert(5)
    mbh.insert(6)
    mbh.extractMax()
    expect(mbh.values[0]).toEqual(5)

    expect(mbh.values).toStrictEqual([5, 4, 2, 1, 3])

    mbh.extractMax()
    expect(mbh.values).toStrictEqual([4, 3, 2, 1])

    mbh.extractMax()
    expect(mbh.values).toStrictEqual([3, 1, 2])
  })
  it("should handle heap of 1 element", () => {
    mbh.insert(1)
    mbh.extractMax()
    expect(mbh.values).toStrictEqual([])
  })
})
