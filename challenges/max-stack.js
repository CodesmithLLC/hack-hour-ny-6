/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = [];
  this.max = -Infinity;
  this.push = function(val) {
    this.stack.push(val);
    const len = this.stack.length;
    if (val > this.max) {
    this.max = val;
    }
    return len;
  }
  this.pop = function() {
    const pop = this.stack.pop();
    if (this.max === pop) {
      this.stack = -Infinity;
      let index = 0;

      while (this.stack[index]) {
        if (this.stack[index] > this.max) {
          this.max = this.stack[index];
        }
      }
    }
    return pop;
  }
  this.getMax = function() {
    return this.max;
  }
}


module.exports = Stack;