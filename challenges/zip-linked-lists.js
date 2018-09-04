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
  let head = JSON.parse(JSON.stringify(l1));
  let tmp = l1.next;
  let curr = head;

  while( tmp !== null || l2 !== null){
      let node = l2;
      // assign curr.next the current node on the right;
      curr.next = node;
      // reassign node on the right to its next value
      l2 = l2.next;
      //reassign curr to its next value
      curr = curr.next;
      // assign the tmp value to curr.next
      curr.next = tmp;
      // re-assign curr to it next value
      curr = curr.next;
      // re-assign tmp to its next value
      if( tmp !== null) {
        tmp = tmp.next
      } else {
        tmp = null;
      }
  }
  return head;
};

let node1 = 
{value: 3,
 next : {
   value: 2,
   next: {
     value: 1,
     next: null
   }
 }}

 let node2 = 
{value: 10,
 next : {
   value: 9,
   next: {
     value: 8,
     next: null
   }
 }}

console.log(zip( node1, node2))

module.exports = {Node: Node, zip: zip};
