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
  //create previous node
  let l3 = new Node(null);
  let prev = l3;
  //check if null for each, set prev
  while(l1 !== null && l2 !== null){
    if(l1.value <= l2.value){
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  if(l1 === null){
    prev.next = l2;
  }
  if(l2 === null){
    prev.next = l1
  }
  return l3.next;

};

module.exports = {Node: Node, zip: zip};
