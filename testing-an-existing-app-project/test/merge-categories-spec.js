const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
    <div>
      <ul>
        {{#each categories}}
          <li>{{ this }}</li>
        {{/each}}
      </ul>
    </div>
    `;

    it("should return no <li>s for no categories", () => {
      let res = mergeCategories(template, [], "li");
      expect(res).to.not.include("<li>");
    });

    it("should return a single <li> for one category", () => {
      // expect.fail('please write this test');
      let response = mergeCategories(template, ['fun'], 'li');
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < response.length; i++){
        if(response.indexOf('<li>', startFrom) > 0){
          startFrom = response.indexOf('<li>', startFrom) + 1;
          counter++;
        }
        if(counter > 2) break;
      }
      expect(counter).to.equal(1);
    });

    it("should return an <li> for each category", () => {
      //expect.fail('please write this test');
      let response = mergeCategories(template, ['fun', "bike", "run"], 'li');
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < response.length; i++){
        if(response.indexOf('<li>', startFrom) > 0){
          startFrom = response.indexOf('<li>', startFrom) + 1;
          counter++;
        }
      }
      expect(counter).to.equal(3);
    });
  });

  context("using <option> tags", () => {
    const template = `
    <div>
      <select>
        {{#each categories}}
          <option>{{ this }}</option>
        {{/each}}
      </select>
    </div>
    `;

    it("should return no <option>s for no categories", () => {
      // expect.fail('please write this test');
      let res = mergeCategories(template, [], "option");
      expect(res).to.not.include("<option>");
    });

    it("should return a single <option> for one category", () => {
      //expect.fail('please write this test');
      let response = mergeCategories(template, ['fun'], 'option');
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < response.length; i++){
        if(response.indexOf('<option>', startFrom) > 0){
          startFrom = response.indexOf('<option>', startFrom) + 1;
          counter++;
        }
        if(counter > 2) break;
      }
      expect(counter).to.equal(1);
    });


    it("should return an <option> for each category", () => {
      // expect.fail('please write this test');
      let response = mergeCategories(template, ['fun', "bike", "run"], 'option');
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < response.length; i++){
        if(response.indexOf('<option>', startFrom) > 0){
          startFrom = response.indexOf('<option>', startFrom) + 1;
          counter++;
        }
      }
      expect(counter).to.equal(3);
    });
  });
});
