//Manacher;s Algorithm
function longestSubPalindromes(s) {
    let n = s.length;
    let m = 2 * n - 1;
    let lengthMax = 0;
    for (let i = 0; i < m; i++) {
        let radius = (i % 2 === 0) ? 0 : 0.5;
        let length;
        while (s[i/2 - radius] === s[i/2 + radius]) {
            length = 1 + 2 * radius;
            radius++;
        }
        lengthMax = (length > lengthMax) ? length : lengthMax;
    }
    return lengthMax;
}

//Manacher's Algorithm, substrings of length one included so add 5 for length 5 string
function numOfSubPlindromes(s) {
    let n = s.length;
    let m = 2 * n - 1;
    let count = 0;
    for (let i = 0; i < m; i++) {
        let radius = (i % 2 === 0) ? 0 : 0.5;
        while (s[i/2 - radius] === s[i/2 + radius] && i/2 - radius > -1) {
            radius++;
            count++;
        }
    }
    return count;
}



//Write a symmetricSubstrings method that returns an array of substrings which are
//palindromes in alphabetical order. Only include substrings of length bigger than one.


function symmetricSubstrings(s) {
    const symmetric = [];
    for (let i = 0; i < s.length; i++) {
      for (let j = 2; j <= s.length - i; j++) {
        const subst = s.slice(i, i + j);
        const reversed = subst.split('').reverse().join('');
        if (subst === reversed) symmetric.push(subst);
      }
    }
    return symmetric.sort();
};


console.log(longestSubPalindromes('bbbab'));
console.log(numOfSubPlindromes('bbbab'));
console.log(symmetricSubstrings('bbbab'));
