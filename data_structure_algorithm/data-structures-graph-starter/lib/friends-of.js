 /**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
  if(currentDistance>=maxDistance) return;
  visited.add(name);
  adjacencyList[name].forEach(person => {
    friendsOfRecursion(person, adjacencyList, visited, maxDistance, currentDistance + 1);
  });
}




function friendsOfIter3(adjacencyList, name, maxDistance){
  if(adjacencyList[name]){
    let visited = new Set();
    visited.add(name);
    let queue = adjacencyList[name];
    let currentDistance = 0;
    while(currentDistance<maxDistance){
      let nextQueue = [];
      while(queue.length>0){
        let node = queue.shift();
        visited.add(node);
        adjacencyList[node].forEach(ele => {
          if(!visited.has(ele))  nextQueue.push(ele);
        });
      }
      queue = nextQueue;
      currentDistance++;
    }
    //wants to find friends not self
    visited.delete(name);
    return Array.from(visited);
  }
}



function friendsOf(adjacencyList, name, maxDistance){
  if(adjacencyList[name]){
    let visited = new Set();
    visited.add(name);
    let queue = [name];
    let currentDistance = 0;
    while(queue.length>0){
      let node = queue.shift();
      adjacencyList[node].forEach(ele => {
        if(!visited.has(ele)) {
          if(currentDistance<maxDistance-1){
            queue.push(ele);
          }
          visited.add(ele);
        }
      });
      currentDistance++;
    }
    //wants to find friends not self
    visited.delete(name);
    return Array.from(visited);
  }
}


function friendsOf1(adjacencyList, name, distance) {
  if(adjacencyList[name]){
    let visited = new Set();
    adjacencyList[name].forEach(friend => {
      //friendsOfRecursion(friend, adjacencyList, visited, distance, 0);
      //friendsOfIterDFS(friend, adjacencyList, visited, distance, 0);
      friendsOfIterBFS(friend, adjacencyList, visited, distance, 0);
    });
    //wants to find friends not self
    visited.delete(name);
    return Array.from(visited);
  }
}

//The following is one function iterative solution

function friendsOfIter(adjacencyList, name, distance) {
  if (!(name in adjacencyList)) return undefined;
  let visited = new Set();
  let currentDistance = 0;
  // add name to visited
  visited.add(name);
  // while current is less than distance
  while (currentDistance < distance) {
    // add all connections of of everyone in visited to visited
    let visitArray = Array.from(visited);
    visitArray.forEach(el => {
      adjacencyList[el].forEach(friend => {
        visited.add(friend);
      })
    })
    // increment current distance
    currentDistance++;
  }
  // return visited without first person
  return Array.from(visited).slice(1);
}


function friendsOfIter1(adjacencyList, name, distance) {
  if (!(name in adjacencyList)) return undefined;
  let visited = new Set();
  // add name to visited
  visited.add(name);
  // put all name's friends into the queue
  let queue = adjacencyList[name];
  // loop until you've reached the max distance
  for (let i = 0; i < distance; i ++) {
    // make a new empty queue to keep track of new friends
    let nextQueue= [];
    while (queue.length) {
      // remove the first friend from the queue
      let friend = queue.shift();
      // add the friend to visited
      visited.add(friend);
      // go through each of this new friend's friends
      adjacencyList[friend].forEach(el => {
        // if you see a new person
        if (!visited.has(el)) {
          // add that new person to the next queue
          nextQueue.push(el)
        }
      })
    }
    // replace the queue with the next queue for the subsequent loop
    queue = nextQueue;
  }
  // return visited without first person
  visited.delete(name);
  return Array.from(visited);
}







//one function to do this recursively with depth specification
function friendsOf1 (aList, friend, depth, visited = new Set()) {
  if(visited.has(friend) || depth === 0) return;
  if(aList[friend]) {
    aList[friend].every(fr => friendsOf1(aList, fr, depth -= 1, visited.add(friend)));
  } else {
    return undefined;
  }
  visited.delete(friend);
  return Array.from(visited);
}


/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
