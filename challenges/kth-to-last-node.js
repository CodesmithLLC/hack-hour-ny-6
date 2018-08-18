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
  if(!head || k <= 0) return undefined
  
  //iterate over entire node list to get length;
  let len = 0;
  let node = head;
  while(node) {
    len += 1
    node = node.next
  }
  if(k > len) {
    return undefined
  }

  //iterate over entire node list AGAIN, stopping at length - k;
  let start = head;
  let stop = len - k;
  while(stop) {
    start = start.next
    stop--
  }
  return start.value
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};