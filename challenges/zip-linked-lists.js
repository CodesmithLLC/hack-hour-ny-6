/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let currentNode;
  let l1Node = l1;
  let l2Node = l2;

  // console.log({l1Node});
  // console.log({l2Node});
  // let nextNode
  let nodeCount = 0;

  while (l1Node.next !== null && l2Node.next !== null){
    // console.log({nodeCount});
    // console.log({currentNode});
    if (nodeCount === 0){
      currentNode = l1Node;
      // console.log({currentNode});

    } else {
      if (currentNode.value === l1Node.value) {
          currentNode.next = l2Node;
          l2Node = l2Node.next;
          // break;
      } else {
          currentNode.next = l1Node;
          l1Node = l1Node.next;
          // break;
        }
    }
      nodeCount++
    }
    // currentNode.next = currentL1Node;
  return currentNode;
  }
  // let nodeCount = 0;
  // while (currentNode.next !== null) {
  //   console.log({currentNode});
  //   console.log({nodeCount});
  //   currentNode = currentNode.next;
  //   nodeCount++
  // }



let node = new Node(0);
let node1Curr;
for (let i=0; i < 5; i++){
  //console.log({node});
  if (i===0){
    node.next = new Node(i+1);
    node1Curr = node.next;
  } else {
    node1Curr.next = new Node(i+1);
    node1Curr = node1Curr.next
  }
}

// while (node.next !== null) {
//   console.log(node);
//   node = node.next;
// }

let node2 = new Node(5);
let node2Curr;
//let currentNode = node;
for (let i=0; i < 5; i++){
  if (i===0){
    node2.next = new Node(i+1);
    node2Curr = node2.next;
  } else {
    node2Curr.next = new Node(i+1);
    node2Curr = node2Curr.next
  }
  // node2.next = new Node(i+5);
  // node2 = node2.next
}

// while (node2.next !== null) {
//   console.log(node2);
//   node2 = node2.next;
// }

// console.log({node});
// console.log({node2});
console.log({node1Curr});

let outputNode = zip(node, node2);

while (outputNode.next !== null) {
  console.log({outputNode});
  outputNode = outputNode.next;
}

console.log('output:', zip(node, node2));

module.exports = {Node: Node, zip: zip};
