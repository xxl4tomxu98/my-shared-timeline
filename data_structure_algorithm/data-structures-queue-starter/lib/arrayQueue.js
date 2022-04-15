class ArrayQueue{
  constructor() {
    this.length = 0;
    this.front = null;
    this.back = null;
    this.data = [];
  }


  enqueue(val) {
    this.data.push(val);
    this.length++;
    if(this.length===1){
      this.front = this.data[this.length-1];
    }
    this.back = this.data[this.length-1];
    return this.length;
  }


  dequeue() {
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


  size() {
    return this.length;
  }
}



let myArrQueue = new ArrayQueue();
myArrQueue.enqueue(7);
myArrQueue.enqueue(10);
console.log(myArrQueue);
console.log(myArrQueue.dequeue());
console.log(myArrQueue);
