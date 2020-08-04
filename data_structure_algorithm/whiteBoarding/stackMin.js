// 1.) create a new stack
// 2.) setup constructor function
// 3.) constructor function should take no args
    // 3a.) should initiate a head of null
    // 3b.) should initiate a minimum array as []
    // 3c.) should initiate a length property to be 0

// 4.) should create a pop method
// 5.) should create a push method
// 6.) should create a min method

// [1, 6, 4, 3]

//push method keeps track of the min
//pop() off the end
//so we lose 1
//how do we check the new min

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
        //add property minimum as another array based stack for minimum values
        this.minimum = [];
    }
    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.top = node;
            this.minimum.push(node.value)
            this.length += 1
        } else {
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
            this.length += 1;
            if(this.minimum[0] > node.value){
                this.minimum.unshift(node.value);
            } else {
                this.minimum.unshift(this.minimum[0]);
            }
        }
        return this.length;
    }
    pop(){
        if(this.length === 0) return null;
        if(this.length === 1){
            let temp = this.top;
            this.top = null;
            this.length -= 1;
            this.minimum = [];
            return temp.value;
        } else {
            let temp = this.top;
            this.top = this.top.next;
            this.length -= 1;
            this.minimum.shift();
            return temp.value;
        }
    }

    min(){
        return this.minimum[0]
    }
}


let testStack = new Stack()

testStack.push(7)
testStack.push(12)
testStack.push(3)
testStack.push(9)
testStack.push(4)
testStack.push(1)
console.log(testStack);
console.log(testStack.min());
testStack.pop()
console.log(testStack.min())
testStack.pop()
console.log(testStack.min())
testStack.pop()
console.log(testStack.min())
testStack.pop()
console.log(testStack.min())
