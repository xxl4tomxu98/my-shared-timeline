window.addEventListener("DOMContentLoaded", (event) => {
    console.log('hi from js file');
    addElement('h3', 'pineapple');
    addClock();
});

function addElement(elementType, id) {
    // create new element
    const newElement = document.createElement(elementType); // div
    
    // set it's ID attribute
    newElement.setAttribute("id", id);
    
    // Give the element text
    newElement.innerHTML = "MY NEW DIV"

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);
};

function addClock() {
    // 1. selecting the title element
    const title = document.querySelector("title");

    // create a timeCallback function
    const timeCallback = () => {
        const date = new Date(); // ???
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        // <title> THIS IS INNER HTML </title>
        title.innerHTML = `${hours}:${minutes}:${seconds}`;
    };

    // kick off the time func every second
    setInterval(timeCallback, 1000);
}