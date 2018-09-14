/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

// function validBST(tree) {
//   //console.log(tree);
//  let isValid = true;
//   let currTree = tree
//   while (currTree.left){
//     if (currTree.right){
//       isValid = validBST(currTree.right);
//     //  console.log({isValid});
//     }
//
//     if (currTree.value < currTree.left.value){
//       return false;
//       // console.log({isValid});
//     }
//
//     currTree = currTree.left;
//   }
//   currTree = tree;
//   console.log({currTree});
//   while (currTree.right){
//
//     if (currTree.value > currTree.right.value){
//       return false;
//     }
//     if (currTree.left){
//       isValid = validBST(currTree.left);
//       console.log('right', {isValid});
//     }
//
//     currTree = currTree.right;
//   }
//   //console.log({isValid});
//   return isValid;
// }


function validBST(tree) {
  if (tree.right === null && tree.left === null){
    return true
  }
  if (tree.right.value < tree.value && tree.left.value > tree.value){
    return false;
  }
  return validBST(tree.right) && validBST(tree.left)
}

const node1 = new BinaryTree(7);
const node2 = new BinaryTree(9);
const node3 = new BinaryTree(8);
const node4 = new BinaryTree(10);
const node5 = new BinaryTree(4);
const node6 = new BinaryTree(3);
const node7 = new BinaryTree(5);


node1.left = node5;
node1.right = node2;
node5.left = node6;
node5.right = node7;
node2.left = node3;
node2.right = node4;

console.log(validBST(node1));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
