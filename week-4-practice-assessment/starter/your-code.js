
window.addEventListener("DOMContentLoaded", () => {
    // Put your code in here to make each of the tests described in the HTML
    // file pass.
    const myButton = document.getElementById("make-circle-blue");
    myButton.addEventListener("click", event =>{
      let myCircle = document.getElementById("blue-circumference-circle");
      myCircle.setAttribute("class", "blue");
      //myCircle.classList.add("blue");
    });

    const myButton1 = document.getElementById("remove-content-from-apples");
    myButton1.addEventListener("click", e =>{
      let myDiv = document.getElementById("apples-div");
      myDiv.innerHTML = '';
    });

    const myButton2 = document.getElementById("add-image-btn");
    myButton2.addEventListener("click", e =>{
      let myDiv1 = document.getElementById("add-image");
      // myDiv1.children.length === 0
      // myDiv1.hasChildrenNodes()
      if(myDiv1.childElementCount===0){
        let myImg = document.createElement("img");
        myImg.src = "./images/logo-emblem-black.svg";
        myDiv1.appendChild(myImg);
      }
    });

    const myInput = document.getElementById("bubble-friend");
    myInput.addEventListener("keydown", e =>{
      e.stopPropagation();
    });

    //let total = 1; This is global variable defined in script file
    /* const totalValue = document.getElementById("total-value");
    const myButton3 = document.getElementById("multiply");
    myButton3.addEventListener("click", e =>{
      total *= 2;
      totalValue.innerHTML = total.toString();
    });
    const myButton4 = document.getElementById("add-two");
    myButton4.addEventListener("click", e =>{
      total += 2;
      totalValue.innerHTML = total.toString();
    });
    const myButton5 = document.getElementById("reset-total");
    myButton5.addEventListener("click", e =>{
      total = 1;
      totalValue.innerHTML = total.toString();
    });
 */
    const parentDiv = document.getElementById("problem-area-5");
    const totalValue = document.getElementById("total-value");
    parentDiv.addEventListener("click", e =>{
      if(e.target.id ==="multiply"){
        total *= 2;
      } else if(e.target.id ==="add-two"){
        total += 2;
      } else if(e.target.id ==="reset-total"){
        total = 1;
      }
      totalValue.innerHTML = total.toString();
    });


    const myButton6 = document.getElementById("store-flavor");
    const myInput1 = document.getElementById("fav-flavor");
    console.log(localStorage.key);
    if(localStorage.length ===1){
      myInput1.value = localStorage.key(0);
    }
    myButton6.addEventListener("click", e =>{
      localStorage.setItem(myInput1.value, '');
    });

    const checkmark = document.getElementById("will-not-check");
    checkmark.addEventListener("click", event =>{
      event.preventDefault();
    });
});
