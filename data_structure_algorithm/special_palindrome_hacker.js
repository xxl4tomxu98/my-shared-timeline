// My brute force case. too long not efficient.
function specialPalindrome(str) {
  let n = str.length;
  for (let j = 1; j < n - 1; j++) {
    if (same_char(str.slice(0, j)) && same_char(str.slice(j + 1)) &&
      (str[j - 1] === str[j + 1] && str[j] !== str[j - 1])) {
      return true;
    }
  }
  return false;
}
function same_char(str) {
  if (str.length === 1) {
    return true;
  } else {
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[0]) {
        return false;
      }
    }
    return true;
  }

}
function substrCount(n, str) {
  let result = [];
  let count = 0;
  for (let length = 1; length <= n; length++) {
    for (let i = 0; (i + length) <= n; i++) {
      let sub = str.substr(i, length);
      if (same_char(sub) || specialPalindrome(sub)) {
        result.push(sub);
        count++;
      }
    }
  }
  return count;
}

// The following is the most elegant I have ever seen.
function substrCount2(n, s) {
  // since we count all single char as same substrings we start from len(s)
  let count = n;
  for (let i = 0; i < n; i++) {
    let char = s[i];
    let diff_char_idx = null;
    for (let j = i + 1; j < n; j++) {
      if (char == s[j]) {
        if (diff_char_idx === null) {
          count++;
        } else if (j - diff_char_idx === diff_char_idx - i) {
          count++;
          break;
        }
      } else {
        if (diff_char_idx === null) {
          diff_char_idx = j;
        } else {
          break;
        }
      }
    }
  }
  return count;
}


console.log(substrCount(7, "abcbaba"));
console.log(substrCount2(7, "abcbaba"));
console.log(substrCount(5, "aaaaa"));
console.log(substrCount2(5, "aaaaa"));
