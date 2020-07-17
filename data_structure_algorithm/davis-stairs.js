/*Imagine we are trying to compute 4 from 3, 2 & 1.

When we sum we are saying basically that there are 3+2+1 ways to end up in a step of the staircase that is in a one step reachable distance to the step we are trying to reach in this case step of height 4.

We can jump from step 1 with a jump of distance 3 to get to 4. Since there is only one combination to get to staircase 1, this adds up only 1 to our final result
We can jump from step 2 with a jump of 2 to get to 4 . There are 2 ways to get to step 2 so it adds up 2 to the final result
We can jump from step 3 with a jump of 1 to get to 4. There are 4 ways to get to step 3 so it adds up 4 to the final result */

function stepPerms(n){
  if(n === 1){
    return 1;
  } else if (n === 2){
    return 2;
  } else if (n===3){
    return 4;
  } else{
    return (stepPerms(n-1)+stepPerms(n-2)+stepPerms(n-3))%10000000007;
  }
}

//The following is dynamic programming solution with memoization
function fastStepPerms(n){
  let memo = {0:0, 1:1, 2:2, 3:4};
  if(memo[n]){
    return memo[n];
  } else {
    let results = (stepPerms(n-1)%10000000007+stepPerms(n-2)%10000000007+stepPerms(n-3)%10000000007);
    memo[n] = results;
    return results;
  }
}

function fastStepPerms1(n){
  let steps = [1, 2, 3];
  let ways = {};
  function climb(n, steps, ways){
    let ret = 0;
    for(let step of steps){
      if (n - step == 0){
        ret += 1;
      } else if(n - step > 0){
        if (ways[n-step]===undefined){
          ways[n - step] = climb(n - step, steps, ways);
        }
        //print(ways[n - step]);
        ret += ways[n - step];
      }
    }
    return ret;
  }
  return climb(n, steps, ways);
}

console.log(stepPerms(10));
console.log(fastStepPerms(30));
console.log(fastStepPerms1(30));
