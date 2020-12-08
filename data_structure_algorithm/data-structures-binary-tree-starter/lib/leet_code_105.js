// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/* Given preorder and inorder traversal of a tree, construct the binary tree.

Note: Important::::
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  class BinaryTree{
    constructor(){
      this.root = null;
    }

  }
  let tree = new BinaryTree();
  if(preorder.length===0){
    tree.root = null;
    return tree.root;
  }
  tree.root = new TreeNode(preorder[0]);
  for(let i=0; i<inorder.length;i++){
    if(inorder[i]===preorder[0]){
      //build the left subtree
      tree.root.left = buildTree(preorder.slice(1,i+1), inorder.slice(0,i));
      //then build the right subtree:
      tree.root.right = buildTree(preorder.slice(i+1), inorder.slice(i+1));
    }
  }
  return tree.root;
}


let preorder = [3,9,20,15,7];
let inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder));
