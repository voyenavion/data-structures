import { describe, it, expect, beforeEach } from "vitest";
import DoublyLinkedList from "./doubly-linked-list";

describe("reverse", () => {
  let dll;
  let expected;
  beforeEach(async () => {
    dll = new DoublyLinkedList()
      .push("hi")
      .push("shaun")
      .push("keep")
      .push("going");
    expected = new DoublyLinkedList()
      .push("going")
      .push("keep")
      .push("shaun")
      .push("hi");
  });
  it("reverses list of more than one", () => {
    dll = dll.reverse();
    expect(dll).toEqual(expected);
    expect(dll.head.val).toBe("going");
    expect(dll.tail.val).toBe("hi");
    expect(dll.tail.prev.val).toBe("shaun");
    expect(dll.tail.next).toBe(null);
    expect(dll.head.prev).toBe(null);
    expect(dll.head.next.val).toBe("keep");
  });
});
