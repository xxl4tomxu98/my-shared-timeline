//Check to see if the two strings share the same pattern of repeated characters
// ("tree", "loaa") => true
// ("matter", "essare") => false
// ("paper", "mime") => false
// ("acquaintance", "mlswmodqmdlp") => true
// ("tree", "aoaa") => false

function isomorphicStrings(input1, input2) {
    if(input1.length != input2.length)
    return false;
    const map = {};
    for(let i = 0; i < input1.length; i++)
    {
      let a = input1[i];
      let b = input2[i];
      if (typeof map[a] === "undefined") {
        map[a] = b;

      // check for error in first tuple ("ABB", "XYZ")
      } else if (map[a] !== b) {
          return false;
      }

      // check for error in second tuple ("ABC", "XYY")
      for (var key in map) {
          if (key !== a && b === map[key]) {
              return false;
          }
      }
    }
    return true;
}



console.log(isomorphicStrings("acquaintance", "mlswmodqmdlp"));
console.log(isomorphicStrings("tree", "aoaa"));
console.log(isomorphicStrings("matter", "essare"));
console.log(isomorphicStrings("ABCABC", "XYXXYX"));
