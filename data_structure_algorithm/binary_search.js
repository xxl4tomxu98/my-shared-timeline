//binary search with O(log(n)) time in an ordered list
// The following is the iterative binary search
function find(ordered_list, element_to_find) {
  let start_index = 0;
  let end_index = ordered_list.length - 1;

  while (start_index <= end_index) {

    let middle_index = Math.floor(start_index + (end_index - start_index) / 2);

    let middle_element = ordered_list[middle_index];

    if (middle_element === element_to_find) {
      return middle_element;
    } else if (middle_element > element_to_find) {
      end_index = middle_index - 1;
    } else {
      start_index = middle_index + 1;
    }
  }
  return false;
}

// The following is the recursive binary search
function find2(ordered_list, element_to_find, start_index, end_index) {

  while (start_index <= end_index) {

    let middle_index = Math.floor(start_index + (end_index - start_index) / 2);

    let middle_element = ordered_list[middle_index];

    if (middle_element === element_to_find) {
      return (middle_index, middle_element);
    } else if (middle_element > element_to_find) {
      return find2(ordered_list, element_to_find, start_index, middle_index - 1);
    } else {
      return find2(ordered_list, element_to_find, middle_index + 1, end_index);
    }
  }
  return false;
}

let list = [12, 43, 45, 65, 78, 129, 345, 876, 2345];
let number = 129;
console.log((find(list, number)));
console.log((find2(list, number, 0, list.length - 1)));
