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
  //return null if there is no head
  if(head === null || k < 1){
    return null;
  }
  //establish pointer & counter
  let current = head;
  let counter = 0;
  while (current.next !== null) {
    current = current.next;
    counter +=1;
  }
  //# of nodes = counter + 1
  current = head;
  //iterate through list & set current.next
  for (let i = 0; i <= counter - k; i++) {
    current = current.next;
  }
  return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
