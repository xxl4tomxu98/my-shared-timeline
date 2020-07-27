const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        {{#each items}}
          <tr>
            <td>{{ add @index 1 }}</td>
            <td>{{ title }}</td>
            <td>{{ category }}</td>
            <td>
              {{#if isComplete}}
              {{else}}
                <form method="POST" action="/items/{{ add @index 1 }}">
                  <button class="pure-button">Complete</button>
                </form>
              {{/if}}
            </td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
    let res = mergeItems(template, []);
    expect(res).to.not.include("<tr>");
    expect(res).to.not.include("<td>");
  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    let res = mergeItems(template, [{title: "wash dishes", category: "work", isComplete: false}]);

    function countTagHelper(tag){
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < res.length; i++){
        if(res.indexOf(tag, startFrom) > 0){
          startFrom = res.indexOf(tag, startFrom) + 1;
          counter++;
        }
      }
      return counter
    }

    expect(countTagHelper('<tr>')).to.equal(1);
    expect(countTagHelper('<td>')).to.equal(4);
    expect(countTagHelper('<form')).to.equal(1);
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    let res = mergeItems(template, [{title: "wash dishes", category: "work", isComplete: true}]);

    function countTagHelper(tag){
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < res.length; i++){
        if(res.indexOf(tag, startFrom) > 0){
          startFrom = res.indexOf(tag, startFrom) + 1;
          counter++;
        }
      }
      return counter
    }

    expect(countTagHelper('<tr>')).to.equal(1);
    expect(countTagHelper('<td>')).to.equal(4);
    expect(countTagHelper('<form')).to.equal(0);
  });

  it("should return three <tr>s for three items", () => {
    let items = [
      {title: "wash dishes", category: "work", isComplete: true},
      {title: "clean room", category: "work", isComplete: true},
      {title: "play golf", category: "fun", isComplete: false}
    ]
    let res = mergeItems(template, items);

    function countTagHelper(tag){
      let counter = 0;
      let startFrom = 0;
      for(let i = 0; i < res.length; i++){
        if(res.indexOf(tag, startFrom) > 0){
          startFrom = res.indexOf(tag, startFrom) + 1;
          counter++;
        }
      }
      return counter
    }

    expect(countTagHelper('<tr>')).to.equal(3);
  });
});
