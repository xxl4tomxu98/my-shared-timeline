w4d1 Monday
## Explain the difference between the BOM (browser object model) and the DOM(document object model).
    The BOM is the browser itself that is made into an object. This browser object includes document objects. The DOM is an object that has a tree hiarachy of objects - this includesthe HTML elements

## Given a diagram of all the different parts of the Browser identify each part. Use the Window API to change the innerHeight of a user's window.
    User Interface - the browser interface, which includes the address bar, back and forward buttons, bookmarks menu, etc. Includes everything expect for the requested page content
                ^^^^^^^^^^^^
    Browser Enginge = manages the interactions between the UI and the rendering engine
                ^^^^^^^^^^^^^^
    Rendering enginge - displays, or renders, the requested page content. If the requested content is HTML, it will parse HTML and CSS and render the parsed content
        The three below (Networking, JS interpreter, and UI backend are all part of the rendering engine)

    Networking - handles network calls, such as HTTP requests
    JS Interpreter - parses and executes Javascript code
    UI Backend - Used for drawing basic Widgets like combo boxes and windows, uses operating systems UI methods

    Data persistence - the persistence of data stored in the browser such as cookies or localStorage (this is part of browser engine)

    ```js
    const newWindow = window.resizeTo(width, height)
    ```

## Identify the context of an anonymous functions running in the Browser (the window).
    Window object


## Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using DOMContentLoaded)

```js
  <script type="text/javascript" src="spud-face.js"></script> //this is in the head of HTML file

  window.addEventListener("DOMContentLoaded", () => {

  }) //in js file and wraps all the code within
```

## Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads

```js
    <script type="text/javascript" src="spud-face.js"></script> //src="" is the name of the file/file path
```

## Identify three ways to prevent JS code from executing until an entire HTML page is loaded

```js
    document.addEventListener("DOMContentLoaded", () => {

    }) // put in js then put all code within

    add <script></script> at the bottom of the page right before the last </html> //this ensures the script isnt processed until the rest of the DOM loads

    <script async defer type="text/javascript" src="spud-face.js"></script> //adding async defer means to import the javascript after DOM is loaded. older browser recognize defer while newer recognize async. Having both does not cause errors

    window.onload = () => {

    } // this doesnt work for delaying after DOMContentLoaded
```
## Label a diagram on the Request/Response cycle.
    https://open.appacademy.io/learn/js-py---jun-2020-online/week-4-jun-2020-online/request-response-cycle-lecture
    computer sends requests to server/data center. The server processes the request and sends back the response

## Explain the Browser's main role in the request/response cycle. (1.Parsing HTML,CSS, JS 2. Rendering that information to the user by constructing a DOM tree and rendering it)
    when the client receives a response from the server the browser parses the HTML/CSS/JS and renders the information by constructing a DOM tree then showing it on the user interface

## Given several detractors - identify which real-world situations could be implemented with the Web Storage API (shopping cart, forms saving inputs etc.)

    https://open.appacademy.io/learn/js-py---jun-2020-online/week-4-jun-2020-online/browser-basics-quiz

    *storing info about a shopping cart and the products in a users cart
    *saving data on forms
    *info about user (preferences, buying habits)
    *to access whats in local or session storage go to google chrome > application tab


    Store info about a users site interactions (recently viewed pages, shoping cart etc)
    store session-specific info (login stat, multi step form etc)
    store data that should persist when the browser is reloaded
    store any key-value pair that doesnt need to be read by the server
    cookies seperate from webstorage and predates them. Cookies can be read by the server as well as the client. Web storage data can be read only client side

## Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.
    Chrome dev tools > Application > Cookies > delete cookie



w4d2 Tuesday
## window.onload automatically invokes a function in it **add to anki

 ```js
    window.addEventListener("DOMContentLoaded",() => {

    }) //good practice is to put this in js file and put all js code within it
```

## Given HTML that includes <div id=”catch-me-if-you-can”>HI!</div>, write a JavaScript statement that stores a reference to the HTMLDivElement with the id “catch-me-if-you-can” in a variable named “divOfInterest”.

```js

    cont divOfInterest = document.getElementByID('catch-me-if-you-can') //getElementbyId() onlt returns the first ID. Best practice is to never repeat an ID
    // as opposed to in querySelectorAll, getElementbyId() didnt need to put # in front of the ID in getElementByID because it already knows its searching for an ID

```


