/* Given a non-empty string and a dictionary wordDict containing of non-empty words, determine the string can be segregated into a space separated sequence of one or more dictionary words. This is dynamic programming problem using tubulation table(arrary) on iterative problems. and can also be
solved recursively with string key memoization.
Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false */

function wordBreak1(s, list){
  let table = new Array(s.length+1).fill(false);
  //assume empty array [] is true which means nothing is automatically included
  table[0] = true;
  for(let i=0; i<table.length; i++){
    if(table[i]===true){
      for(let j=i+1; j<table.length; j++){
        if(list.includes(s.slice(i,j))){
          table[j] = true;
        }
      }
    }
  }
  return table[table.length-1];
}

//recursive solution with memoization
function wordBreak(s, list, memo={}){
  let key = s;
  console.log(key);
  if(s in list) return true;
  if(s.length===0) return true;
  if(key in memo) return memo[key];
  for(let i=0; i<s.length; i++){
    if(list.includes(s.slice(0,i+1))){
      let restStr = wordBreak(s.slice(i+1), list);
      if(restStr){
        memo[key] = restStr;
        return true;
      };
    }
  }
  return false;
}




s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict));
s1 = "applepenapple", wordDict1 = ["apple", "pen"]
console.log(wordBreak(s1, wordDict1));

s2 = "catsandog";
wordDict2 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s2, wordDict2));
