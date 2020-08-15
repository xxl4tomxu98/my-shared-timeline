


function maxValueRecur(node, visited=new Set()) {
    if (!node) return null;
    let curr = node.val;
    if (visited.has(node.val)){
      return;
    }
    visited.add(node.val);
    node.neighbors.forEach((neighbor) => {
      return maxValueRecur(neighbor, visited);
    });
    return Math.max(...Array.from(visited));
}

//the following is iterative solution DFS
function maxValueIterDFS(node, visited= new Set()){
  let stack = [ node ];
  let currentMax = node.val;
  while(stack.length){
    let curr = stack.pop();
    if(visited.has(curr)) continue;
    visited.add(curr);
    if(curr.val>currentMax) currentMax = curr.val;
    curr.neighbors.forEach(neighbor => stack.push(neighbor));
  }
  return currentMax;
}

//the following is iterative solution BFS
function maxValue(node, visited= new Set()){
  let queue = [ node ];
  let currentMax = node.val;
  while(queue.length){
    let curr = queue.shift();
    if(visited.has(curr)) continue;
    visited.add(curr);
    if(curr.val>currentMax) currentMax = curr.val;
    curr.neighbors.forEach(neighbor => queue.push(neighbor));
  }
  return currentMax;
}


module.exports = {
    maxValue
};
