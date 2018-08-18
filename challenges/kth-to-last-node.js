/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A'); 1
 * const b = new Node('B'); 2
 * const c = new Node('C'); 3
 * const d = new Node('D'); 4
 * const e = new Node('E'); 5
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
  if(!head){
    return "Not valid list!";
  }

  //Initialize items in list at 1 if head is valid
  let itemsInList = 1;
  let currNode = head;

  if ( head.next === null){
    return "Only one node in list!"
  }

  while( currNode.next !== null){
    itemsInList++;
    currNode = currNode.next;
  }
  
  if( k === 1){
    return currNode.value;
  }
  
  currNode = head;
  for( let i = 1; i < itemsInList-(k-1); i++){
    currNode = currNode.next
  }

  return currNode.value
}

// const a = new Node('A'); 
// const b = new Node('B'); 
// const c = new Node('C'); 
// const d = new Node('D'); 
// const e = new Node('E'); 

// a.next = b; 
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(3,a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
