const input = document.getElementById("my-input");
const button = document.getElementById("my-button");
const list = document.getElementById("my-list");

document.cookie = "cats=0";

// Session Storage...

// if (sessionStorage.getItem("inputText")) {
//   input.value = sessionStorage.getItem("inputText");
// }

// input.addEventListener("keydown", () => {
//   sessionStorage.setItem("inputText", input.value)
//   console.log(input.value);
// })




// Local Storage...

// const populateStorage = () => {
//   localStorage.setItem("inputText", input.value);
// };

// const setText = () => {
//   const currentText = localStorage.getItem("inputText");
//   input.value = currentText;
// };

// if (!localStorage.getItem("inputText")) {
//   populateStorage();
// }

// setText()

// input.addEventListener("keydown", populateStorage)




// Common use for Local Storage...
// Caching fetched data once in bulk rather than making numerous small requests.



// Side note, MIME type stands for Multipurpose Internet Mail Extensions
// On the web these serve a similar purpose to file extensions
// telling software how to open / read information in a file



// We store things in Web Storage as strings, but what if we want to store more complex things?
// JSON.stringify() and JSON.parse() to the rescue.
// These allow us to easily convert more complex things like arrays etc 
// and take them in and out of Web Storage easily.



// Lets mess around with that...

// button.addEventListener("click", () => {
//   const listEle = document.createElement("li");
//   listEle.innerHTML = input.value;

//   list.appendChild(listEle);

//   input.value = "";
// })

// const populateStorage = () => {
//   const nodesArr = document.querySelectorAll("li");
//   const textArr = [];
  
//   nodesArr.forEach(ele => textArr.push(ele.innerHTML));
//   localStorage.setItem("listItems", JSON.stringify(textArr));
  
//   if (nodesArr.length > 5) {
//     localStorage.setItem("listItems", "");
//     list.innerHTML = "";
//     alert("reset!")
//   }
// };

// const setList = () => {
//   const storedListStr = localStorage.getItem("listItems");
//   const parsedList = JSON.parse(storedListStr);

//   parsedList.forEach(listItem => {
//     const listEle = document.createElement("li");
//     listEle.innerHTML = listItem;

//     list.appendChild(listEle);
//   })
// };

// if (!localStorage.getItem("listItems")) {
//   populateStorage();
// }

// setList()

// button.addEventListener("click", populateStorage)