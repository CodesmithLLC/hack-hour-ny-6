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
  let list = new Node(0);
  let head = list;
  let sum = 0;
  let carryNum = 0;

  while(l1 !== null || l2 !== null || sum > 0){
    if(l1 !== null){
      sum = sum + l1.value;
      l1 = l1.next;
    }
    if(l2 !== null){
      sum = sum + l2.value;
      l2 = l2.next;
    }
    if(sum >= 10){
      carryNum = 1;
      sum = sum - 10;
    }
    head.next = new Node(sum);
    head = head.next;
    sum = carryNum;
    carryNum = 0;
  }
  return list.next;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
