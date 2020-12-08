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

// In our brute-force solution, we traverse our tree, finding the depth at each node using a helper getDepth function, which travels all the way to the leaf nodes of the tree and returns a depth. We then make recursive calls to make sure that both the left and right sides of the tree are also balanced. getDepth takes O(n) time, where n is the number of nodes, and isBalanced takes O(n) time, since we must call it once for each node. This leads to a total time complexity of O(n**2).

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



// We can do better by avoiding repetitive calls to isBalanced. Rather than checking all the way to the leaf nodes at each point in our tree, we can simply make it to the leaf nodes first and return a depth as we traverse back up. In this solution, we use a helper function isBalancedNode which returns an object containing both whether a node is balanced, and the depth. In our base case, we find a null node which returns true with a depth of -1. In our recursive step, we check the left and right nodes. If either is unbalanced, or if the difference between their depths is more than one, we set the isBalanced property of the returned object to false. We call this helper function from our main function and then call the isBalanced property of the object to get our result. This solution only needs to visit every node once, so it takes only O(n) time with O(1) extra space.

function isBalanced2 (node) {
  return isBalancedNode(node).isBalanced;
}

function isBalancedNode (node) {
  if (!node) {
    return {isBalanced: true, depth: -1};
  }

  let left = isBalancedNode(node.left);
  let right = isBalancedNode(node.right);

  if (left.isBalanced && right.isBalanced &&
        Math.abs(left.depth - right.depth) <= 1) {
    return {isBalanced: true, depth: Math.max(right.depth, left.depth) + 1};
  } else {
    return {isBalanced: false, depth: 0};
  }
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
console.log(isBalanced2(a));
