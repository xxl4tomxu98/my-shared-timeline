const { expect } = require('chai');
const { saveItems } = require('../save-items');
describe("The saveItems function", () => {
  it('adds the new item to the list', () => {
    let newItem = "play tennis";
    let items = ["wash dishes", "clean laundry"];
    let newItems = saveItems(items, newItem);
    expect(newItems[2]).to.equal(newItem);
  });

  it('makes sure the result and the original are different', () => {
    let newItem = "play tennis";
    let items = ["wash dishes", "clean laundry"];
    let newItems = saveItems(items, newItem);
    expect(newItems).to.not.equal(items);
  });
});
