var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _SLL_head, _SLL_tail, _SLL_length;
import Node from "./singly-linked-node";
class SLL {
    constructor() {
        _SLL_head.set(this, void 0);
        _SLL_tail.set(this, void 0);
        _SLL_length.set(this, 0);
    }
    getHead() {
        return __classPrivateFieldGet(this, _SLL_head, "f");
    }
    getTail() {
        return __classPrivateFieldGet(this, _SLL_tail, "f");
    }
    getLength() {
        return __classPrivateFieldGet(this, _SLL_length, "f");
    }
    push(val) {
        var _a;
        const newNode = new Node(val);
        if (__classPrivateFieldGet(this, _SLL_length, "f") == 0) {
            __classPrivateFieldSet(this, _SLL_head, newNode, "f");
            __classPrivateFieldSet(this, _SLL_tail, newNode, "f");
        }
        else if (__classPrivateFieldGet(this, _SLL_length, "f") == 1) {
            __classPrivateFieldGet(this, _SLL_head, "f").next = newNode;
            __classPrivateFieldSet(this, _SLL_tail, newNode, "f");
        }
        else {
            __classPrivateFieldGet(this, _SLL_tail, "f").next = newNode;
            __classPrivateFieldSet(this, _SLL_tail, newNode, "f");
        }
        __classPrivateFieldSet(this, _SLL_length, (_a = __classPrivateFieldGet(this, _SLL_length, "f"), _a++, _a), "f");
        return this;
    }
    pop() {
        var _a, _b;
        const exitingNode = __classPrivateFieldGet(this, _SLL_tail, "f");
        if (__classPrivateFieldGet(this, _SLL_length, "f") == 0) {
        }
        else if (__classPrivateFieldGet(this, _SLL_length, "f") == 1) {
            __classPrivateFieldSet(this, _SLL_head, null, "f");
            __classPrivateFieldSet(this, _SLL_tail, null, "f");
            __classPrivateFieldSet(this, _SLL_length, (_a = __classPrivateFieldGet(this, _SLL_length, "f"), _a--, _a), "f");
        }
        else {
            __classPrivateFieldSet(this, _SLL_tail, this.secondToLast(), "f");
            __classPrivateFieldGet(this, _SLL_tail, "f").next = null;
            __classPrivateFieldSet(this, _SLL_length, (_b = __classPrivateFieldGet(this, _SLL_length, "f"), _b--, _b), "f");
        }
        return exitingNode;
    }
    shift() {
        var _a;
        const exitingNode = __classPrivateFieldGet(this, _SLL_head, "f");
        const newHead = exitingNode.next;
        if (__classPrivateFieldGet(this, _SLL_length, "f") == 0) {
            return exitingNode;
        }
        __classPrivateFieldSet(this, _SLL_head, newHead, "f");
        __classPrivateFieldSet(this, _SLL_length, (_a = __classPrivateFieldGet(this, _SLL_length, "f"), _a--, _a), "f");
        if (__classPrivateFieldGet(this, _SLL_length, "f") == 1) {
            __classPrivateFieldSet(this, _SLL_tail, newHead, "f");
        }
        console.log(exitingNode);
        return exitingNode;
    }
    insert(val, index) {
        if (__classPrivateFieldGet(this, _SLL_length, "f") == 0) {
            this.push(val);
        }
        let counter = index;
        return this;
    }
    secondToLast() {
        let preceding = null;
        let node = __classPrivateFieldGet(this, _SLL_head, "f");
        while (node.next) {
            preceding = node;
            node = node.next;
        }
        console.log(preceding);
        return preceding;
    }
    print() {
        let node = __classPrivateFieldGet(this, _SLL_head, "f");
        console.log(node === null || node === void 0 ? void 0 : node.val);
        while (node === null || node === void 0 ? void 0 : node.next) {
            node = node.next;
            console.log(node.val);
        }
    }
}
_SLL_head = new WeakMap(), _SLL_tail = new WeakMap(), _SLL_length = new WeakMap();
export default SLL;
let sll = new SLL();
sll.push("hi").push("shaun").shift();
sll.print();
