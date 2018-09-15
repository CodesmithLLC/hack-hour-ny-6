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

const treeArr = [];

function validBST(tree) {
    if (tree.left) {
        validBST(tree.left);
    }

    treeArr.push(tree.value);

    if (tree.right) {
        validBST(tree.right);
    }
    return treeArr;
}

const bt = new BinaryTree(7);
bt.left = new BinaryTree(5);
bt.right = new BinaryTree(9);
bt.left.left = new BinaryTree(4);
bt.left.right = new BinaryTree(6);
bt.right.left = new BinaryTree(8);
bt.right.right = new BinaryTree(10);

console.log(validBST(bt));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
