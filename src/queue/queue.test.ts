import { describe, it, expect, beforeEach } from "vitest";
import Queue from "./queue";

describe("enqueue", () => {
  let q;
  beforeEach(async () => {
    q = new Queue();
  });
  it("enqueues and updates last", () => {
    q.enqueue("hi");
    expect(q.last.val).toBe("hi");

    q.enqueue("shaun");
    expect(q.last.val).toBe("shaun");

    q.enqueue("keep");
    q.enqueue("going");

    expect(q.first.val).toBe("hi");
    expect(q.last.val).toBe("going");
  });
});
