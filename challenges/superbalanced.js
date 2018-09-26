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
  tree = tree.root;
  let countLeft = 0;
  let countRight = 0;
  CRTree = tree;
  CLTree = tree;
  while(CLTree.left) {
    countLeft++
    CLTree = CLTree.left;
  }
  while(CRTree.right) {
    countRight++;
    CRTree = CRTree.right;
  }
  console.log(countLeft)
  console.log(countRight)

  if( (countLeft === countRight) || (countLeft === (countRight+1)) || (countLeft === (countRight-1)) ) {
    return true
  }
}


function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
  var root = this.root;

  if(!root){
    this.root = new BinaryTree(val);
    return;
  }

var currentNode = root;
var newNode = new BinaryTree(val); 

  while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            break;
          }
          else{
            currentNode = currentNode.left;
        }
    }
    else{
        if(!currentNode.right){
            currentNode.right = newNode;
            break;
        }
        else{
            currentNode = currentNode.right;
        }
    }
  }

}

// let tree = new BinarySearchTree;

// tree.push(8)
// tree.push(9)
// tree.push(7)
// tree.push(6)
// tree.push(5)

// console.log(superbalanced(tree));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
