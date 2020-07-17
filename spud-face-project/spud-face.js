window.addEventListener("DOMContentLoaded", (event) => {
  //licenseForm is the user input form
  const licenseForm = document.getElementById('drivers-license-form');
  const licenseInfo = document.querySelectorAll('input');
  const cardFields = document.querySelectorAll('.license__info');
// ** Phase 1A: Get form values and display on driver’s license **
  // const title = document.getElementById('title').value;
  // const firstName = document.getElementById('first-name').value;
  // const lastName = document.getElementById('last-name').value;
  // const eyeColor = document.getElementById('eye-color').value;
  // const height = document.getElementById('height').value;
  // const licenseNum = document.getElementById('license-num').value;
  // const licenseNumConfirm = document.getElementById('license-num-confirm').value;
  // const cardTitle = document.getElementById('card-title');
  // const cardFirstName = document.getElementById('card-first-name');
  // const cardLastName = document.getElementById('card-last-name');
  // const cardEyeColor = document.getElementById('card-eye-color');
  // const cardHeight = document.getElementById('card-height');
  // const cardLicenseNum = document.getElementById('card-license-num');
  // const cardDonorSta = document.getElementById('card-donor-status');
  // //get the checkbox element by its id
  // const donorSta = document.getElementById('donor-status');
  //   licenseForm.addEventListener('submit', event => {
  //     event.preventDefault();
  //     if(donorSta.checked){
  //       cardDonorSta.innerHTML = "Organ Donor";
  //     } else {
  //       cardDonorSta.innerHTML = "Not Organ Donor";
  //     }
  //     cardTitle.innerHTML=title;
  //     cardFirstName.innerHTML = firstName;
  //     cardLastName.innerHTML = lastName;
  //     cardEyeColor.innerHTML = eyeColor;
  //     cardHeight.innerHTML = height;
  //     cardLicenseNum.innerHTML = licenseNum;
  //     if(licenseNum !== licenseNumConfirm){
  //        alert("License numbers have to match")
  //     }
  //   });

// ** Phase 1B: Update license with event delegation and event.target **
  licenseForm.addEventListener('click', event => {
    event.preventDefault();
    licenseInfo.forEach(field => {
      // licenseInfo comes from user input so extra licenseNumConfirm exists
      let licenseField = document.getElementById(`card-${field.id}`);
      if (licenseField !== null) {
        licenseField.innerHTML = field.value;
      }
    });
  });

// ** Phase 1C: Update license with event delegation and event.target **

  // licenseForm.addEventListener('input', event => {
  //   event.preventDefault();
  //   cardFields.forEach(field => {
  //     if(field.id.includes(event.target.id)) {
  //       field.innerHTML = `${event.target.value}`;
  //       //field.innerHTML = event.target.value;
  //     }
  //   });
  // });

// ** Phase 1D: following 4 lines of code does all phase1D i.e. input line by linet **

  // licenseForm.addEventListener('input', event => {
  //   const formInputItems = document.getElementById(`${event.target.id}`);
  //   const cardInputItems = document.getElementById(`card-${event.target.id}`);
  //   cardInputItems.innerHTML = `${event.target.value}`;
  // });


// ** Phase 2: Add focus and blur events to form inputs **
  licenseInfo.forEach(input => {
    input.addEventListener('focus', event => {
      event.target.style.backgroundColor = '#E8F5E9';
    });
    input.addEventListener('blur', event => {
      event.target.style.backgroundColor = 'initial';
    });
  });

  // ** Phase 3: Check that license numbers match **

  const licenseNumEle = document.getElementById('license-num');
  const licenseNumConfirmEle = document.getElementById('license-num-confirm');
  licenseNumConfirmEle.addEventListener('input', event => {
    if(licenseNumEle.value !== licenseNumConfirmEle.value){
      event.preventDefault();
      licenseNumEle.style.backgroundColor= 'Red';
      licenseNumConfirmEle.style.backgroundColor = 'Red';
    } else {
      licenseNumEle.style.backgroundColor= 'initial';
      licenseNumConfirmEle.style.backgroundColor = 'initial';
    }
  });

  // ** Phase 4: Update submit button click count **

  const licenseSubmit = document.querySelector('.form__submit')
  let count = 0;
  licenseSubmit.addEventListener('click', event => {
    event.preventDefault();
    count += 1;
    licenseSubmit.innerHTML = `Submitted ${count} Times`;
    //licenseSubmit.innerHTML = `${event.detail}`;
  });

// Bonus: create a Mr. Spud Face drag-and-drop game inside of your spud-face.html file.
  const handleDragStart = e => {
    e.target.classList.add('is-being-dragged');
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = event => {
    event.preventDefault();
    event.target.classList.add('is-active-drop-zone');
  };

  const handleDragLeave = event => {

    event.target.classList.remove('is-active-drop-zone');
  };

  const handleDragOver = event => {
    // Needed so that the "drop" event will fire.
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    draggedElement.draggable = false;
    event.target.appendChild(draggedElement);
  };

  document.querySelectorAll(".parts").forEach(part =>{
    part.addEventListener('dragstart', handleDragStart);
  });

  const dropZone = document.getElementById('drivers-license-card');
  dropZone.addEventListener('drop', handleDrop);
  dropZone.addEventListener('dragenter', handleDragEnter);
  dropZone.addEventListener('dragleave', handleDragLeave);
  dropZone.addEventListener('dragover', handleDragOver);

});
