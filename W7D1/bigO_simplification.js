
// -------------------------------------------
//            Big-O Simplification
// -------------------------------------------

// In preparation for the assessment practice simplifying functions
// into their minimized Big-O forms. Remember we use "T"
// in place of "O" to denote an unsimplified summary of time or space
// complexity. Remember the following from this week's lectures...

    // – The funciton should be defined in terms of the size of the input(s).
    // – We are interested in the behavior as the input size approaches infinity.
    // – A smaller Big-O function is more desirable than a larger one.
    // – Big-O describes the worst case scenario, also known as the upper-bound.
    // – A Big-O function should be simplified to show only it's most dominant mathmatical term.

// Remember there are two steps we take when simplifying Big-O; simplifying
// the products and simplifying the sums. Review the definitions below before
// tackling the problems...

  // Simplify Products –– if the function is a product of many factors, we drop the factors
  // that don't depend on the size of the input.

  // Simplify Sums –– if the function is a sum of many terms, we keep the term with the
  // largest growth rate and drop the other terms.




// ---------------------------------------------
//            Simlification Problems
// ---------------------------------------------

// Simplify the followinng problems to their respective
// minimized Big-O format. You can find the correct answers
// at the bottom of this file.


// Example: T(5n^2) --> O(n^2)

// T(1000n) --> ?

// T(10nlog(n)) --> ?

// T(12) --> ?

// T(n^3 + n^2 + n) --> ?

// T(2log(n) + 2n + n^2) --> ?

// T(n^3 + 3^n + 3nlog(n)) --> ?

// T(2 + 2n + 2log(n)) --> ?

// T(n! + 10nlog(n) + 10^n) --> ?

// T(3 + 3log(n)) --> ?

// T(2nlog(n) + 2^n) --> ?

// T(n + log(n)) --> ?

// T(10 + 10n + n) --> ?

// T(5^n + 5n^1000) --> ?

// T(n + n + n) --> ?

// T(5n^2 + 3^n + 5nlog(n) + 3n) --> ?




// ---------------------------------------------
//            Simlification Answers
// ---------------------------------------------

// T(1000n) --> ?
// O(n)

// T(10nlog(n)) --> ?
// O(nlog(n))

// T(12) --> ?
// O(1)

// T(n^3 + n^2 + n) --> ?
// O(n^3)

// T(2log(n) + 2n + n^2) --> ?
// O(n^2)

// T(n^3 + 3^n + 3nlog(n)) --> ?
// O(3^n)

// T(2 + 2n + 2log(n)) --> ?
// O(n)

// T(n! + 10nlog(n) + 10^n) --> ?
// O(n!)

// T(3 + 3log(n)) --> ?
// O(log(n))

// T(2nlog(n) + 2^n) --> ?
// O(2^n)

// T(n + log(n)) --> ?
// O(n)

// T(10 + 10n + n) --> ?
// O(n)

// T(5^n + 5n^1000) --> ?
// O(5^n)

// T(n + n + n) --> ?
// O(n)

// T(5n^2 + 3^n + 5nlog(n) + 3n) --> ?
// O(3^n)
