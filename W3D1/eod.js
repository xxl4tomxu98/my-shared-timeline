let count = 10
// The afterOneSecond function is recursively called 10 times after delay
function afterOneSecond() {
  console.log('1 seconds is up!');
  count--;
  if (count !== 0) {
    setTimeout(afterOneSecond, 1000);
  }
}

const timeout = setTimeout(afterOneSecond, 1000);
