// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

/*Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

*/


class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}


function isBalanced(root) {
  if(!root) return true;
  //the following edge case is included in the above edge case!
  //if(!root.left && !root.right) return true;
  if(Math.abs(treeHeight(root.right)-treeHeight(root.left))>1){
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

function treeHeight(root){
  if(!root) return -1;
  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}


let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(2);
let d = new TreeNode(3);
let e = new TreeNode(3);
let f = new TreeNode(4);
let g = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = f;
d.right = g;

console.log(isBalanced(a));
