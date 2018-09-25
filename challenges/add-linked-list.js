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

let temp = 0;
let l3 = new Node();

function addLinkedList(l1, l2) {
  if (l1 === null || l2 === null) {
    while (l1 !== null || l2 !== null) {
      l3.next = l1 + l2
    }
    return;
  }
  // add l1 to l2 and temp, push to temp
  temp = l1 + l2 + temp;

  // if greater than 9, push temp - 10 to l3
  if (temp > 9) {
    l3 = l1 + l2 - 10;
  }

  // call addLinkedList
  addLinkedList(l1.next, l2.next);
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
