/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.length = 0;

  // this.push = function (ele) {
  //   this.stack[this.length++] = ele;
  //   return this.length;
  // };

  this.push = (ele) => {
    this.stack[this.length++] = ele;
    return this.length;
  };

  this.pop = () => {
    // return the element that was just removed
    const temp = this.stack[--this.length];
    delete this.stack[this.length];
    // console.log('stack: ', this.stack, '\nlength: ', this.length);
    return temp;
  };

  this.getMax = () => {
    // return the largest value currenly in the stack in O(1) time.
    // O(1) -> basically picking out from the object....
    // get the values into arrays, and find the max?
    // console.log(Object.values(this.stack));
    return Math.max(...Object.values(this.stack));
  };

}

module.exports = Stack;

// let test = new Stack();
// test.push(1);
// test.push(5);
// test.push(3);
// console.log(test.stack);
// test.pop();
// test.push(10);
// test.push(50);
// test.push(30);
// console.log(test.stack);
// console.log(test.getMax());