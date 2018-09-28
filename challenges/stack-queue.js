/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
   this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (item) {
  this.storage[this.length] = item;
  this.length++
//  console.log(this.length);
  return this.storage
}

Stack.prototype.pop = function () {
  deletedItem = this.storage[this.length - 1]
  delete this.storage[this.length - 1];
  this.length--
  return deletedItem;
}

/**
* Queue Class
*/


function Queue() {
  this.stack_one = new Stack();
  this.stack_two = new Stack();
}

Queue.prototype.push = function (item) {
  //console.log(this.stack_one);
  if (this.stack_one.length === 0 && this.stack_two.length === 0){
    this.stack_one.push(item)
    return this.stack_one
  } else if (this.stack_one.length > 0) {
    for (let i=0; i < this.stack_one.length; i++){
      const poppedItem = this.stack_one.pop();
      console.log({poppedItem});
      this.stack_two.push(poppedItem);
    }
  //  console.log('stack two', this.stack_two);
    this.stack_one.push(item);
    //console.log(this.stack_one);
    //console.log(this.stack_two);
    for (let i=0; i < this.stack_two.length; i++){
      const poppedItem = this.stack_two.pop();
      this.stack_one.push(poppedItem);
    }
  }
  return this.stack_one
}

const stack = new Stack();
const queue = new Queue();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log(queue.push(1));
console.log(queue.push(2));
console.log(queue.push(3));
console.log(queue.push(4));


module.exports = {Stack: Stack, Queue: Queue};
