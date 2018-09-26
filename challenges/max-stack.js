/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(body) {
  // body...
  body.max = -Infinity;
  body.min = Infinity;
  if(body.length > 0) {
    for(let i = 0; i < body.length; i++) {
      if(body[i] > body.max) body.max = body[i];
      if(body[i] < body.min) body.min = body[i];
    }
  }
  
  body.addPush = function(val) {
    if(val > body.max) body.max = val;
    if(val < body.min) body.min = val;
    body[body.length] = val;
    return body.length;
  };

  body.removePop = function() {
    let removed = body[body.length - 1];
    body.splice(-1, 1)
    if(removed === body.max || removed === body.min) {
      for(let i = 0; i < body.length; i++) {
        if(body[i] > body.max) body.max = body[i];
        if(body[i] < body.min) body.min = body[i];
      }
    }
    return removed;
  }

  body.maxNum = function() {
    return body.max;
  }

  body.minNum = function() {
    return body.min;
  }
  return body
}

// module.exports = Stack;


let newStack = Stack([100,3,5]);
newStack.addPush(1)
newStack.addPush(5)
newStack.addPush(54)
newStack.addPush(3)
newStack.addPush(9)
newStack.addPush(200)
newStack.addPush(-100)

newStack.removePop()
newStack.removePop()
newStack.removePop()
newStack.removePop()

console.log(newStack)