Given HTML that includes seven SPAN elements each with the class “cloudy”, write a JavaScript statement that stores a reference to a NodeList filled with references to the seven HTMLSpanElements in a variable named “cloudySpans”.

 ```js
    const spansOfInterest = document.querySelectorAll('span.cloudy') //in documentquerySelectorAll() classes are noted with . while IDs are noted with #, if this isnt finding what you're looking for check for the correct . # before the word
    window.onload = console.log(spansOfInterest)\
```


## Given an HTML file with HTML, HEAD, TITLE, and BODY elements, create and reference a JS file that in which the JavaScript will create and attach to the BODY element an H1 element with the id "sleeping-giant" with the content "Jell-O, Burled!".

```js
    const addElement = () => {
        const newElement = document.createElement('h1')
        newElement.setAttribute("id", "sleeping-giant") //syntax for setAttribute is ("attribute", "attributeValue")
        newElement.innerHTML = "Jello-o, Burled!"
                        //OR use the below two lines to acheive the same thing as .innerHTML
        //const newContent = document.createTextNode('Jello-o, Burled!')
        //newElement.appendChild(newContent)

        document.body.appendChild(newElement) // adds the created element to the body of HTML
    }
```
Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with the SCRIPT's SRC attribute referencing an empty JS file, write a script in the JS file to create a DIV element with the id "lickable-frog" and add it as the last child to the BODY element.

    ```js
    const lastElement = document.createElement('div')
    lastElement.setAttribute('id', 'lickable-frog')
    document.body.appendChild(lastElement)
    //see above for notes on various methods
    ```

Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with no SRC attribute on the SCRIPT element, write a script in the SCRIPT block to create a UL element with no id, create an LI element with the id "dreamy-eyes", add the LI as a child to the UL element, and add the UL element as the first child of the BODY element.

```html
    <script> //this is in the HTML file because the HTML is not sourcing a js file
        const addElement = () => {
            const listElement= document.createElement('ul')
            const listItem = document.createElement('li')
            listItem.setAttribute('id', 'dreamy-eyes')
            listElement.appendChild(listItem) //adds the created listItem (<li id="dreamy-eyes"></li>) as a child of listElement (<ul></ul>) making it <ul><li id="dreamy-eyes"></li></ul>
            document.body.appendChild(listElement) //adds above to bdy
        }
        window.addEventListener('DOMContentLoaded', () => {
            addElement; //note it does not need to be invoked with ()
        }) //ensures the addElement runs after the DOM loads
    </script>
```

## Write JavaScript to add the CSS class "i-got-loaded" to the BODY element when the window fires the DOMContentLoaded event.

```js
    window.addEventListener('DOMContentLoaded', () => {
        document.body.setAttribute("class", "i-got-loaded") //class is an attribute that can be put on a tag
    })
```
## Given an HTML file with a UL element with the id "your-best-friend" that has six non-empty LIs as its children, write JavaScript to write the content of each LI to the console.

```js
    window.addEventListener('DOMContentLoaded', () => {
        const parent = document.getElementByID('your-best-friend')
        const childNodes = parent.childNodes() // this is a property of any dom node to access children of that node

        for(let value of childNodes.values(){ //childNodes.values returns an array of the various values,
            console.log(value)
        }) //this for loop iterates through the array of values returned by childNodes.values
    })
```

## Given an HTML file with a UL element with the id "your-worst-enemy" that has no children, write JavaScript to construct a string that contains six LI tags each containing a random number and set the inner HTML property of ul#your-worst-enemy to that string.
```js

    window.addEventListener('DOMContentLoaded', () => {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max)) //Math.random() generates a decimal which is multiplied by max. Then Math.floor takes the result of that inner multiplication and returns the largest integer less than or equal to the result
        } //function to generate a random #

        const liArr = []
        for(let i = 0; i < 6; i++) { //iterates 6 times as per the problem
            liArr.push("</li>" + getRandomInt(10) + "</li>") // each iteration adds an <li> with a random number to our array
        }
        const liString = liArr.join('') //converts our array into a single string
        const listElement = document.getElementById('your-worst-enemy')
        listElement.innerHTML = liString //sets the innerHTML of ul#your-worst-enemy to that string
    })
    }
```
Write JavaScript to update the title of the document to the current time at a reasonable interval such that it looks like a real clock.
assume you have a <title id='title'> in head of html file

