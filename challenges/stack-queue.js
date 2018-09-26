/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  let stack = [];
  stack.add = function(x) {
    stack[stack.length] = x;
  }
  stack.pop = function() {
    let val = stack[stack.length - 1];
    stack.splice(-1, 1)
    return val;
  }
  return stack;
}


/**
* Queue Class
*/


function Queue(s1,s2) {
  let queue = s1;
  while(queue.length > 0) {
    console.log(queue)
    if(s2.length > 0) {
      queue.unshift(s2.pop())
    }
    queue.splice(-1,1);
  }
}

module.exports = {Stack: Stack, Queue: Queue};