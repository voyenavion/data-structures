import { beforeEach, describe, expect, it } from "vitest"
import HashTable from "./hash-table"

describe("hash", () => {
  let ht
  beforeEach(() => {
    ht = new HashTable()
  })
  it("hashes same string to same value", () => {
    expect(ht._hash("c")).toEqual(3)
    expect(ht._hash("c")).toEqual(3)
  })

  it("certain strings produce same hash value", () => {
    expect(ht._hash("bad")).toEqual(7)
    expect(ht._hash("abc")).toEqual(12)
    expect(ht._hash("redmond")).toEqual(5)
    expect(ht._hash("efg")).toEqual(6)
    expect(ht._hash("ghdik")).toEqual(6)
  })

  it("sets a tuple to an array at the expected index", () => {
    expect(ht.set("abc", "*")).toEqual(12)
    expect(ht._getIndex(12)).toEqual([["abc", "*"]])
  })

  it("overwrites the value when the same key is set twice", () => {
    ht.set("c", "&")
    ht.set("c", "*")
    expect(ht._getIndex(3)).toEqual([["c", "*"]])
  })

  it("gets the correct value", () => {
    ht.set("kjdk", "@")
    expect(ht.get("kjdk")).toEqual("@")
  })

  it("gets the correct value when there are multiple tuples at the same index", () => {
    ht.set("efg", "&")
    ht.set("ghdik", "*")
    expect(ht.get("efg")).toEqual("&")
    expect(ht.get("ghdik")).toEqual("*")
  })

  it("returns undefined when getting for a key that has not been set", () => {
    expect(ht.get("efg")).toBeUndefined()
  })

  it("provides all the keys even when they are at the same index", () => {
    ht.set("efg", "&")
    ht.set("ghdik", "*")
    ht.set("abc", "*")
    expect(ht.keys()).toEqual(["efg", "ghdik", "abc"])
  })

  it("provides all the unique values, no duplicates", () => {
    ht.set("efg", "&")
    ht.set("ghdik", "*")
    ht.set("abc", "*")
    expect(ht.values()).toEqual(["&", "*"])
  })
})
