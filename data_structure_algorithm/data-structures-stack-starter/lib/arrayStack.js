class ArrayStack{
  constructor() {
    this.data = [];
    this.head = null;
    this.length = 0;
  }

  push(val) {
    this.data.push(val);
    this.length++;
    this.head = this.data[this.length-1];
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    let popped = this.data.pop();
    this.length--;
    if(this.length===0) {
      this.head = null;
    } else {
      this.head = this.data[this.length-1];
    }
    return popped;
  }

  size(){
    return this.length;
  }
}


let myArrStack = new ArrayStack();
myArrStack.push(7);
myArrStack.push(10);
console.log(myArrStack);
console.log(myArrStack.pop());
console.log(myArrStack);
