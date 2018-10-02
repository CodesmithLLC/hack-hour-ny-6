/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  //Base Case
  let height = {
    left: 0,
    right: 0
  }

  function _isBalanced(tree, h){

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

  if(Number.isInteger(h) && (tree.left || tree.right)){
    console.log(h);
    h++;
    console.log(h);
  }
  
  //Check both sides of the tree recursively until we reach base case
  //If both sides return true, it is balanced
  return _isBalanced(tree.left, height.left) && _isBalanced(tree.right, height.right) && Math.abs(height.left-height.right) <= 1;
  }

  return _isBalanced(tree);
}

let test = new BinaryTree(5);
test.left = new BinaryTree(4);
test.left.left = new BinaryTree(3);
test.left.left.left = new BinaryTree(2);
test.left.left.left.left = new BinaryTree(1);
test.right = new BinaryTree(6);
test.right.right = new BinaryTree(10);

console.log(superbalanced(test));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
