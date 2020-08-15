class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// write a function that takes in a Binary Tree Root Node and traverses the
// tree in breadth first fashion and returns an array containing the path
// to the target value.

// if the target does not exist in the tree or the tree is empty, return null

function breadthFirstSearch(root, target) {
  if(!root){
    return null;
  }
  let path = [];
  let queue = [root];
  while(queue.length>0){
    let node = queue.shift();
    path.push(node.val);
    if(node.val === target){
      return path;
    } else if(node.left && !node.right){
      queue.push(node.left);
    } else if(node.right && !node.left){
      queue.push(node.right);
    } else if (node.left && node.right){
      queue.push(node.left, node.right);
    }
  }
  return null;
}

//what about DFS of binary trees?

function depthFirstSearchPreOrder(root, target) {
  if(!root){
    return null;
  }
  let path = [];
  let stack = [root];
  while(stack.length>0){
    let node = stack.pop();
    path.push(node.val);
    if(node.val === target) return path;
    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
  return null;
}



module.exports = {
	TreeNode,
  breadthFirstSearch,
  depthFirstSearchPreOrder
};
