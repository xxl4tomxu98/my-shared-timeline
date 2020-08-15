
const handleClick = () => {

  fetch('http://localhost:3000/name')
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
			}
			console.log(res)
      return res.json();
    })
    .then(data => {
  		console.log(data); // { name: 'Pancake' }
  		let randomName = document.getElementById('random-name');
      randomName.innerHTML = data.name
    })
    .catch(err => {
      document.getElementById('error').innerHTML = err;
    })
};

const button = document.getElementById('my-button')
button.addEventListener("click", handleClick)




const form = document.getElementById('name-form');

const addName = () => {
	event.preventDefault();

	const formData = new FormData(form);
	const newName = formData.get('my-name'); // 'pancake'
	const data = JSON.stringify({ name: newName }); // { name: 'pancake' }

	const options = {
		method: 'POST',
		body: data,
		headers: {
			"Content-type":"application/json"
		}
	}

	fetch("http://localhost:3000/name/new", options)
		.then(res => {
			if (!res.ok) {
				throw Error(res.statusText);
			}
			return res.json()
		})
		.then(names => receiveNames(names))
		.then(() => clearInput())
		.catch(err => handleError(err))
}

function receiveNames(nameObject) { // { names: ['pancake'] }
  let namesContainer = document.getElementById("names-container");
	
	namesContainer.innerHTML = '';
	nameObject.names.forEach(name => {
		let newName = document.createElement("li");
		newName.innerHTML = name; // 'my comment'
		namesContainer.appendChild(newName);
	})
}

form.addEventListener('submit', addName)



function handleError(err) {
	console.log(err);
}

function clearInput() {
	let input = document.getElementById('name');
	input.value = '';
}