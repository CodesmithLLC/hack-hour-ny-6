/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Node(val){
  this.value = val;
  this.next = null;
}

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
  this.max = 0;
  //this.maxList = new Node(this.max);
  // this.currentMax = null;

  // console.log(this.index);
}

Stack.prototype.push = function(value) {
  // console.log({this});
  // console.log(this.index);
  // if (value > this.maxList.value){
  //   this.maxList.next = new Node(value);
  // }
  if (value > this.max){
    this.max = value;
  }

  this.storage[this.index] = value;
  this.index++
  return this.index;
}

Stack.prototype.pop = function() {
  const deletedItem = this.storage[this.index - 1];

  // console.log({deletedItem});
  delete this.storage[this.index - 1]
  this.index--;
  if (deletedItem === this.max) {
    this.max = 0;
    // console.log(this.max);
    for (let val in this.storage){
      if (this.storage[val] > this.max){
        this.max = this.storage[val];
      }
    }
  }
  // console.log(this.max);
  // console.log(this.storage);
  return deletedItem;
}

Stack.prototype.getMax = function() {
  return this.max
}

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(8))
console.log(stack.push(5))
console.log(stack.push(2))
console.log(stack.push(9))
console.log(stack.pop())
// console.log(stack.push(2))
console.log(stack.getMax());

module.exports = Stack;
