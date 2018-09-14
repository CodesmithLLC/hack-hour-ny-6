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


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
