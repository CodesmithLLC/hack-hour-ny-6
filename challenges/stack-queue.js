/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack(...args) {
  this.storage = {}
  this.length = 0

  args.forEach(arg => {
    this.storage[this.length] = arg
    this.length += 1
  })
}
Stack.prototype.push = function(value) {
  this.storage[this.length] = value
  this.length += 1
}
Stack.prototype.pop = function() {
  if (this.length === 0) return null
  const popped = this.storage[this.length - 1]
  delete this.storage[this.length - 1]
  this.length -= 1
  return popped
}

/**
 * Queue Class
 */

function Queue() {
  this.stackEnqueue = new Stack()
  this.stackDequeue = new Stack()
}
Queue.prototype.reverse = function(stack) {
  const newStack = new Stack()
  for (let i = stack.length - 1; i >= 0; i--) {
    newStack.push(stack.storage[i])
  }

  return newStack
}
Queue.prototype.enqueue = function(value) {
  this.stackEnqueue.push(value)
  this.stackDequeue = this.reverse(this.stackEnqueue)
}
Queue.prototype.dequeue = function() {
  if (this.stackDequeue.length === 0) {
    return null
  }
  const popped = this.stackDequeue.pop()
  this.stackEnqueue = this.reverse(this.stackDequeue)
  return popped
}

// const queue = new Queue()

// queue.enqueue('aa')
// queue.enqueue('bb')
// queue.enqueue('cc')
// queue.enqueue('dd')

// console.log({ dequeued: queue.dequeue() })
// console.log(queue)

module.exports = { Stack: Stack, Queue: Queue }
