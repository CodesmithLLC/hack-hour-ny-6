/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let l1num = '';
  let l2num = '';
  let result = Number(l1num) + Number(l2num);

  while (l1 !== null){
    l1num += l1.value;
    l1 = l1.next
  }
  while(l2 !== null){
    let result = Number(l1num) + Number(l2num);
    l2num += l2.value;
    l2 = l2.next
  }

  let list = new Node(result[0]);
  result.spl

  console.log(result);
}

let testL1 = new Node(5);
testL1.next = new Node(5);
testL1.next.next = new Node(5);
 
let testL2 = new Node(2);
testL2.next = new Node(2);
testL2.next.next = new Node(2);

addLinkedList(testL1, testL2)


module.exports = {Node: Node, addLinkedList: addLinkedList};
