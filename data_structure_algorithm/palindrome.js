function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

function palindrome1(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(string) {
  let re = /[\W_]/g;
  string = string.toLowerCase().replace(re, '');
  function reverse() {

    return string
      .split("")
      .reverse()
      .join("");
  }

  return string === reverse();
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome1("0_0(: /-\ :) 0–0"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
