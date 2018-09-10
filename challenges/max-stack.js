/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
    this.storage = {
      
    }
    this.length = 0;
    this.max = -Infinity;
    this.push = function (...elements) {
      if(elements.length === 1) {
        this.storage[this.length++] = elements;
        if(elements > this.max) this.max = elements;
      }
      for(let i = 0; i < elements.length; i++) {
        this.storage[this.length++] = elements[i];
        if(elements[i] > this.max) this.max = elements[i];
      }
      return this.length;
    },
    this.pop =function (el) {
      this.storage[this.length--] = el;
      return el;
    },
    this.getMax = function () {
      return this.max;
    }
}

module.exports = Stack;