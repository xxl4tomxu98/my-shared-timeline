function inOrderArray(root) {
	// if the root is null, return an empty array
	if(root === null) return [];
	// get the array for visiting the left node
	let leftTree = inOrderArray(root.left);
	// get the array for visiting the right node
	// console.log(root.val);
	let rightTree = inOrderArray(root.right);
	// return the left array concatenated with the root value
  // concatenated with the right array, note here returning root.val
  // the leftTree and rightTree array also become node.val!! since root.val is the base case
  return [...leftTree, root.val, ...rightTree];
	//return leftTree.concat(root.val).concat(rightTree);
}

function postOrderArray(root) {
	// if the root is null, return an empty array
	if(root===null){
		return [];
	}
	// get the array for visiting the left node
	let leftTree = postOrderArray(root.left);
	// get the array for visiting the right node
	let rightTree = postOrderArray(root.right);
	// return the left array concatenated with the right array
	//   concatenated with the root value
	return leftTree.concat(rightTree).concat(root.val);
}

function preOrderArray(root) {
	// if the root is null, return an empty array
	if(root===null){
		return [];
	}
	// get the array for visiting the left node
	let leftTree = preOrderArray(root.left);
	// get the array for visiting the right node
	let rightTree = preOrderArray(root.right);
	// return the left array concatenated with the right array
	//   concatenated with the root value
  //return [root.val, ...leftTree, ...rightTree];
  return [root.val].concat(leftTree).concat(rightTree);
}

module.exports = {
	inOrderArray,
  postOrderArray,
  preOrderArray
};
