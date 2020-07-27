const { expect } = require('chai');
const { saveCategories } = require('../save-categories');
describe("saveCategories()", () => {
  it('adds the new category to the list', () => {
    // Arrange
    const categories = ['One', 'Two', 'Three'];
    const newCategory = 'New Category';

    // Act
    // Call the saveCategories function with the categories
    // and newCategory values and store the result in a
    // variable named "result"
    let result = saveCategories(categories, newCategory);

    // Assert
    expect(result).to.include(newCategory);
  });

  it('sorts the list', () => {
    // Arrange
    const categories = ['Cat3', 'Cat1'];
    const newCategory = 'Cat2';

    // Act
    const result = saveCategories(categories, newCategory);

    // Assert
    // Use the "eql" method to compare "member-wise equality"
    // of two arrays instead of the "equal" method.
    // If the array in result is sorted, what should you
    // compare to?
    //expect.fail('please write this test');
    expect(result).to.deep.equal(['Cat1', 'Cat2', 'Cat3']);
    expect(result).to.eql(['Cat1', 'Cat2', 'Cat3']);

  });

  it('makes sure the result and the original are different', () => {
    // Arrange
    // Declare any categories and newCategory values here.
    const categories = ['dog1', 'dog2', 'dog3'];
    const newCategory = 'dog4';
    // Act
    const result = saveCategories(categories, newCategory);

    // Assert
    expect(result).to.not.equal(categories);
  });
});
