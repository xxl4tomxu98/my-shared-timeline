window.addEventListener('DOMContentLoaded', event => {

  let menu = document.createElement('div');
  menu.style.display = 'none';
  document.querySelector('body').appendChild(menu);
  document.querySelector('.fa-cog')
  .addEventListener('click', event => {
      menu.style.position = 'relative';
      let styles = getComputedStyle(menu);
      menu.style.bottom = '20em';
      menu.style.right = '15em';
      if (styles.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = "block";
        let child = document.querySelector('.pref');
        child.classList.remove('pref--hidden');
        menu.appendChild(child);
      }
  });

  let search = document.createElement('input');
  search.setAttribute('type', 'search');
  search.setAttribute('placeholder', 'Search');
  let go = document.createElement('button');
  go.innerHTML = "GO";
  document.querySelector('.masthead__menu-and-search')
    .appendChild(search);
  document.querySelector('.masthead__menu-and-search')
    .appendChild(go);
  search.classList.add('search-bar');
  go.classList.add('masthead__actions-buttons');
  go.style.display = 'none';

  document.querySelector('.fa-search')
    .addEventListener('click', event => {
      let styles = getComputedStyle(search);
      if (styles.display === 'block') {
          console.log('here');
          search.style.display = 'none';
          go.style.display = 'none';
      } else {
          search.style.display = 'inline-block';
          go.style.display = 'inline-block';
          console.log(styles.display);
      }
  });
});
