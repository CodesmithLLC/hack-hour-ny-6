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
  let currentNode = head;
  //let prevNode = null;

  let vals = [];
  while (currentNode.next !== null){
    //prevNode = currentNode;
    vals.push(currentNode.value);
    currentNode = currentNode.next;
    // accum++
    // console.log({prevNode});
  }
  vals.push(currentNode.value);
//  console.log({vals});
  const index = (vals.length - k);
//  console.log({index});
  const kthVal = vals[index]
//  console.log({kthVal});
  return kthVal;
}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 const f = new Node('F');
 const g = new Node('G');
 const h = new Node('H');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 // e.next = f;
 // f.next = g;
 // g.next = h;

 console.log(kthToLastNode(1, a))
  console.log(kthToLastNode(2, a))
   console.log(kthToLastNode(3, a))
   console.log(kthToLastNode(4, a))
    console.log(kthToLastNode(5, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
