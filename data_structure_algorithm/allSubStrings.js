// The task is to get a array of all substrings of a string

function getAllSubstrings(str) {
  let result = [];
  let count = 0;
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
      count++;
    }
  }
  return count;
}


function getSubstrings(s) {
  //if string passed is null or undefined or empty string
  if (!s) return [];

  let substrings = [];
  let count = 0;
  for (let length = 1; length <= s.length; length++) {
    for (let i = 0; (i + length) <= s.length; i++) {
      substrings.push(s.substr(i, length));
      count++;
    }
  }

  return count;
}


function genSubsets(S) {
  if (S.length === 0) {
    return [];  // list is empty if string is '' zero length
  }

  // keep in mind that smaller is a array of substrings itself
  let smaller = genSubsets(S.slice(0, S.length - 1));  // all subsets without last character
  let extra = S[S.length - 1];  // create a string slice of just last character
  // newstr is a array of substrings, we append substrings into it
  let newstr = [];
  for (const small of smaller) {
    // for all smaller solutions, add one with last element, here string small concatenate with string extra
    newstr.append(small + extra);
  }

  // concatenate array smallers and new
  return smaller + newstr;  // combine those with last element and those without
}





let theString = 'somerandomword';
console.log(getAllSubstrings(theString));
console.log(getSubstrings(theString));
console.log(genSubsets(theString));
