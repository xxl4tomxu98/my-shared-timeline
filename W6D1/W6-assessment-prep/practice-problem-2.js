/**
 * In this file, create and export a function named compareToTen that
 * accepts a number and returns a Promise object.
 * The promise will resolve with the number if the number
 * is greater than 10 and reject if the number is less than 10
 *
 * Function name: compareToTen
 * Parameters:
 *   n: the number you are comparing
 * Return value: a Promise that resolves or rejects based on the number

 * should log "Greater than 10: 15"
 compareToTen(15)
    .then(result => console.log(`Greater than 10: ${result}`))
    .catch(error => console.log(`Less than 10: ${error}`))
 * should log "Less than 10: 8"

 compareToTen(8)
    .then(result => console.log(`Greater than 10: ${result}`))
    .catch(error => console.log(`Less than 10: ${error}`))
 **/

 function compareToTen(n) {
   return new Promise((resolve, reject)=>{
     if(n > 10){
       resolve(n);
     } else if (n < 10){
       reject(n);
     }
   });
 }


compareToTen(15)
    .then(result => console.log(`Greater than 10: ${result}`))
    .catch(error => console.log(`Less than 10: ${error}`))

compareToTen(8)
    .then(result => console.log(`Greater than 10: ${result}`))
    .catch(error => console.log(`Less than 10: ${error}`))
