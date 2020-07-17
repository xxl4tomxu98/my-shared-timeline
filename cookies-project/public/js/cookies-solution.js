window.addEventListener("DOMContentLoaded", (event) => {

  // generate a random number inclusive of lower bound not the upper bound
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // store that number in a cookie
  document.cookie = "random_number=" + getRandomInt(500);

  //  get the new cookie value
  const getCookie = (key) => {
    const match = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return match ? match[2] : null;
  };
  const randomNumberCookie = getCookie("random_number");
  console.log(randomNumberCookie);

  // open a new window
  newWindow = window.open("https://www.delish.com/cooking/g1956/best-cookies/", "Cookies Recipes", "width=100, height=100");

  // set the width and height to the cookie value
  newWindow.resizeTo(randomNumberCookie, randomNumberCookie);

});
