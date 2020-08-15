
//---------------------------------------------
//              Graph Lecture
//---------------------------------------------


// Here's a graph constructed with good old nodes...

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

a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

function depthFirst(node, visited = new Set()) {
  if (visited.has(node.val)) return;
  visited.add(node.val);
  console.log(node.val);

  node.neighbors.forEach(neighbor => depthFirst(neighbor, visited));
}

// depthFirst(e);

// But where are "e" and "f"? We can't get to them...





// Side note, Directed Cycle vs Undirected Cycle in graphs...
// Directed Cycles form an infinite loop of parent-children relationships
// Undirected Cycles look similar but might have dead end leafs





// Also, regarding JavaScript Sets...

let mySet = new Set();
mySet.add('a');
mySet.add('b');
mySet.add('c');

// console.log(mySet)
// console.log(mySet.has('c'))




// Back to graphs...
// So now let's traverse our graph with an Adjacency List representation

let graph = {
  // 'a': ['e', 'c', 'b'],
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

function depthFirst2(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  graph[node].forEach(neighbor => depthFirst2(graph, neighbor, visited));
}

depthFirst2(graph, 'a');

// And it works! An just to prove that it's behaving in a depth first manner...

graph = {
  // 'a': ['b', 'c', 'e'],
  'a': ['e', 'c', 'b'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

depthFirst2(graph, 'a');
