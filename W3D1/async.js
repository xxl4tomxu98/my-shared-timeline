// syncronous execution
function yay() {
  console.log("yay")
}

function boo() {
  console.log("boo")
  yay()
}

yay()
boo()
console.log("yo")

// async execution
// boop gets moved to the message queue
function boop() {
  console.log('boop!');
}

console.log('fizz');
setTimeout(boop, 0);
console.log('buzz');


// predict what this will print
// change var to let and predict again
function spooky() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
  console.log("after the loop");
}
spooky();

// DON'T RUN THIS!!
// STACK OVERFLOW!
// function foo(){
//     foo();
// }
// foo();
