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

function validBST(tree) {
  //Base Case
  if(tree === null) return true;

  //If current tree has a tree node to its left, check if it is balanced
  //If not return false
  if(tree.left !== null){
    if(tree.value < tree.left.value) return false
  }

  //If current tree has a tree node to its right, check if it is balanced
  //If not return false
  if(tree.right !== null){
    if(tree.value > tree.right.value) return false
  }
  
  //Check both sides of the tree recursively until we reach base case
  //If both sides return true, it is balanced
  return validBST(tree.left) && validBST(tree.right);
}

function validBST_2(treeValue, leftTree, rightTree) {
  //Base Case
  if(treeValue === null && rightTree === null && leftTree === null) return true;
  if(treeValue < left) return false;
  if(treeValue > right) return false;

  return validBST_2(leftTree, leftTree.left, leftTree.right) && validBST_2(rightTree, rightTree.left, rightTree.right)
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

let test = new BinaryTree(5);
test.left = new BinaryTree(4);
test.left.left = new BinaryTree(3);
test.right = new BinaryTree(6);

console.log(validBST(test));
validBST_2(tree.value, tree.left, tree.right);