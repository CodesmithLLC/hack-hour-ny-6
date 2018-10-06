/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
  this.max = -Infinity;
  (this.push = function(...elements) {
    if (elements.length === 1) {
      this.storage[this.length++] = elements;
      if (elements > this.max) this.max = elements;
    }
    for (let i = 0; i < elements.length; i++) {
      this.storage[this.length++] = elements[i];
      if (elements[i] > this.max) this.max = elements[i];
    }
    return this.length;
  }),
    (this.pop = function(el) {
      this.storage[this.length--] = el;
      return el;
    }),
    (this.getMax = function() {
      return this.max;
    });
}

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.index - 1];
  delete this.storage[this.index - 1];

  if (this.index > 0) {
    this.index -= 1;
  }

  return popped;
};

Stack.prototype.getMax = function() {
  let maxValue = this.stack[0];

  for (var index in this.storage) {
    if (this.storage[index] >= maxValue || maxValue === undefined) {
      maxValue = this.storage[index];
    }
  }

  return maxValue;
};

//O(n) space/ O(1) time for getMax
function Stack() {
  this.stack = [];
  this.maxStack = [];
}

Stack.prototype.push = function(value) {
  //push to og stack
  this.stack.push(value);

  //if maxStack is empty, or if the value is greater than the max so far, push the value
  //otherwise, our last max is still our max at the last index
  let max =
    !this.maxStack.length || value > this.maxStack[this.maxStack.length - 1]
      ? value
      : this.maxStack[this.maxStack.length - 1];
  return this.maxStack.push(max);
};

Stack.prototype.pop = function() {
  //pop from both stacks, but return the og stack popped
  this.maxStack.pop();
  return this.stack.pop();
};

Stack.prototype.getMax = function() {
  //return the last value from maxStack
  return this.maxStack[this.maxStack.length - 1];
};
module.exports = Stack;
