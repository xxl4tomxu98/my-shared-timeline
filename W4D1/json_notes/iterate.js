const allInputs = document.querySelectorAll( 'a' );
const urlToSearch = 'https://github.com/byverdu';
let found;
let position;

// Ways to iterate over a NodeList to find an element

// 1
allInputs.forEach(( link, index ) => {
  if (link.href.indexOf( urlToSearch ) !== -1 ) {
    position = index;
  }
});
found = allInputs[ position ];

// 2
for ( let i = 0; i <= allInputs.length; i++ ) {
  if (allInputs[ i ].href.indexOf( urlToSearch ) !== -1 ) {
    position = index;
  }
}
found = allInputs[ position ];

// 3
found = [].find.call( allInputs, link => link.href === urlToSearch );

// 4
found = Array.from( allInputs ).find( link => link.href === urlToSearch );

//5
found = [...allInputs].find(link => link.href === urlToSearch);
