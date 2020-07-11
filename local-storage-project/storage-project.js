window.addEventListener("DOMContentLoaded", (event) => {
  const showCart = () => {
    const shoppingCart = document.getElementById("shopping-cart");
    for(let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        let numBought = localStorage.getItem(key);
        let numSpinner=document.createElement("input");
        numSpinner.setAttribute("type", "number");
        numSpinner.setAttribute("class", "form__field-quantity");
        numSpinner.setAttribute("id", "spin");
        const buyingItem = document.createElement("div");
        buyingItem.setAttribute('id', key);
        buyingItem.innerHTML = `${key} : ${numBought} `;
        const removeButton = document.createElement("button");
        //removeButton.innerHTML = "remove";
        const removeText = document.createTextNode("remove");
        removeButton.setAttribute("id", "item__remove");
        removeButton.appendChild(removeText);
        buyingItem.appendChild(removeButton);
        buyingItem.appendChild(numSpinner);
        shoppingCart.appendChild(buyingItem);
    }
    removeItem();
  };

  const storeItem = () => {
    const button = document.getElementById("add-to-cart");
    button.addEventListener("click", event =>{
      const optionItems = document.getElementById("items");
      const itemQuantity = document.getElementById("quantity");
      let ind = optionItems.selectedIndex;
      if(ind&& !(ind && optionItems[ind].value in localStorage)){
        localStorage.setItem(optionItems[ind].value, itemQuantity.value);
      } else if(ind && optionItems[ind].value in localStorage){
        let val = Number(localStorage.getItem(optionItems[ind].value));
        localStorage.setItem(optionItems[ind].value, val+Number(itemQuantity.value));
      }
    });
    showCart();
  };

  const removeItem = () => {
    document.getElementById("shopping-cart")
            .addEventListener("click", event =>{
      let item = event.target.parentNode.id;
      if(event.target.id ==="item__remove"){
        document.getElementById(item).innerHTML='';
        localStorage.removeItem(item);
          //location.reload();
      } else if (event.target.id === "spin"){
        localStorage.setItem(item, event.target.value);
      }
    });
  };
  storeItem();
});
