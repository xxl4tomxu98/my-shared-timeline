/**
 * Create two functions, shoutNow and shoutLater that accept a message and return a promise.
 * `shoutNow` should return the message in all uppercase with no delay
 * `shoutLater` should wait 5 seconds, then return the message in all uppercase
 *
 * Finally, create a function `argument` that uses `async` and `await` and calls
 * the functions you have defined but logs them one after another with no delay
 *
 */
function shoutNow(message){
  return new Promise((resolve, reject) =>{
    resolve(message.toUpperCase());
  });
}

function shoutLater(message){
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(message.toUpperCase()), 5000);
  });
}

async function argument(){
   console.log(await shoutNow("get up now"));
   console.log(await shoutLater("get up 5 seconds later"));
}

argument();