```js
window.addEventListener('DOMContentLoaded, (event) => {
    const title = document.getElementByID('title') //<title></title> is the tab of a browser, check there to see code
    const getTime = () => {
        const date = new Date(); //This is a static snapshot of the date. MDN new date for more info.
        const seconds = date.getSeconds() //.getSeconds() is a built in method of date
        const minutes = date.getMinutes() //.getMinutes() is a built in method of date
        const hours = date.getHours() //.getHours() is a built in method of date

        title.innerHTML = hours + ":" + minutes + ":" + seconds
    }
    setInterval(getTime, 1000) //the getTime function returns a static number that doesnt change. To simulate a ticking clock, the function needs to be called over and over
})
```
w4d3 Wednesday
## Given an HTML page that includes <button id="increment-count">I have been clicked <span id="clicked-count">0</span> times</button>, write JavaScript that increases the value of the content of span#clicked-count by 1 every time button#increment-count is clicked.

```js
window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("increment-count");
    const count = document.getElementById("clicked-count"); //this is the <span> referenced in the question. Keep in mind the span is within the innerHTML of <button></button>
    let clicks = 0
    button.addEventListener("click", (event) => { //this function closes over the outer clicks above to ensure it keeps track of the change
        clicks += 1;
        count.innerHTML = clicks; //changes the innerHTML of the span that is within the innerHTML of button
    })
})
```

## Given an HTML page that includes <input type="checkbox" id="on-off"><div id="now-you-see-me">Now you see me</div>, write JavaScript that sets the display of div#now-you-see-me to "none" when input#on-off is checked and to "block" when input#on-off is not checked.

```js
const checkbox = document.getElementById("on-off");
const divShowHide = document.getElementById("now-you-see-me");

checkbox.addEventListener("click", (event) => { //this makes the function run when the checkbox is clicked
    if(checkbox.checked) { //.checked is a built in method of the checkbox type, returns a boolean
        divShowHide.style.display = "block" // .style.display are built in methods that can change elements
    } else {
        divShowHide.style.display = "none" //"none" will make it not appear on page
    }
})
```

Or you could css classes with css styling linked as below

```js
// script.js
// we need to wait for the stylesheet to load
window.onload = () => {
  // store the elements we need in variables
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  // add an event listener for the checkbox click
  checkbox.addEventListener("click", event => {
    // use the 'checked' attribute of checkbox inputs
    // returns true if checked, false if unchecked
    if (checkbox.checked) {
      // if the box is checked, show the div
      divShowHide.classList.remove("hide"); //classList is a built in method that adds a css class attribute to the element that it is called on.
      divShowHide.classList.add("show"); // node that this adds class="show" to the divShowHide element, looking like <div id="on-off" class="show">Now you see me</div> the css below then applys the styling for .show
      // else hide the div
    } else {
      divShowHide.classList.remove("show");
      divShowHide.classList.add("hide");
    }
  });
};
```
```css
.show {
  display: block;
}
.hide {
  display: none;
}
```

## Given an HTML file that includes <input id="stopper" type="text" placeholder="Quick! Type STOP">, write JavaScript that will change the background color of the page to cyan five seconds after a page loads unless the field input#stopper contains only the text "STOP".

```js
window.addEventListener("DOMContentLoaded", (event) => {
    const stopCyanMadness = () => {
        const inputValue = document.getElementById("stopper").value; // .value is a built in method that returns what the user has put into various form elements

        if (inputValue !== "STOP") { //checks to see if the user wrote STOP
            document.body.style.backgroundColor = "cyan"
        }
    }
    setTimeout(stopCyanMadness, 5000)
})
```
## Given an HTML page with that includes <input type=”text” id=”fancypants”>, write JavaScript that changes the background color of the textbox to #E8F5E9 when the caret is in the textbox and turns it back to its normal color when focus is elsewhere.

```js
window.addEventListener("DOMContentLoaded", (event) => {
    const input = document.getElementById("fancypants")

    input.addEventListener("focus", event => { //"focus" is an event that triggers when a user selects it
        event.target.style.backgroundColor "#E8F5E9"
    })
    input.addEventListener("blur", event => { //"blur" is an event that triggers when a user deselects a previously focused event
        event.target.style.backgroundColor = "initial"
    })
})
```

## Given an HTML page that includes a form with two password fields, write JavaScript that subscribes to the forms submission event and cancels it if the values in the two password fields differ.

```js
window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("signup-form");

    const checkPasswordMatch = event => {
        const passwordValue = document.getElementById("password").value; //gets what the user typed
        const passwordConfirmValue = document.getElementById("confirm-password").value; // gets what the user typed

        if(passwordValue !== passwordConfirmValue) { //compares what the user types
            event.preventDefault(); //if what the user typed is wrong you dont want the button to submit the button, .preventDefault() is a built in function to do that
            alert("Passwords must match!");
        } else {
            alert("The form was submitted");
        }
    }
    form.addEventListener("submit", checkPasswordMatch) //"submit" is an event that occurs when the button that has an attached listener is pressed
})
```

