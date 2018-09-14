/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}
Stack.prototype.push = function(value){
    this.storage[this.index] = value;
    this.index++;
    return this.storage[this.index];
};
Stack.prototype.pop = function() {
   if (this.index === 0) {
        return undefined;
    }
    //if not empty, decrease index size
    this.index--;
    //create variable to store a new stack with 1 less index
    let popped = this.storage[this.index];
    //destroy previous stack
    delete this.storage[this.index];
    //return new stack
    return popped;
};


/**
* Queue Class
*/


function Queue() {
  this.inside = new Stack();
  this.outside = new Stack();
}

Queue.prototype.enqueue = function(value) {
  return this.inside.push(value);
}

Queue.prototype.dequeue = function(){
  if(this.outside.index === 0){
    if(this.inside.index === 0 ) return undefined;
    while(this.inside.index > 0){
    // console.log('inside this.inside',this.inside.index)
      this.outside.push(this.inside.pop());
    // console.log('inside this.outside',this.outside)
    }
    return this.outside.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
