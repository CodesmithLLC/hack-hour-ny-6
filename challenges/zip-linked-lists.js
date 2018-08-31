/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let count = Object.keys(l1).length;
  l3 = {};
  let holder1 = {};
  let holder2 = {};
  while(l1.next !== undefined && l2.next !== undefined){
    if(count % 2 === 0) {
      l3[value] = l1.value;  
      l3[next] = l2.next;
      count--;
    }
    if(count % 2 === 1) {
      l3[value] = l2.value;  
      l3[next] =  l1.next;
      count--;
    }
    l1.next();
    l2.next()
  }
};

let a = {
  val = 4,
  next = {
    val = 5,
    next = {
      val = 6,
      next = null
    }
  }
};

let b = {
  val = 1,
  next = {
    val = 2,
    next = {
      val = 3,
      next = null
    }
  }
}
module.exports = {Node: Node, zip: zip};