## Given an HTML page that includes a div styled as a square with a red background, write JavaScript that allows a user to drag the square around the screen.

```js
    window.addEventListener("DOMContentLoaded", (event) => { //make sure to put draggable attribute on what needs to be dragged so the red div needs <div draggable></div>
    const handleDragStart = e => {
        e.target.classList.add('is-being-dragged'); //adds "class="is-being-dragged"" to whatever is being dragged
        e.dataTransfer.setData('text/plain', e.target.id); //syntax for dataTransfer.setData() is dataTransfer.setData("format", data) dataTransfer is a built in object that holds the information of something else while it is dragged
        e.dataTransfer.dropEffect = 'move'; //has 4 effects, "copy" - a copy of the source item is made at the new location "move" -an item is moved to a new location "link" - a link is established to the source at the new location "none" - the item may not be dropped
    }

const handleDragEnter = e => {
    e.target.classList.add('is-active-drop-zone'); //e.target is a reference to the object onto which the event was dispatched, if it enters a certain area it will be given a class="is-active-drop-zone"
}

const handleDragLeave = e => {
    e.target.classList.remove("is-active-drop-zone") //e.target is a reference to the object onto which the event was dispatched, this removes the class="is-active-drop-zone" assigned when it entered a certain area
}

const handleDrop = e => {
    const id = e.dataTransfer.getData('text/plain'); //retrieves the data stored within the dataTransfer Object (this was set with dataTransfer.setData() in the handleDragStart function)
    const draggedElement = document.getElementById(id);
    draggedElement.draggable = false; //makes the draggable attribute on the element not true anymore
    e.target.appendChild(draggedElement); // appends the draggedElement to this element
}
const handleDragOver = e => {
    // Needed so that the "drop" event will fire. a browsers default behavior might not be whats expected. For example if you drag a link, the browsers default behavior would be to open the link
    e.preventDefault();
  };

 document
    .getElementById('red-square')
    .addEventListener('dragstart', handleDragStart); //'dragstart' is a built in event that starts when a user starts dragging a draggable element

const dropZone = document.getElementById("drop-zone");
dropZone.addEventListener('drop', handleDrop); //drop is a built in event that occurs when an element or text selection is dropped ona valid drop target
dropZone.addEventListener('dragenter', handleDragEnter);
dropZone.addEventListener('dragleave', handleDragLeave);
dropZone.addEventListener('dragover', handleDragOver);
})
```

## Given an HTML page that has 300 DIVs, create one click event subscription that will print the id of the element clicked on to the console.

    ```js
    window.addEventListener("DOMContentLoaded", (event) => {
        documnet.body.addEventListener('click', (event) => {
            console.log(event.target.id)
        })
    }
    ```

## Identify the definition of the bubbling principle.

    When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. Think about if you have 3 squares on top on each other on a page. If you click the inner most square, the browser sees it as you clicking the two below it aswell. You can use evet.stopPropagation(); to prevent it from bubbling past the point of where you call it

## Identify and generate valid JSON-formatted strings
    Javascript Value 1: [1, 2, 3]
    JSON-formatted Value 1: "[1, 2, 3]"

    Javascript Value 2: 'this is "text"'
    JSON-formatted Value 2: "this is \"text\""

    Javascript Value 3:
        She woke him up with
        her Ramones ringtone "I Want
        to be Sedated"
    JSON-formatted Value 3:
        "She woke him up with\nher Ramones ringtone \"I want\nto be Sedated\""

    Javascript Value 4: { person: true, name: "Roberta" }
    JSON-formatted Value 4: "{ \"person\": true, \"name\": \"Roberta\" }"

## Use JSON.parse to deserialize JSON-formatted strings
    JSON.parse(string)

## Use JSON.stringify to serialize JavaScript objects
    JSON.stringify(value)

## Correctly identify the definition of "deserialize"
    When you take some text (or something another computer has sent to your program) and turn it into data

## Correctly identify the definition of "serialize"
    When you have some data and you want to turn it into a string (or some other kind of value like "binary") so your program can send it to another computer

## Write JavaScript to store the value "I <3 falafel" with the key "eatz" in the browser's local storage.
    localStorage.setItem(keyName, keyValue)

## Write JavaScript to read the value stored in local storage for the key "paper-trail".
    localStorage.getItem(keyName)
