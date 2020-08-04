/* */

const {Node, LinkedList} = require("../data-structures-linked-list-starter/lib/linked_list-solution.js");


function reverseLinkedList(list){
  //use a stack implemented by array to reverse
  const myArr = [];
  let current = list.head;
  while(current.next){
    myArr.push(current);
    current = current.next;
  }
  list.head = current;
  list.head.next = myArr.pop();
  current = list.head.next;
  while(myArr.length!==0){
    current.next = myArr.pop();
    current = current.next;
  }
  current.next = null;
  list.tail = current;
  return list;
}

let list = new LinkedList();
for(let i=0; i<10; i++){
  list.addToTail(i);
}
console.log(list);
console.log(reverseLinkedList(list));
