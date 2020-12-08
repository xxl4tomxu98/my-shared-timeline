// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/*  Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

*/

const {TreeNode, BST} = require("./bst.js");

function sortedArrayToBST(nums) {
  if(nums.length===0) return null;
  let medium = Math.floor(nums.length/2);
  let node = new TreeNode(nums[medium]);
  let tree = new BST();
  tree.root = node;
  // for(let i=0;i<medium;i++){
  //   tree.insertIter(nums[i]);
  // }
  // for(let i=medium+1;i<nums.length;i++){
  //   tree.insertIter(nums[i]);
  // }
  // randomly inserted tree can't gurantee balance
  // recursion of left-right all from the middle is key
  tree.root.left = sortedArrayToBST(nums.slice(0,medium));
  tree.root.right = sortedArrayToBST(nums.slice(medium+1));
  return tree.root;
}


let sortedArr = [-10,-3,0,5,9];
console.log(sortedArrayToBST(sortedArr));

let sortedArr1 = [0,1,2,3,4,5];
console.log(sortedArrayToBST(sortedArr1));
