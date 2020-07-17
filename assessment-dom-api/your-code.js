// Put your code in here to make each of the tests described in the HTML file
// pass.
document.addEventListener("DOMContentLoaded", event =>{
  const myButton = document.getElementById("turn-square-red");
  const myDiv = document.getElementById("red-outlined-square");
  myButton.addEventListener("click", event=>{
    myDiv.classList.add("red");
  });

  const myButton2 = document.getElementById("add-content-to-rectangle");
  const myDiv2 = document.getElementById("empty-rectangle");
  myButton2.addEventListener("click", event=>{
    myDiv2.innerHTML="XYZ";
  });

  const myButton3 = document.getElementById("add-image-to-rectangle");
  const myDiv3 = document.getElementById("lonely-square");
  myButton3.addEventListener("click", event=>{
    const myImg = document.createElement("img");
    myImg.src = "./images/logo-emblem-black.svg";
    myDiv3.appendChild(myImg);
  });

  const myDiv4 = document.getElementById("bubble-trouble");
  myDiv4.addEventListener("click", event=>{
    event.stopPropagation();
  });


  const myArea = document.getElementById("problem-area-5");
  const myNum = document.getElementById("counter-value");
  myArea.addEventListener("click", event=>{
    if(event.target.id==="increment"){
      counterValue += 1;
    } else if(event.target.id==="decrement"){
      counterValue -= 1;
    } else if(event.target.id==="zero-out"){
      counterValue = 0;
    }
    myNum.innerHTML = counterValue;
  });


  const myInput = document.getElementById("my-name-is");
  if(localStorage.getItem("myName")){
    myInput.value = localStorage.getItem("myName");
  }
  myInput.addEventListener("keyup", event=>{
    localStorage.setItem("myName", myInput.value);
  });

  const myPrevent = document.getElementById("going-away");
  myPrevent.addEventListener("click", event=>{
    event.preventDefault();
  });
});
