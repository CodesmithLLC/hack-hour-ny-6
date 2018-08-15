/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 */

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")

a.next = b
b.next = c
c.next = d
d.next = e

console.log(kthToLastNode(3, a)) // -> returns 'D' (the value on the second to last node)
console.log({ Node: Node, kthToLastNode: kthToLastNode(3, a) })

function Node(val) {
  this.value = val
  this.next = null
}

function kthToLastNode(k, head) {
  if (k >= 0) {
    let counter = 0
    let memo = {}
    let node = head

    while (node !== null) {
      if (counter >= k) {
        memo = { ...memo, [counter]: node.value }
        // memo[counter] = node.value
      }
      node = node.next
      counter++
    }

    const keys = Object.keys(memo)

    if (keys.length > 1) {
      return memo[keys[keys.length - 2]]
    }

    return null
  }

  return null
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode }
