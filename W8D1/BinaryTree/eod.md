## Binary Trees
1. Explain and implement a Binary Tree.
  - A tree is .....

  - It cannot have any ...., which are edges that form a loop between nodes.

  - For a tree to be a binary tree, ......

  - It's important to be able to identify and explain tree terminology as well. If given a tree, be able to point out each component.
    - root 
    - parent node
    - child node
    - sibling nodes
    - leaf node
    - internal node 
    - path
    - subtree

  - Know the basics of each term
    - A non-empty tree has to have a root.
    - A tree doesn't have any parent nodes if there are no children.
    - What's the min/max number of parent and leaf nodes for a tree with 5 nodes?

  - All that we need in order to implement a binary tree is a TreeNode class:

  ```javascript
  class TreeNode {
    constructor(val) {
    
    }
  }
  ```

2. Identify the three types of tree traversals: pre-order, in-order, and post-order.

  - Given a tree, be able to determine the order of each traversal type:
    ![Number tree](./number-tree.png)
    - Breadth First: 
    - Pre-order: 
    - In-order: 
    - Post-order: 

3. Explain and implement a Binary Search Tree.
  - A binary search tree is ......

  - Example of a BST with an insert method. You won't be asked to implement a removal:
  
  ```javascript

  class BST {
    constructor() {
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      if(!this.root) {
       
      }

      if (val < currentNode.val) {
     

      } else {
    
      }
    }
  }
  ```