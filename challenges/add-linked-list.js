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

  let n1 = l1;
  let n2 = l2;

  // let firstDigit = n
  let sumList = null
  let currNode = null
  let carry = 0

  while (n1 !== null){
    let add = 0
    if (carry){
      add = n1.value + n2.value + carry;
      carry = 0
    } else {
      add = n1.value + n2.value
    }

    if (add > 9){
      carry = 1;
      const newNode = new Node(add-10);
      if (currNode.value){
        currNode.next = newNode
        currNode = currNode.next
      } else {
        currNode = newNode;
        sumList = newNode
      }
    } else {
      const newNode = new Node(add);

      if (currNode){
        // const newNode = new Node();
        currNode.next = newNode;
        currNode = currNode.next;
      } else {
        // const newNode = new Node();

        currNode = newNode;
        sumList = newNode;
      }

    }
    console.log({currNode});
    n1 = n1.next;
    n2 = n2.next
  }
  return sumList
}

const n1 = new Node(2);
n1.next = new Node(1);
n1.next.next = new Node(5);

const n2 = new Node(5);
n2.next = new Node(9);
n2.next.next = new Node(2);

console.log({n1});
console.log({n2});

console.log(addLinkedList(n1, n2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
