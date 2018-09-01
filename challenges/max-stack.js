/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {
    head: null,
    tail: null,
  };
  this.length = 0;
  this.max = null;
  this.createNode = (value, max) => ({
    value: null || value,
    prevMax: null || max,
    prev: null,
    next: null,
  });
  this.push = (value) => {
    const node = this.createNode(value, this.max);
    if (!this.length) {
      node.prev = this.storage;
      this.storage.head = node;
      this.storage.tail = node;
      this.max = value;
    } else {
      node.prev = this.storage.tail;
      this.storage.tail.next = node;
      this.storage.tail = node;
    }
    if (value > this.max) {
      this.max = value;
    }
    this.length += 1;
    return this.length;
  };
  this.pop = () => {
    const { value, prevMax } = this.storage.tail;
    if (!this.length) return undefined;
    if (this.length === 1) {
      this.storage.head = null;
      this.storage.tail = null;
      this.storage.max = null;
    } else {
      this.storage.tail = this.storage.tail.prev;
      this.storage.tail.next = null;
    }
    if (value > prevMax) {
      this.max = this.storage.tail.value;
    } else {
      this.max = this.storage.tail.prevMax;
    }
    this.length -= 1;
    return value;
  };
  this.getMax = () => this.max;
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());

module.exports = Stack;