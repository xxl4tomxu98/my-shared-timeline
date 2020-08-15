class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



function breadthFirstSearch(root, target) {
	// if the root value is null, the tree is empty
  if (!root) return null;
  let queue = [root];
  let path = [];
  while (queue.length) {
		let node = queue.shift();
		// after visiting node, add value to path 
		path.push(node.val);
		// if node value is target value, we've completed our path 
		if (node.val === target) return path;
		// if not, add left and right nodes to queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
	}
	// if we've made it here, we didnt find the target value
  return null;
}

module.exports = {
  TreeNode,
  breadthFirstSearch,
};
