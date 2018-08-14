/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // i would need to travrse through the linked list
  // using a while loop -> condition: while (a.next !== null)
  // but doens't work
  // FIXED: i need to change the head to the next
  //
  // need a counter to keep track of where we are in the start of the while loop
  let counter = 0;

  // traverse through the node
  while (head.next !== null) {
    // when the counter is equal to the position of the node
    if (counter === k) {
      return head.next.value; // return the next value of the node
    }

    // this will always check the while loop condition
    head = head.next;
    counter++; // increment the counter when the head is assigned to the next
  }
  return undefined; // return undefined if nothing is found
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
