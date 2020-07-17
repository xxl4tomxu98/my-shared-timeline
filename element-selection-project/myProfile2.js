window.addEventListener("DOMContentLoaded", event => {
  const myName = document.createElement('h1');
  myName.setAttribute('id', "name");
  myName.setAttribute("class", "name");
  const newContent = document.createTextNode("Tom Xu");
  myName.appendChild(newContent);
  const myImage = document.createElement('img');
  myImage.src = "olympiaNP.jpg";
  myName.appendChild(myImage);
  document.body.appendChild(myName);
  //myName.outerHTML="<h3>tomxu!</h3>";
  const myList = document.createElement('ul');
  // Set the attribute with Element.setAttribute()
  myList.setAttribute("id", "details");
  myList.setAttribute("class", "my-details");
  // Append the element to the page with Node.
  const detailsArr = [
      "<li>I like to drink beer.</li>",
      "<li>I have two bikes and two cars.</li>",
      "<li>My favorite place to get lunch is Panara.</li>",
      "<li>On the weekends, I play Tennis.</li>"
  ];
  const liString = detailsArr.join(" ");
  const listElement = document.getElementById("details");
  listElement.innerHTML = liString;
  document.body.appendChild(myList);


  // const liNotes = myList.childNodes;
  // for (let value of liNotes.values()) {
  //   value.className = "detail";
  // }
  // one other way to do this
  const allLis = document.querySelectorAll("li")
  // and then use forEach() iterate over the allLis to
  allLis.forEach(ele => {
      ele.setAttribute("class", "detail");
  });
  const myTime = () => {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();
// modified here
      myClock.innerHTML = `I live in Newark, DE, and it's currently ${hours}:${minutes}:${seconds}`;
  }
  setInterval(myTime, 1000);
  const myCountDown = () => {
      const today = new Date();
      const birthday = new Date(2021, 4, 10, 3, 24, 0);
      let elapsed = birthday.getTime() - today.getTime();
      elapsed = Math.floor(elapsed/3600000/24);
      bDCountDown.innerHTML = `My birthday countdown is ${elapsed} days away`;
  }
  setInterval(myCountDown, 1000);
  const myClock = document.createElement('li');
  myClock.setAttribute('id', "clockLi");
  myClock.setAttribute('class', "detail");
  myList.appendChild(myClock);
  // changed h3 to li
  const bDCountDown = document.createElement("li");
  bDCountDown.setAttribute('id', "bDayCountDown");
  bDCountDown.setAttribute('class', "detail");
  myList.appendChild(bDCountDown);
});
const randomEle = document.createElement('div');
randomEle.setAttribute("class", "cool new shades");
console.log(randomEle.outerHTML);
randomEle.classList.remove("cool");
randomEle.classList.add("hot");
console.log(randomEle.outerHTML);
const classEles = document.getElementsByClassName("detail");
console.log(classEles);
const tagEles = document.getElementsByTagName("li");
console.log(tagEles);
// const myEle = document.getElementById('details');
// const closestEle = myEle.closest('ul');
// console.log(closestEle);
