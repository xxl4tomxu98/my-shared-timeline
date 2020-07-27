export function getClue(cb){
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener("readystatechange", () => {
        if (myRequest.readyState !== XMLHttpRequest.DONE) return;
        if (myRequest.status!==200 ){
          cb(myRequest.status);
        } else {
          const data = JSON.parse(myRequest.responseText);
          cb(null, data);
        }
    });
    myRequest.open('GET', 'https://jservice.xyz/api/random-clue');
    myRequest.send();
}

// export function getClue(cb) {
//  myRequest(cb) {
//     httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = alertContents;
//     httpRequest.open('GET', 'https://jservice.xyz/api/random-clue');
//     httpRequest.send();
//   }
//  alertContents(cb){
//     if (httpRequest.readyState !== XMLHttpRequest.DONE) return;
//     if(httpRequest.readyState===XMLHttpRequest.DONE){
//       if(httpRequest.status===200){
//         const data = JSON.parse(httpRequest.responseText)
//         cb(null, data)
//       } else{
//         alert("There was a problem.")
//         cb(httpRequest.status)
//       }
//     }
//   }
// }
