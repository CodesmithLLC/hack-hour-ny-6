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
  this.max = [];
}

Stack.prototype.push = (value) => {
  this.storage[this.length] = value;
  if( this.max.length === 0) {
    this.max[0] = value;
  } else if ( value >= this.max[this.max.length - 1]){
    this.max.push(value);
  }
  this.length++;
  return this.length;
}

Stack.prototype.pop = () => {
  if( this.length === 0) return;

  let result = this.storage[this.length - 1];

  delete this.storage[this.length - 1 ];
  
  if( result  === this.max[this.length - 1]) {
    this.max.pop();
  }
  return result;
}

Stack.prototype.getMax = () => {
  return this.max[this.max.length - 1];
}

module.exports = Stack;