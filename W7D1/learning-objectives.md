## Big-O
1. Order the common complexity classes according to their growth rate
* The complexity classes should be memorized and their order by growth rate second nature to you by Monday.
* [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
* [Explanation of Log Time Complexity] (https://medium.com/better-programming/a-gentle-explanation-of-logarithmic-time-complexity-79842728a702)


2. Identify the complexity classes of common sort methods
* [Guess the Alogrithm](./guessTheAlgorithm.js)


3. Identify complexity classes of code
```javascript
function example1(n) {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

function example2(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i}, ${j}`);
    }
  }
}

function example3(n) {
  console.log(n);
  if (n === 1) return;
  example3(n - 1);
  example3(n - 1);
}
```

## Memoization and Tabulation
1. Apply memoization to recursive problems to make them less than polynomial time.
* Do the attached recursion problems and memoize to improve the performance
* Practice both passing the memo as an argument and using a global variable

2. Apply tabulation to iterative problems to make them less than polynomial time.
* Solve at least two recursive problems iteratively and then improve performance using tabulation


## Sorting Algorithms
* Explain the complexity of and write a function for each of the sorting algorithms discussed
* It's more important to identify and explain that it is to actually implement but you should feel comfortable with both
* [Guess the Alogrithm](./guessTheAlgorithm.js)
1. **Bubble Sort**
    * [Big O Analysis of Bubble Sort](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/big-o-analysis-of-bubble-sort)
    * [Bubble Sort Analysis](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/bubble-sort-analysis)
2. **Selection Sort**
    * [Selection Sort Analysis](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/selection-sort-analysis)
3. **Insertion Sort**
    * [Insertion Sort Analysis](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/insertion-sort-analysis)
4. **Merge Sort**
    * [Big O Analysis of Merge Sort](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/big-o-analysis-of-merge-sort)
    * [Merge Sort Analysis](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/merge-sort-analysis)
5. **Quick Sort**
    * [Quick sort analysis](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/quick-sort-analysis)
6. **Binary Search**
    * [Big O Analysis of Binary Search](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/big-o-analysis-of-binary-search)
    * [Binary Search Analysis](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/binary-search-analysis)

## Lists, Stacks, and Queues
1. Explain and implement a Linked List.
  - What properties does an instance of a linked list track?
  - What methods does a linked list need to implement?
  - What are the time complexities for these methods?
  - What's the difference between a Singly Linked List and a Doubly Linked List? How would the difference impact the properties and the methods that we implement?
  - Practice creating both types. Use [Thursday's project](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/linked-list-project) as an example/guide.

2. Explain and implement a Stack.
  - Define LIFO and ADT and how it relates
  - What methods does a stack need to implement?
  - What are the time complexities for these methods?
  - Know how to implement a stack using both a node class as well as just an array instance variable. Use [Thursday's project](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/stack-project) as an example/guide for your usage of a Node. **How would this change if we just wanted to keep an array instance variable on our Stack instead?**

3. Explain and implement a Queue.
  - Define FIFO and ADT and how it relates
  - What methods does a queue need to implement?
  - What are the time complexities for these methods?
  - Know how to implement a queue using both a node class as well as just an array instance variable. Use [Thursday's project](https://open.appacademy.io/learn/js-py---jun-2020-online/week-7-jun-2020-online/queue-project) as an example/guide for your usage of a Node. **How would this change if we just wanted to keep an array instance variable on our Queue instead?**