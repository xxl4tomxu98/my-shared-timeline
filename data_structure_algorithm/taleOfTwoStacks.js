/*A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then process  queries, where each query is one of the following 3 types:

1: Enqueue element  into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.
For example, a series of queries might be as follows:
sample input:
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2
sample output:
14
14


Function Description

Complete the put, pop, and peek methods in the editor below. They must perform the actions as described above.

Input Format

The first line contains a single integer, q, the number of queries.

Each of the next  lines contains a single query in the form described in the problem statement above. All queries start with an integer denoting the query type , but only query 1 is followed by an additional space-separated value, x, denoting the value to be enqueued. */


function processData(input) {
  //Enter your code here
  class Fifo{
    constructor(){
      this.data = [];
      this.front = null;
      this.back = null;
      this.length = 0;
    }
    enqueue(value){
      this.data.push(value);
      this.length++;
      if(this.length===1){
        this.front = this.data[this.length-1];
      }
      this.back = this.data[this.length-1];
    }
    dequeue(){
      if(this.length===0){
        return null;
      }
      let dequeued = this.data.shift();
      this.length--;
      if(this.length===0){
        this.front = null;
        this.back = null;
      } else {
        this.front = this.data[0];
        this.back = this.data[this.length-1];
      }
      return dequeued;
    }
    peek(){
      return this.data[0];
    }
  }


  class Lifo{
    constructor(){
      this.data = [];
      this.head = null;
      this.length = 0;
    }
    enqueue(value){
      this.data.push(value);
      this.length++;
      this.head = this.data[this.length-1];
    }
    dequeue(){
      if(this.length===0){
        return null;
      }
      let dequeued = this.data.pop();
      this.length--;
      if(this.length===0){
        this.head = null;
      } else {
        this.head = this.data[this.length-1];
      }
      return dequeued;
    }
    peek(){
      return this.data[this.length-1];
    }
  }
  let sta1 = new Fifo();
  let sta2 = new Lifo();
  let cmd = input.split("\n");
  for(let i=1; i<cmd.length; i++){
    let value = cmd[i].slice(1).trim();
    if(cmd[i][0]==="1"){
      sta1.enqueue(value);
      sta2.enqueue(value);
    }
    if(cmd[i][0]==="2"){
      sta1.dequeue();
      sta2.dequeue();
    }
    if(cmd[i][0]==="3"){
      console.log(sta1.peek());
    }
  }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
