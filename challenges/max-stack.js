/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {}
  this.length = 0
  this.highest = -Infinity
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value
  this.highest = value > this.highest ? value : this.highest
  this.length += 1
  return this.length
}

Stack.prototype.pop = function() {
  if (this.length > 0) {
    const popped = this.storage[this.length - 1]
    delete this.storage[this.length - 1]
    this.length -= 1
    return popped
  }
  return null
}

Stack.prototype.getMax = function() {
  return this.highest
}

// let stack = new Stack()
// stack.push(0)
// stack.push(1)
// stack.push(20)
// stack.push(3)
// console.log({ push: stack.push(4), stack })
// console.log({ pop: stack.pop(), stack })
// console.log({ getMax: stack.getMax() })

module.exports = Stack
