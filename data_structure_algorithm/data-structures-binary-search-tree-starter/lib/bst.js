class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    insertIter1(val) {
        let node = new TreeNode(val);
        if(this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            if(currentNode.left !== null && val < currentNode.val) {
              currentNode= currentNode.left;
            }

            if(currentNode.val <= val && currentNode.right !== null) {
              currentNode= currentNode.right;
            }

            if(currentNode.left === null && val < currentNode.val) {
              currentNode.left = node;
            }
            if(currentNode.right === null && val >= currentNode.val) {
              currentNode.right = node;
            }
        }
    }


    insertIter(val) {
      let node = new TreeNode(val);
      if(this.root === null) {
          this.root = node;
      } else {
        let stack = [this.root];
        while(stack.length > 0){
          let currentNode = stack.pop();
          if (currentNode.val>val){
            if(!currentNode.left){
              currentNode.left = node;
            } else {
              stack.push(currentNode.left);
            }
          } else {
            if(!currentNode.right){
              currentNode.right = node;
            } else {
              stack.push(currentNode.right);
            }
          }
        }
      }
    }


    insertRecur(val, root = this.root) {
        if(!this.root) {
            this.root = new TreeNode(val);
            return;
        }
        if(val < root.val) {
            if(!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insertRecur(val, root.left);
            }
        } else {
            if(!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insertRecur(val, root.right);
            }
        }
    }

    searchRecur(val, root=this.root) {
        //based case is empty tree means exhausted search nothing found
        if(!root){
            return false;
        }
        if(val < root.val) {
            return this.searchRecur(val, root.left);
        }  else if(val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
    }

    searchIter(val) {
        let cur = this.root;
        while(cur !== null) {
            if(val < cur.val) {
                cur = cur.left;
            } else if (val > cur.val) {
                cur = cur.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};
