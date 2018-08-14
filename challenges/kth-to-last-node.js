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
  let prev = head;
  let curr = prev.next;
  let counter = 0;
  let count = {};
  while(prev.next !== null) {
    count[counter++] = prev.value;
    prev = curr;
    curr = prev.next;
    if(prev.next === null) {
      count[counter] = prev.value;
    }
  }
  let reverseCount = Object.keys(count).length;
  let indexWanted = reverseCount - k;
  if(reverseCount < k) {
    return 'invalid index request -- index is longer then items in list'
  }
  // console.log(reverseCount)
  for(let prop in count) {
    if(prop == indexWanted) {
      return count[prop];
    }
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
