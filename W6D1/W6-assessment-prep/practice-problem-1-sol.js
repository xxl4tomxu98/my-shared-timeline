/**
 * Create two functions, shoutNow and shoutLater that accept a message and return a promise.
 * `shoutNow` should return the message in all uppercase with no delay
 * `shoutLater` should wait 5 seconds, then return the message in all uppercase
 *
 * Finally, create a function `argument` that uses `async` and `await` and calls
 * the functions you have defined but logs them one after another with no delay
 *
 */

 const shoutNow = function(message){
    return new Promise((resolve, reject)=>{
        return resolve(message.toUpperCase());
    })
 }

 const shoutLater = function(message){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(message.toUpperCase());
        }, 5000)
    })
 }

 shoutNow("loud noises").then(resp => console.log(resp));
 shoutLater("i don't know what we're yelling about").then(resp => console.log(resp));

 const argument = async function(){
    const firstArg = await shoutNow("loud noises");
    const secondArg = await shoutLater("i don't know what we're yelling about");
    console.log(firstArg)
    console.log(secondArg)
 }

 argument();
