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
  this.value = val
  this.next = null
}

function addLinkedList(l1, l2) {
  if (!l1 && !l2) return new Node(null)

  let newHead

  if (!l1) {
    newHead = new Node(l2.value)
  } else if (!l2) {
    newHead = new Node(l1.value)
  } else {
    newHead = new Node(l1.value + l2.value)
  }

  let newNode = newHead
  let rem = 0

  while (l1 || l2 || !rem) {
    if (!l1) {
      newNode.next = new Node(l2.value)
      l2 = l2.next
    } else if (!l2) {
      newNode.next = new Node(l1.value)
      l1 = l1.next
    } else if (!l1 && !l2) {
      newNode.next = new Node(rem)
      rem = 0
    } else {
      newNode.next = new Node(getSingleDigit(l1.value, l2.value))
      rem = getTensPlace(l1.value, l2.value)
      l1 = l1.next
      l2 = l2.next
    }
  }

  return newHead

  //-------

  function getSingleDigit(a, b) {
    let str = a + b + ''
    return str.slice(str.length - 1) - 0
  }

  function getTensPlace(a, b) {
    let str = a + b + ''
    return str.length === 2 ? str.slice(0, 1) - 0 : 0
  }
}

module.exports = { Node: Node, addLinkedList: addLinkedList }
