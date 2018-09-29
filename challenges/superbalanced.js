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
  return balancedHeight(node) > -1 ? true : false;

  function balancedHeight(node) {
    if (node.value === null) return 0;
    let h1 = balancedHeight(node.right);
    let h2 = balancedHeight(node.left);

    if (h1 == -1 || h2 == -1) return -1;
    if (Math.abs(h1 - h2 > 1)) return -1;
    if (h1 > h2) return h1 + 1;
    return h2 + 1;
  }
}
// private class Node {
//   private int value;
//   private Node right;
//   private Node left;
// }

// public boolean isBalanced(Node n) {
//   if (balancedHeight(n) > -1) return true;
//   return false;
// }

// public int balancedHeight(Node n) {
//   if (n == null) return 0;
//   int h1 = balancedHeight(n.right);
//   int h2 = balancedHeight(n.left);

//   if (h1 == -1 || h2 == -1) return -1;
//   if (Math.abs(h1 - h2) > 1) return -1;
//   if (h1 > h2) return h1 + 1;
//   return h2 + 1;
// }

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
