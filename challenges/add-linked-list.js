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
  let curr = new Node(null); // will be the returned list, val doesn't matter
  const head = curr; // keep track of the head to ultimately return its .next
  let sum = 0;

  while (l1 || l2 || sum) {
    // we check sum in case of carryovers from end of lists
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }

    // add the new Node to the returned list, modulo 10 will give us
    // either the number itself or the number minus 10 if > 9
    curr.next = new Node(sum % 10);
    curr = curr.next; // move to next digit in the list we're making
    sum = sum > 9 ? 1 : 0; // start the next iteration with a sum of 1 if we need to carry a 1
  }
  return head.next;
}

// recursive
function addLinkedList(l1, l2, carryover) {
  // check if there is any values to be added to list, if not return null
  if (!l1 && !l2 && !carryover) return null;

  // initialize sum to the carryover or 0
  let sum = carryover || 0;

  // if l1 exists, add value to sum
  if (l1) sum += l1.value;

  // if l2 exists, add value to sum
  if (l2) sum += l2.value;

  // set result to a new node with the sum
  const result = new Node(sum % 10);

  // if l1 or l2 exists, set the rest of the list to a recursive call
  if (l1 || l2) {
    const rest = addLinkedList(
      l1 ? l1.next : null,
      l2 ? l2.next : null,
      sum >= 10 ? 1 : 0
    );

    // set next in the result to the rest
    result.next = rest;
  }
  return result;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
