function breadthFirstSearch(startingNode, targetVal) {
  const visited = new Set();
  const queue = [startingNode];
  while(queue.length>0){
    if(visited.has(queue[0])) {
      if (queue[1]){
        return queue[1];
      } else {
        return null;
      }
    }else {
      visited.add(queue[0]);
      queue.push(...queue[0].neighbors);
      if(queue[0].val ===targetVal){
        return queue[0];
      } else {
        queue.shift();
      }
    }
  }
  return null;
}


//Adjacency List implementation of graph BFS, note node here are strings
// not object oriented graph node objects, assuming targetVal is string
function breadthFirstSearch1(aList, node, targetVal){
  const visited = new Set();
  const queue = [node];
  while(queue.length){
    let curr = queue.shift();
    if(visited.has(curr)) continue;
    visited.add(curr);
    if(curr === targetVal){
      return curr;
    }
    aList[node].forEach(ele => queue.push(ele));
  }
}


module.exports = {
    breadthFirstSearch
};
