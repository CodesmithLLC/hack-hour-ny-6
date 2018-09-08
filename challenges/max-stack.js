/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from 
 * // the stack in O(1) time.
 */

function Stack() {
  this.count = 0;
  this.max = null
  this.storage = {};
}

Stack.prototype.push = function(val) {
  if (val > this.max) {this.max = val}
  this.storage[this.count] = val
  this.count++
  return this.count 
}

Stack.prototype.pop = function() {
  if (this.count === 0) return
  --this.count
  return this.storage[this.count];
}

Stack.prototype.getMax = function(value) {
  return this.max
}


// module.exports = Stack;