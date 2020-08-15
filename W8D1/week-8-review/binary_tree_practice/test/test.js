const { expect } = require('chai');
const {
  TreeNode,
  breadthFirstSearch,
  depthFirstSearchPreOrder
} = require("../lib/tree_search.js");


describe('TreeSearch', () => {
	let root;

	beforeEach(() => {
		root = new TreeNode('a');
		let b = new TreeNode('b');
		let c = new TreeNode('c');
		let d = new TreeNode('d');
		let e = new TreeNode('e');
		let f = new TreeNode('f');

		root.left = b;
		root.right = c;
		b.left = d;
		b.right = e;
		c.right = f;
	});


	describe('breadthFirstSearch()', () => {
		context('it should search the tree for target value in breadth first order', () => {
			context("when it contains the target value", () => {
				it("should return an array representing path to target", () => {
					expect(breadthFirstSearch(root, "c")).to.eql(["a", "b", "c"]);
				});
				it("should return an array representing path to target", () => {
					expect(breadthFirstSearch(root, "f")).to.eql(["a", "b", "c", "d", "e", "f"]);
				});
			});

			context("when it does not contain the target value", () => {
				it("should return null", () => {
					expect(breadthFirstSearch(root, "g")).to.equal(null);
				});
			});
			context("when given an empty tree", () => {
				it("should return null", () => {
					expect(breadthFirstSearch(null, "g")).to.equal(null);
				});
			});
		})
	})



  describe('depthFirstSearchPreOrder()', () => {
		context('it should search the tree for target value in depth first order', () => {
			context("when it contains the target value", () => {
				it("should return an array representing path to target", () => {
					expect(depthFirstSearchPreOrder(root, "c")).to.eql(["a", "b", "d", "e", "c"]);
				});
				it("should return an array representing path to target", () => {
					expect(depthFirstSearchPreOrder(root, "f")).to.eql(["a", "b", "d", "e", "c", "f"]);
				});
			});

			context("when it does not contain the target value", () => {
				it("should return null", () => {
					expect(depthFirstSearchPreOrder(root, "g")).to.equal(null);
				});
			});
			context("when given an empty tree", () => {
				it("should return null", () => {
					expect(depthFirstSearchPreOrder(null, "g")).to.equal(null);
				});
			});
		})
	})





});
