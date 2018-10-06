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
  let LinkedListIndexed = { 0: { head } };
  let index = 0;

  for (let node in head) {
    while (head.next !== null) {
      index++;
      LinkedListIndexed[index] = Object.assign(head);
      head = head.next;
    }
  }
  return LinkedList[index - k].next.value;
}

function kthToLastNodeOne(k, head) {
  // check to see if k is an integer, k < 1 and the head being turned in is falsy
  if (!Number.isInteger(k) || k < 1 || !head) return;
  // create an array to store node values
  const nodeValues = [];
  // traverse through linked list until we've reached the end
  while (head !== null) {
    // push each value to our nodeValues array
    nodeValues.push(head.value);
    // adjust head pointer to next node in LL
    head = head.next;
  }
  // return the kth node by subtracting k from the length of our array
  return nodeValues[nodeValues.length - k];
}
module.exports = { Node: Node, kthToLastNode: kthToLastNode };
