function numRegionsRecur(graph) {
  let visited = new Set();
  let count = 0;
  for(let node in graph){
    if(depthFirstSearch(graph, node, visited)){
      count++;
    };
  }
  return count;
}

function depthFirstSearch(graph, node, visited){
  if(visited.has(node)){
    return false;
  }
  visited.add(node);
  graph[node].forEach(neighbor => depthFirstSearch(graph, neighbor, visited));
  return true;
}


//now implement the above using iterative

function BFSIter(graph, node, visited){
  let queue = [ node ];
  while(queue.length){
    let curr = queue.shift();
    for(let node of graph[curr]){
      if(!visited.has(node)) {
        visited.add(node);
        queue.push(node);
      }
    }
  }
}


function DFSIter(graph, node, visited){
  let stack = [ node ];
  while(stack.length){
    let curr = stack.pop();
    for(let node of graph[curr]){
      if(!visited.has(node)) {
        visited.add(node);
        stack.push(node);
      }
    }
  }
}





function numRegions(graph){
  let visited = new Set();
  let count = 0;
  for (let node in graph){
    if(!visited.has(node)){
      BFSIter(graph, node, visited);
      //DFSIter(graph, node, visited);
      count++;
    }
  }
  return count;
}


//single function solution
function numRegions1(graph) {
  let visited = new Set();
  let counter = 0;

  for (let node in graph) {
      let queue = [node]
      if (!(visited.has(node))) counter++;
      while (queue.length) {
          let curr = queue.shift();
          if (visited.has(curr)) continue;
          visited.add(curr);
          queue.push(...graph[curr]);
      }
  }
  return counter;
}


module.exports = {
    numRegions
};
