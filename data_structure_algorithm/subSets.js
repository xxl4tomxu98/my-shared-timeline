//Write a recursive function that takes an array and returns all of its subsets. How many sets will it return? We can set our base case as a single empty subset ([[]]). We can then calculate the subsets of any array by finding the subsets of the array excluding the last element, and add them to the subsets of the array with the first element.

function subsets(arr) {
    // base case
    if (!arr.length) return [[]];
    const last = arr[arr.length - 1];

    // recursive call, get the subsets for the array which is one element smaller
    const subs = subsets(arr.slice(0, arr.length - 1));

    // for each subset in the previous set, push on the element we initially removed
    // then concat this new set with the set from the recursive call
    return subs.concat(subs.map((el) => {
      let newArr = el.slice(0);
      newArr.push(last);
      return newArr;
    }));
}



console.log(subsets([12, -1, 23, -23]))
