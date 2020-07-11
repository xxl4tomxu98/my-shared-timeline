

// window.onload = () => {
//   console.log("This script will load after resources and DOM loaded");
// };
//console.log("This will run after the DOM loaded");
document.cookie = "monster_name = cookie";
document.cookie = "favorate_cookie = snickerdoodle";
setCookie("myCookie", "choklateApple");
setCookie("dog", "Fido");
setCookie("cat", "Jet");
//window.alert();
function setCookie(name, value) {
  document.cookie = `${name} = ${value}`;
}

function getCookies() {
  let arr = document.cookie.split("; ");
  return arr;
}

//console.log(getCookies());

function getCookieValue(name) {
  let arr = document.cookie.split('; ');
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let words = el.split('=');
    if (words[0] === name) {
      return words[1];
    }
  }
  return null;
}

function alertCookieValue(name) {
  const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith(`${name}`))
  .split('=')[1];
  alert(cookieValue);
}

function checkCookieExist(name){
  //ES5
  if (document.cookie.split(';').some(function(item) {
    return item.trim().indexOf(`${name}`) == 0
  })) {
    console.log('The cookie name exists (ES5)')
  }
  //ES2016
  if (document.cookie.split(';').some((item) => item.trim().startsWith(`${name}`))) {
    console.log('The cookie name exists (ES6)')
  }
}

function specificCookieValue(name,value){
  //ES5
  if (document.cookie.split(';').some(function(item) {
    return item.indexOf(`${name}=${value}`) >= 0;
  })) {
    console.log('The cookie name has value for value');
      }
  //ES2016
  if (document.cookie.split(';').some((item) => item.includes(`${name}=${value}`))) {
    console.log('The cookie name has value for value');
  }
}

//console.log(getCookieValue("monster_name"));

function deleteCookie(name) {
  let arr = document.cookie.split('; ');
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let val = getCookieValue(el);
    let words = el.split('=');
    if (words[0] === name) {
      arr.splice(i, 1);
      document.cookie = `${el}=${val}; expires=Fri, 31 Dec 1999 23:59:59 GMT`;
      // document.cookie = `=${val}; expires=Fri, 31 Dec 1999 23:59:59 GMT`;
      //document.cookie = `${el}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      return;
    }
  }
  console.log("cookie name not found");
}

deleteCookie('myCookie');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setCookie("dimension", getRandomInt(500));

// let newWindow = window.open("https://en.wikipedia.org/wiki/Main_Page", "Test", "resizable", "width=getCookieValue('dimension')", "height=getCookieValue('dimension')");

// setCookie("newDimension", getRandomInt(500));

// newWindow.resizeTo(getCookieValue('newDimension'), getCookieValue('newDimension'));
// newWindow.resizeTo(500, 500);
// newWindow.resizeBy(-100, -100);

//bonus B enter key and value and create new cookies from user inout
window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("createCookie");
  button.addEventListener("click", event => {
    console.log(event.target);
    let newKey = document.getElementById('key').value;
    let newValue = document.getElementById('value').value;
    setCookie(newKey, newValue);
    console.log(document.cookie);
  });
});


//window.alert("We have some cookies!")
