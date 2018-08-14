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
  let counter = 0;
  let node = head;

  // go over whole Llist, get length
  while(node.next !== null) {
    node = node.next;
    counter++
    //console.log("counter = ", counter);
  }

  let nodeToGet = counter - k + 1; // distance from head to node k

  // go back over Llist, get value of node k
  node = head;

  while(nodeToGet) {
    node = node.next;
    nodeToGet--;
    //console.log("node to get = ", nodeToGet);
  }
  // return node
  return node.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
