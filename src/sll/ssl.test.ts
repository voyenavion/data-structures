import { describe, it, expect, beforeEach } from "vitest";
import SLL from "./singly-linked-list";

describe("shift", () => {
  let sll;
  beforeEach(async () => {
    sll = new SLL().push("hi").push("shaun").push("keep").push("going");
  });
  it("shifts", () => {
    sll.shift();
    expect(sll.getHead().val).toBe("shaun");
    expect(sll.getTail().val).toBe("going");
  });
  it("shifts on two item list and updates tail", () => {
    sll = new SLL().push("hi").push("shaun");
    sll.shift();
    expect(sll.getHead().val).toBe("shaun");
    expect(sll.getTail().val).toBe("shaun");
  });
  it("shifts on one item list", () => {
    sll = new SLL().push("hi");
    sll.shift();
    expect(sll.getHead()).toBe(null);
    expect(sll.getTail()).toBe(null);
  });
});

describe("unshift", () => {
  let sll;
  beforeEach(async () => {
    sll = new SLL().push("hi").push("shaun").push("keep").push("going");
  });
  it("unshifts", () => {
    sll.unshift("oh");
    expect(sll.getHead().val).toBe("oh");
    expect(sll.getHead().next.val).toBe("hi");
    expect(sll.getTail().val).toBe("going");
    expect(sll.getLength()).toBe(5);
  });
  it("unshifts with empty list", () => {
    sll = new SLL();
    sll.unshift("oh");
    expect(sll.getHead().val).toBe("oh");
    expect(sll.getHead().next).toBe(undefined);
    expect(sll.getTail().val).toBe("oh");
    expect(sll.getLength()).toBe(1);
  });
});

describe("get", () => {
  let sll;
  beforeEach(async () => {
    sll = new SLL().push("hi").push("shaun").push("keep").push("going");
  });
  it("gets", () => {
    expect(sll.get(1).val).toBe("shaun");
  });
  it("gets undefined for empty sll", () => {
    sll = new SLL();
    expect(sll.get(1)).toBe(undefined);
  });
});

describe("insert", () => {
  let sll;
  beforeEach(async () => {
    sll = new SLL().push("hi").push("shaun").push("keep").push("going");
  });
  it("inserts", () => {
    sll.insert("like", 2);
    expect(sll.get(2).val).toBe("like");
    expect(sll.getLength()).toBe(5);
    sll.print();
  });
  it("inserts and returns undefined for out-of-bounds index", () => {
    const result = sll.insert("like", 5);
    expect(result).toBe(undefined);
  });
  it("inserts at the beginning", () => {
    sll.insert("oh", 0);
    expect(sll.getLength()).toBe(5);
  });
  it("inserts at end index and becomes penultimate", () => {
    sll.insert("woot", 3);
    expect(sll.getLength()).toBe(5);
    sll.print();
    expect(sll.getTail().val).toBe("going");
  });
  it("inserts at length and becomes tail", () => {
    sll.insert("woot", 4);
    expect(sll.getLength()).toBe(5);
    sll.print();
    expect(sll.getTail().val).toBe("woot");
    expect(sll.getHead().val).toBe("hi");
  });
});

describe("remove", () => {
  let sll;
  beforeEach(async () => {
    sll = new SLL().push("hi").push("shaun").push("keep").push("going");
  });
  it("removes from the middle", () => {
    expect(sll.remove(2).val).toBe("keep");
  });
  it("removes from the end and updates tail", () => {
    expect(sll.remove(3).val).toBe("going");
    expect(sll.getTail().val).toBe("keep");
  });
  it("removes from the beginning and updates the head", () => {
    expect(sll.remove(0).val).toBe("hi");
    expect(sll.getHead().val).toBe("shaun");
  });
  it("removes ending one of two and updates head and tail", () => {
    sll = new SLL();
    sll.push("hi").push("shaun");
    expect(sll.remove(1).val).toBe("shaun");
    expect(sll.getHead().val).toBe("hi");
    expect(sll.getTail().val).toBe("hi");
  });
  it("removes beginning one of two and updates head and tail", () => {
    sll = new SLL();
    sll.push("hi").push("shaun");
    expect(sll.remove(0).val).toBe("hi");
    expect(sll.getHead().val).toBe("shaun");
    expect(sll.getTail().val).toBe("shaun");
  });
  it("returns undefined if empty", () => {
    sll = new SLL();
    expect(sll.remove(0)).toBe(undefined);
  });
});
describe("reverse", () => {
  let sll;
  let expected;
  beforeEach(async () => {
    sll = new SLL().push("hi").push("shaun").push("keep").push("going");
    expected = new SLL().push("going").push("keep").push("shaun").push("hi");
  });
  it("reverses list of more than one", () => {
    sll = sll.reverse();
    expect(sll).toEqual(expected);
    expect(sll.getHead().val).toBe("going");
    expect(sll.getTail().val).toBe("hi");
  });
});
