/**
 * Create a stack.Then create a queue using two stacks.
 */

 // add methods to prototypes

function Stack() {
    this.storage = {
      length = 0,
      array = []
    }
  
    this.push = function (el) {
      this.storage[length] = el;
      this.storage.length++;
      return this.storage.length;
    }
  
    this.pop = function () {
      if(this.storage.length === 0) {
        return undefined;
      }
      let lastItem = this.storage[length - 1];
      delete this.storage[length - 1];
      this.storage.length--;
      return lastItem;
    }
  
  }

/**
* Queue Class
*/


function Stack() {
  this.index = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  //add value to storage at index
  this.storage[this.index] = value;
  //increase and return index
  this.index += 1;
  return this.index;
}

Stack.prototype.pop = function() {
  //create temp variable for the popped value
  let popped = this.storage[this.index - 1];
  //delete last key/value pair from storage
  delete this.storage[this.index - 1];

  //check to make sure index is greater than 0 before decreasing
  if (this.index > 0) this.index -= 1;

  //return temp variable
  return popped;
}

/**
* Queue Class
*/

function Queue() {
  //initialize in and out stacks
  this.inbox = new Stack();
  this.outbox = new Stack();
}

Queue.prototype.enqueue = function(value) {
  //push value to in stack
  return this.inbox.push(value);
}

//dequeue returns first value in queue
Queue.prototype.dequeue = function() {
  //if no values in out stack
  if (this.outbox.index === 0) {
      //if no values in in stack, return undefined
      if (this.inbox.index === 0) return undefined;
      // otherwise, push all values from in to out while there's values in the in stack
      while (this.inbox.index > 0) {
          this.outbox.push(this.inbox.pop());
      }
  }
  //if there's values in out stack, pop last value
  if (this.outbox.index > 0) this.outbox.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
