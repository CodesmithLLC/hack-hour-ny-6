/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null
  this.tail = null
}

function Node(val) {
  this.val = val
  this.next = null
  this.prev = null
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val, node = this.tail) {
  if (!this.head) return (this.head = this.tail = new Node(val))
  const newNode = new Node(val)
  newNode.previous = this.tail
  return (this.tail = node.next = newNode)
}

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val, node = this.head) {
  if (!node) return null
  if (node.val === val) {
    if (node === this.head && this.head === this.tail) return null
    if (node === this.head) {
      this.head = node.next
      this.head.previous = null
      return node
    }
    if (node === this.tail) {
      this.tail = node.previous
      this.tail.next = null
      return node
    }
    node.next.previous = node.previous
    node.previous.next = node.next
    return node
  }
  return this.remove(val, node.next)
}

LinkedList.prototype.toArray = function(node = this.head, acc = []) {
  if (!node) return acc
  return this.toArray(node.next, [...acc, node.val])
}

module.exports = LinkedList
