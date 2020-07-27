/* A company has requested to streamline their product allocation strategy, and given n products, each of which has an associated value, you are required to arrange these products into segments for processing. There are infinite segments indexed as 1, 2, 3 and so on.
However, there are two constraints:
1) You can assign a product to a segment with index i if and only if i=1 or the segment with index (i-1) has at least m products.
2) Any segment must contain either no products or at least m products.
The score for a segment is defined as the index of the segment multiplied by the sum of values of the products it contains. The score of an arrangement of products is the sum of scores of segments. Your task is to compute the maximum score of an arrangement.

Consider, for example, n=11 products and m=3 . One optimal way to assign is -

Assign the first three products to segment 1.
Assign the next three products to segment 2.
Assign the next five products to segment 3.
Note that we can not assign 2 products to segment 4 as the second constraint would be violated. The score of the above arrangement is -

1 * (1 + 2 + 3) + 2 * (4 + 5 + 6) + 3 * (7 + 8 + 9 + 10 + 11) = 6 + 30 + 135 = 171.

Since the arrangement score can be very large, print it modulo 10**9 + 7.*/

function maxScore(a, m) {
  // Write your code here
  let n = a.length;
  let b = a.sort((a, b) => a - b);
  let segs = Math.floor(n/m);
  let total = 0;
  for(let i=0; i<segs-1;i++){
    let arr = (b.slice(i*m, m*(i+1)));
    let arrSum = arr.reduce((a,b) => a + b, 0);
    total += (i+1)*arrSum;
  }
  let arrLast = b.slice(m*(segs-1));
  let arrLastSum = arrLast.reduce((a,b) => a + b, 0);
  total += segs*arrLastSum;
  return total%(10**9+7);
}


let a = [23, 43, 1, 24, 12, 134, 56, 231];
let m = 3;
console.log(maxScore(a, m));
