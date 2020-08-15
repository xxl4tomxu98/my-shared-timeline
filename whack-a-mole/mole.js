// Write your JS here.

function popUpRandomMole(max) {
     let moles = document.querySelectorAll('.whack__mole-head:not(.whack__mole-head--whacked)');
     console.log(max);
     let mole = Math.floor(Math.random() * (max - 0 + 1));
     moles[mole].classList.remove('whack__mole-head--hidden');
     setTimeout(() => {
          moles[mole].classList.add('whack__mole-head--hidden');
     }, 1000);
}

window.addEventListener("DOMContentLoaded", event => {
     let max = 7;

     let interval = setInterval(popUpRandomMole, 1250, max);

     document.querySelector('.field')
          .addEventListener('click', event => {
               let head = event.target.closest('.whack__mole-head');
               if (!head) {

               } else if (head.classList.contains('whack__mole-head--hidden')) {

               } else {
                    head.classList.add('whack__mole-head--whacked');
                    head.classList.add('whack__mole-head--hidden');
                    max--;
                    if (max === -1) {
                         clearInterval(interval);
                         alert('You Win!');
                    } else {
                         clearInterval(interval);
                         interval = setInterval(popUpRandomMole, 1250, max);
                    }
               }
          });

});