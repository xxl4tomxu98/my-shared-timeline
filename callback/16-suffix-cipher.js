/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume tha"t only one suffix of" the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function (sentence, obj) {
  let newArray = sentence.split(" ");
  return newArray.map(function (ele) {
    for (let key in obj) {
      let func = obj[key];
      if (ele.endsWith(key)) {
        return func(ele);
      }
    }
    return ele;
  }).join(" ");
}

let suffixCipher2 = function (sentence, obj) {
  let array = sentence.split(" ");
  let newArr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    for (let j = 0; j < array.length; j++) {
      let key = keys[j];
      if (curr.endsWith(key)) {
        let cb = obj[key];
        let post = cb(curr);
        newArr.push(post);
        break;
      } else if (j === keys.length - 1) {
        newArr.push(curr);
      }
    }
  }
  return newArr.join(' ');
}





let cipher2 = {
  tal: function (word) {
    return word.toUpperCase();
  },
  s: function (word) {
    return word + 'th';
  }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));

console.log(suffixCipher2('incremental progress is very instrumental', cipher2));

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
