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

function deleteDups(head) {
  if (!head || !head.next) return
  if (head.value === head.next.value) return removeDup(head, head.next)

  cycleThrough(head, null, head.next)

  function cycleThrough(tortoise, slowHare, fastHare) {
    if (tortoise === fastHare) return
    if (tortoise.value === fastHare.value) return removeDup(slowHare, fastHare)
    if (!fastHare.next) return cycleThrough(tortoise.next, head, head.next)
    if (!fastHare.next.next) return cycleThrough(tortoise.next, null, head)
    if (!tortoise.next) {
      if (!fastHare.next) return cycleThrough(head, head, head.next)
      if (!fastHare.next.next) return cycleThrough(tortoise.next, null, head)
      return head, fastHare.next, fastHare.next.next
    }
  }

  function removeDup(previous, current) {
    if (!current.next) {
      previous.next = null
    } else {
      previous.next = current.next
      current = null
    }
    return
  }
}

function LinkedList() {
  this.head = null
}
function Node(value) {
  this.value = value
  this.next = null
}
LinkedList.prototype.toArray = function(node = this.head, acc = []) {
  if (!node) return acc
  return this.toArray(node.next, [...acc, node.value])
}

const list = new LinkedList()
list.head = new Node('a')
list.head.next = new Node('b')
list.head.next.next = new Node('c')
list.head.next.next.next = new Node('b')
list.head.next.next.next.next = new Node('d')
list.head.next.next.next.next.next = new Node('e')

console.log(list.toArray())
deleteDups(list.head)
console.log(list.toArray())

module.exports = deleteDups
