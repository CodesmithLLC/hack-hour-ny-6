/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value){
    this.storage[this.length++] = value;
}

Stack.prototype.pop = function(){
  if(this.length === 0) return;
  let value = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return value;
}
/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 - new stack();
}

Queue.prototype.enqueue = function(value){
  this.stack1.push(value);
}

Queue.prototype.dequeue = function(){
  if(this.stack1 === 0) return;

  while(this.stack1.length !== 0){
    let value = this.stack1.pop();
    this.stack2.push(value);
  }

  return this.stack2.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
