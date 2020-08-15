//---------------------------------------------
//            Binary Tree Review
//---------------------------------------------

// The constraints of a binary tree...

// * A lack of cycles.
// * A maximum of two children per node.
// * A single root node.





//------------------------------------------------------------------------------------------


//---------------------------------------------
//            What is a Graph?
//---------------------------------------------


// A graph is any collection of notes and edges. It may...

// * Not have a root node.
// * Have cycles (cyclical node child / parent references).
// * Have any number of edges leaving a node (multiple children, multiple parents etc.)






// Building a graph with a GraphNode class...

class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// This implementation is familiar but clunky.
// How do we refer to the entire graph?
// How do we pass this graph to a funtion without a starting point / root?






// Representing a graph with an Adjacency Matrix...

let matrix = [
/*          A       B       C       D       E       F   */
/*A*/    [true,  true,   true,   false,  true,   false],
/*B*/    [false, true,   false,  false,  false,  false],
/*C*/    [false, true,   true,   true,   false,  false],
/*D*/    [false, false,  false,  true,   false,  false],
/*E*/    [true,  false,  false,  false,  true,   false],
/*F*/    [false, false,  false,  false,  true,   true]
];

// Well, it's all in one place, but it takes up so much space!





// Representing a graph with an Adjacency List...

let graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

// That's a bit better, we have a single reference to the whole graph.
// Worst case both the matrix and the list are going to take up O(n^2) though.
// Essentially though we've boiled down the graph.
// We have a corresponding array element for every instance of a "true" in the matrix.
// This is the best representation we've seen so far.

// Still, takes up a lot more room than a root node!...





//------------------------------------------------------------------------------------------


//---------------------------------------------
//          Graph Traversal Reading
//---------------------------------------------


// You can run a Depth First Search (DFS) on a graph!...

class GraphNode2 {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

a = new GraphNode2('a');
b = new GraphNode2('b');
c = new GraphNode2('c');
d = new GraphNode2('d');
e = new GraphNode2('e');
f = new GraphNode2('f');
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// But where do we start?
// In this scenario F is kind of like a root.



// Here's a starter function for out DFS but something's wrong...

function depthFirstRecurBad(node) {
  console.log(node.val);

  node.neighbors.forEach(neighbor => {
    depthFirstRecurBad(neighbor);
  });
}

// depthFirstRecur(f);

// Can you see where this code goes wrong?
// It will get caught in an infinite cycle f, e, a, e, a, e, a, e, ...



// We can solve this issue with JS Sets...

function depthFirstRecur(node, visited = new Set()) {
  if (visited.has(node.val)) return;
  visited.add(node.val);

  console.log(node.val)

  node.neighbors.forEach(neighbor => {
    depthFirstRecur(neighbor, visited);
  });
}

// console.log(depthFirstRecur(f));

// That works great now, but of course it doesn't do anything.



// And just to be clear, we can kind of do this with plain old POJO memoization...

function depthFirstRecurMemo(node, visited = {}) {
  if (visited[node.val]) return;
  visited[node.val] = true;

  console.log(node.val);

  node.neighbors.forEach(neighbor => {
    depthFirstRecurMemo(neighbor, visited);
  });
}

// console.log(depthFirstRecurMemo(f))

// Check out the difference. What does this tell us about Sets?
// it works also but isn't as specific so we don't have repeat
//values from similar nodes. Sets are sort of POJOs with only keys
// keys in POJO is the node.val, values are boolean true(can be
// neglected) this is why Set is used here.





// And just to check to see what the iterative version of this looks like...
// the DFS recrusive calls essentially is a stack in terms of node access
function depthFirstIter(node) {
  const visited = new Set();
  let stack = [ node ];

  while (stack.length > 0) {
    let node = stack.pop();
    //if node already explored, to next stack pop and bypass adding, pushing etc.
    if (visited.has(node.val)) continue;

    console.log(node.val);
    visited.add(node.val);

    stack.push(...node.neighbors);
  }
}

//depthFirstIter(f);

// Nice, that might even be more readable. But it's an arbitrary difference.
// And interestingly it has the same number of console logs as our memoized recursive version.





//---------------------------------------------
//     Graph Traversal w/ Adjacency List
//---------------------------------------------


// Let's use the same graph adjacency list as before...

graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

// Note that these are just strings now rather than GraphNodes.

function depthFirstListBad(node, graph, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    depthFirstRecurAdjList(neighbor, graph, visited)
  })
}

// console.log(depthFirstRecurAdjList("f", graph));

// It works! Note that you can also solve this iteratively.
// But wait! This isn't very dynamic, and it doesn't always hit every node...

// console.log(depthFirstRecurAdjList("a", graph));

// That's no good, we completely missed 'f'.
// So let's fix it...



function depthFirstList(graph) {
  const visited = new Set();
  // this loop ensures all nodes in graph are includes
  for (let node in graph) {
    _depthFirstList(node, graph, visited)
  }
}

function _depthFirstList(node, graph, visited) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    _depthFirstList(neighbor, graph, visited);
  });
}

// depthFirstList(graph);
// Nice, that seems to be working now.
// And just to be clear, this doesn't have to be two functions or recursive...

function depthFirstList2(graph) {
  const visited = new Set();
  const stack = [Object.keys(graph)[0]];
  // const stack = Object.keys(graph);

  while(stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);

    graph[node].forEach(neighbor => {
      stack.push(neighbor);
    })

    console.log(node);
  }
}

// console.log(depthFirstList2(graph));

// Same problem, different algorithm.




// Going back, let's test this approach on a graph whose nodes are partially disconnected.
// Remember we call this a "Forest".

graph = {
  'h': ['i', 'j'], // tree one quasi-root
  'i': [],
  'j': ['k'],
  'k': [],
  'l': ['m'],  // tree two quasi-root
  'm': []
}

// console.log(depthFirstList(graph));






// If you're thinking this is all silly, that's because it is.
// For instance...

function graphTraversal(graph) {
  Object.keys(graph).forEach(node => console.log(node));
}

console.log(graphTraversal(graph));

// Good enough, but it doesn't help us understand graph traversal.
