const handleClick = () => {
  fetch("/name").then(res => res.json()).then(data => {
    console.log(data)
  });
};

document.querySelector("button").addEventListener("click", handleClick);
