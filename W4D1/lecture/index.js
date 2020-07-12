window.onload = () => {

  // VIDEO 1

  const extraCheese = document.getElementById('cheese');
  const mushrooms = document.getElementById('mushrooms');
  const spinach = document.getElementById('spinach');

  const receipt = document.getElementById('receipt');


  [extraCheese, mushrooms, spinach].forEach(checkbox => {
    checkbox.addEventListener('click', (event) => {
      let itemType = checkbox.getAttribute('id'); // cheese
      let price = checkbox.getAttribute('data-price'); // $2.00
      if (checkbox.checked) {
        let newItem = document.createElement('li');
        newItem.setAttribute('id', `${itemType}-item`); // cheese-item
        newItem.innerHTML = `${itemType}  -  $${price}`; // cheese - $2.00
        receipt.appendChild(newItem);
      } else {
        let item = document.getElementById(`${itemType}-item`);
        receipt.removeChild(item);
      }
    });
  })


  // VIDEO 2

  const paymentForm = document.getElementById('payment');

  const validateForm = (e) => {
    e.preventDefault();

    console.log(e);

    let errors = [];

    let ownerInput = document.getElementById('card-owner').value;
    let numInput = document.getElementById('card-num').value;
    let expInput = document.getElementById('card-exp').value;
    let cvvInput = document.getElementById('card-cvv').value;

    if (ownerInput.split(' ').length !== 2) {
      errors.push('Must provide valid card owner')
    }

    if (numInput.length !== 16) {
      errors.push('Card number must be 16 numbers long');
    }

    if (expInput.length !== 4) {
      errors.push('Expiration date must be in format MMYY')
    }

    if (cvvInput.length !== 3) {
      errors.push('Must provide valid CVV')
    }

    if (errors.length === 0) {
      // do something with the form
    } else {
      handleErrors(errors);
    }
  }

  function handleErrors(errors) {
    let errorsUl = document.getElementById('errors');
    errorsUl.innerHTML = '';
    //each error is a new list element
    errors.forEach(error => {
      let el = document.createElement('li');
      el.innerHTML = error;
      errorsUl.appendChild(el);
    })
  }

  paymentForm.addEventListener('submit', validateForm);


  // VIDEO 3



  const handleDragStart = e => {
    // console.log('begin dragStart');
    e.target.classList.add('is-being-dragged');
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
  }

  const handleDragEnter = e => {
    // console.log('begin dragEnter');
    e.preventDefault(); // so drop event will fire
    e.target.classList.add('is-active-drop-zone')
  }

  const handleDragLeave = e => {
    // console.log('begin dragLeave');
    e.target.classList.remove('is-active-drop-zone')
  }

  const handleDragOver = e => {
    // console.log('begin dragOver');
    e.preventDefault(); // so drop event will fire
  }

  const handleDrop = e => {
    // console.log('begin drop');
    const id = e.dataTransfer.getData('text/plain'); // pepperoni
    const draggedElement = document.getElementById(id);
    draggedElement.draggable = false;
    e.target.appendChild(draggedElement);
  }



  const toppings = document.querySelectorAll('.topping').forEach(topping => {
    topping.addEventListener('dragstart', handleDragStart);
  })

  const pizza = document.getElementById('drop-zone')

  pizza.addEventListener('drop', handleDrop);
  pizza.addEventListener('dragenter', handleDragEnter);
  pizza.addEventListener('dragleave', handleDragLeave);
  pizza.addEventListener('dragover', handleDragOver);


  // VIDEO 4


  pizza.addEventListener('click', event => {
    let item = event.target;
    // debugger

    console.log('Target: ', event.target.id);
    console.log('Current Target: ', event.currentTarget.id);

    if (item.classList.contains('topping')) {
      pizza.removeChild(item)
    }
  })

  // document.querySelectorAll('.has-event').forEach(el => {
  //   el.addEventListener('click', (event) => {
  //     console.log(event.target.id)
  //   });
  // })
}
