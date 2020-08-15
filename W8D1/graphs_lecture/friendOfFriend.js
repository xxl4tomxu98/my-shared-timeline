
function friendOfFriend2(adjacentList, friend1, friend2){
  let friendsOf1 = Array.from(depthFirst(adjacentList, friend1));
  let friendsOf2 = Array.from(depthFirst(adjacentList, friend2));
  if(friendsOf1.includes(friend2)||friendsOf2.includes(friend1)){
    return true;
  } else {
    return false;
  }
}

function depthFirst(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  graph[node].forEach(neighbor => depthFirst(graph, neighbor, visited));
  return visited;
}




//recursive oneliner solution:

let friendOfFriend1 = (aList, fr1, fr2, visited = new Set()) => visited.has(fr1) ? false : aList[fr1].includes(fr2) ? true : !aList[fr1].every(friend => !friendOfFriend1(aList, friend, fr2, visited.add(fr1)));


//oneliner to do this recursively with depth specification
let friendOfDepth = (aList, fr1, fr2, depth, visited = new Set()) => visited.has(fr1) || depth === 0 ? false : aList[fr1].includes(fr2) ? true : !aList[fr1].every(friend => !friendOfDepth(aList, friend, fr2, depth -= 1, visited.add(fr1)));



//My favorite standard approach
function friendOfFriend(aList, fr1, fr2, visited = new Set()){
  if(visited.has(fr1)) return;
  visited.add(fr1);
  for(let f of aList[fr1]){
    if(f === fr2) return true;
    if(friendOfFriend(aList, f, fr2, visited)) return true;
  }
  return false;
}

// we could also use the fr1 visited set to look for fr2
function friendOfFriendVisit(aList, fr1, fr2, visited=new Set()){
  if (visited.has(fr1)) return;
  visited.add(fr1);
  aList[fr1].forEach(neighbor => friendOfFriendVisit(aList, neighbor, fr2, visited));
  //console.log(visited);
  return visited.has(fr2);
}


//One would like to do this iteratively we will do a BFS with a queue
function friendOfFriendIter(aList, fr1, fr2){
  let visited = new Set();
  let queue = [fr1];
  while(queue.length!==0){
    let node = queue.shift();
    if(visited.has(node)) continue;
    visited.add(node);
    if(aList[node].includes(fr2)) return true;
    queue.push(...aList[node]);
  }
  return false;
}


const sampleGraph = {
  "alissa": ["julie", "angela"],
  "julie": ["alissa", "angela"],
  "angela": ["julie", "alissa"],
  "tom" : ["corina"],
  "corina": ["tom"]
}


console.log(friendOfFriend(sampleGraph, "julie", "alissa"));
console.log(friendOfFriend(sampleGraph, "angela", "tom"));
console.log(friendOfFriendIter(sampleGraph, "julie", "alissa"));
console.log(friendOfFriendIter(sampleGraph, "angela", "tom"));
console.log(friendOfFriendVisit(sampleGraph, "julie", "alissa"));
console.log(friendOfFriendVisit(sampleGraph, "angela", "tom"));
