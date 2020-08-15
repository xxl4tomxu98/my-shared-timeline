


## AJAX

1. Explain what an AJAX request is

2. Identifying the advantages of using an AJAX request.
//not the whole HTML page but json file transferred. data transferred is smaller and no page refreshing
3. Identify what the acronym AJAX means and how it relates to modern Web programming

4. Describe the different steps in an AJAX request/response cycle

5. Fully use the fetch API to make dynamic Web pages without refreshing the page

<!-- code the functions below 2 ways, referencing the catApi.md file -->


```javascript
// Using Promise chains for .then and .catch
const fetchImage = () => {

};

// Using async/await
function fetchImage() {

}

// Using Promise chains for .then and .catch
document.querySelector('#downvote').addEventListener('click', {
    // your code here ...
});

// Using async/await
document.querySelector('#downvote').addEventListener('click', {
    // your code here ...
});

// Functions you can use above, for reference
const handleResponse = (response) => {
	stopLoader();
	clearError();

	if (!response.ok) {
		throw response;
	}
	return response.json();
};

const handleError = (error) => {
	if (error.json) {
		error.json().then((errorJSON) => {
			document.querySelector('.error').innerHTML = `Error occured: ${errorJSON.message}`;
		});
	} else {
		console.error(error);
		alert('Something went wrong. Please try again!');
	}
};

const updateImageScore = (data) => {
	const { score } = data;
	document.querySelector('.score').innerHTML = score;
};
```
