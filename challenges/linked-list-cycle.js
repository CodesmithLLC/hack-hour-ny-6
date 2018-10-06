/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
};

function hasCycle(linkedlist) {
  if (linkedlist) {
    return findCycle(linkedlist, linkedlist);
  }
  return false;
}

function findCycle(start, curr) {
  if (curr.next === start) {
    return true;
  }
  if (!curr.next) {
    if (start.next) {
      return findCycle(start.next, start.next);
    }
    return false;
  }
  return findCycle(start, curr.next);
}

// Push Seen Nodes into Array
//Bad: inefficient

function hasCycle(linkedlist) {
  if (linkedlist) {
    var curr = linkedlist;
    var nodes = [];
    while (curr) {
      for (var i = 0; i < nodes.length; i++) {
        if (curr === nodes[i]) {
          return true;
        }
      }
      nodes.push(curr);
      curr = curr.next;
    }
  }
  return false;
}

// Add Nodes to HashSet
// Bad: JavaScript forces keys into strings and nodes look like '[object Object]'
// Possible Fix: override toString method, make HashSet/good hash function

function hasCycle(linkedlist) {
  if (linkedlist) {
    var curr = linkedlist;
    var nodes = {};
    while (curr) {
      if (curr in nodes) {
        return true;
      }
      nodes[curr] = true;
      curr = curr.next;
    }
  }
  return false;
}

// Add "visited" Property
// Bad: taint the objects
// Possible Fix: delete the properties you added

function hasCycle(linkedlist) {
  if (linkedlist) {
    var curr = linkedlist;
    while (curr) {
      if (curr.visited) {
        return true;
      }
      curr.visited = true;
      curr = curr.next;
    }
  }
  return false;
}

// "Tortoise & Hare"
function hasCycle(linkedList) {
  if (linkedList && linkedList.next) {
    return findCycle(linkedList, linkedList.next);
  }
  return false;
}

function findCycle(tortoise, hare) {
  if (tortoise === hare) {
    return true;
  }
  return (
    hare !== null &&
    hare.next !== null &&
    findCycle(tortoise.next, hare.next.next)
  );
}

module.exports = { Node: Node, hasCycle: hasCycle };
