/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function Node(value){
  this.val = value;
  this.next = null;
}

function deleteDups(head) {
  let currNode = head;
  const nodes = {};
  nodes[head.val] = head.val
  while (currNode.next){

    if (nodes[currNode.next.val] === 'value'){
      currNode.next = currNode.next.next
    } else {
      nodes[currNode.next.val] = 'value';
    }

      // currNode = currNode.next
  }
  console.log(nodes);
  console.log(head);
}

const node = new Node(1);

node.next = new Node(3);

const currNode = node.next;

currNode.next = new Node(3)

console.log(node);
console.log(deleteDups(node));

module.exports = deleteDups;
