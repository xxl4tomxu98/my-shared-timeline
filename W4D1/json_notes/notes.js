// JSON Learning Objectives

// The objective of this lesson is to familiarize you with the JSON format and how to
// serialize to and deserialize from that format.

    // Identify and generate valid JSON-formatted strings
    // Use JSON.parse to deserialize JSON-formatted strings
    // Use JSON.stringify to serialize JavaScript objects
    // Correctly identify the definition of "deserialize"
    // Correctly identify the definition of "serialize"



// Storage Lesson Learning Objectives

    // Write JavaScript to store the value "I <3 falafel" with the key "eatz" in
        // the browser's local storage.
    // Write JavaScript to read the value stored in local storage for the key "paper-trail".


// -----------------------------------------------------
//           Cookies and Web Storage (Reading)
// -----------------------------------------------------

// What we learned...

//     What cookies are and when to use them
//     Differences between cookies and localStorage
//     Use cases for cookies and localStorage


// Cookies are used to store stateful information about a user.

// Remember that the "document" interface represents the webpage
// so that's where we can interact with our cookies...

// const cookie1 = "cats";
// document.cookie = cookie1;

// const cookie2 = "dogs=0";
// document.cookie = cookie2;

// const cookie3 = "lizards=1000";
// document.cookie = cookie3;

// const cookie4 = "cats=12";
// document.cookie = cookie4;

// const cookie4 = "cats=0";
// document.cookie = cookie4;



// Remember we can delete our cookies by adding an expiration datetime...

// document.cookie = "cats; expires = Thu, 01 Jan 1970 00:00:00 GMT";
// document.cookie = "cats=; expires = Thu, 01 Jan 1970 00:00:00 GMT";

// document.cookie = "cats; expires = 1 Jan 2070"
// document.cookie = "cats; expires = 1 Jan 1970"




// A newer way to store data in the browser is through the Web Storage API...

// sessionStorage:

//     Stores data only for a session, or until the browser window or tab is closed
//     Never transfers data to the server
//     Has a storage limit of 5MB (much larger than a cookie)


// localStorage:

//     Stores data with no expiration date and is deleted when clearing the browser cache
//     Has the maximum storage limit in the browser (much larger than a cookie)


// Like with cookies, this data can be saved only as a string!
// Web Storage is still for storing key-value pairs.









// ------------------------------------------------
//            Jason? No, JSON! (Reading)
// ------------------------------------------------

// What we learned...

    // Identify and generate valid JSON-formatted strings
    // Use JSON.parse to deserialize JSON-formatted strings
    // Use JSON.stringify to serialize JavaScript objects
    // Correctly identify the definition of "deserialize"
    // Correctly identify the definition of "serialize"








// JavaScript Object Notation
// JSON is just a string. It's just text.

// What does XML look like?
// <note>
//   <to>Elliot</to>
//   <from>Erin</from>
//   <heading>Reminder</heading>
//   <body>Don't forget about this weekend!</body>
// </note>



// Examples of literals in JavaScript...

// The value that means "true"	true
// The number of rows in this table	6
// A bad approximation of π	3.14
// An array that contains some US state names	["Ohio", "Iowa"]
// An object that represents Roberta	{ person: true, name: "Roberta" }



// JavaScript literal values in	JSON string representation...
// everything in JSON is actually a string!
// true	"true"
// false	"false"
// 12.34	"12.34"
// null	"null"



// String literals in JSON...
// 'this is "text"' --( JavaScript to JSON )--> "this is \"text\""



// JSON always uses double-quotes to mark strings!


// This is all cool in JavaScript too...
// let a = "Bob said, \"Well, this is interesting.\"";
// console.log(a);



// Another common "string escape sequence" to see...
// let a = "Bob said, \nWell, this is interesting.\nThe End";
// console.log(a);



// Array Values...
//  [1,2,3]  // ---> In JavaScript
// "[1,2,3]" // ---> In JSON



// Object Values...
//  { person: true, name: "Roberta" }  // ---> In JavaScript
// "{ \"person\": true, \"name\": \"Roberta\" }" // ---> In JSON
// Beautiful!



// Serialization is...
// When you have some data and you want to turn it into a string
// (or some other kind of value like "binary") so your program can
// send it to another computer.



// Deserialization is...
// When you take some text (or something another computer has
// sent to your program) and turn it into data.



// The Built-in JSON Object is...
// An object in modern JavaScript interpreters with two methods that
// allow us to convert JSON formatted strings into regular JavaScript objects
// and JS objects to JSON formatted strings.



// JSON.stringify(value) will turn the value passed into it into a string.
// JSON.parse(str) will turn a JSON-formatted string into a JavaScript object.



// Let's try those out...
let obj1 = {name: "Tom", cats: ["Mittens", "Catman \"The Man\"", "Lenny"] };
// console.log(obj1);



// Note that these don't mutate the input, we have to store them somewhere...

// JSON.stringify(obj1);
// console.log(obj1);

// let jsonStr1 = JSON.stringify(obj1);
// console.log(jsonStr1);

// let obj2 = JSON.parse(jsonStr1);
// let jsonStr2 = JSON.stringify(obj2);

// console.log(obj2);


// For whatever it's worth these still play by the same
// rules as normal JS objects and strings...

// console.log(obj1 === obj1); // Obviously
// console.log(obj1 === obj2); // Obviously?
// console.log( {a: 5} === {a: 5} ); // Obviously?

// console.log("---------------")

// console.log(jsonStr1 === jsonStr1); // Obviously
// console.log(jsonStr1 === jsonStr2); // Obviously?
// console.log( "cat" === "cat" ); // Obviously



// And keep in mind there's no magic here in terms of the datatypes...

// let obj = {name: "Tom", cats: ["Mittens", "Catman \"The Man\"", "Lenny"] };

// JSON.stringify(obj);
// console.log(typeof obj);

// let jsonStr = JSON.stringify(obj);
// console.log(typeof jsonStr);



// You will almost never write raw JSON! Hooray!
// But you will understand what's going on when you see it,
// and that will make you a better engineer.



// Irritating pop quiz!...

const a = [{ name: "Tom", cats: 12 }, { name: "Tim", cats: 0 }];
console.log(a[1].cats);

const s = JSON.stringify(a);
// console.log(s[1].cats);

const v = JSON.parse(s);
console.log(v === a);



// Are these valid JSON strings?
// JSON.parse() will be the judge...

// let str = "[1,2,3]";
// let str = "[cat,dog]";
// let str = "\"[cat,dog]\"";
// let str = "['cat','dog']";
// let str = "[\'cat\',\'dog\']";
// let str = "[\"cat\",\"dog\"]";
// let str = "[{\"cats\":12},\"Tom\"]";
// let str = "[\"{cats:12}\",\"Tom\"]";
// let str = "{ 1: true, 2: false, 3: null }";
// let str = "{ true: 1, false: 2, null: 3 }";
// let str = "{ \"true\": 1, \"false\": 2, \"null\": 3 }";
// let str = "{ \"true\": 1.14, \"false\": 2.14, \"null\": 3.14 }";
// let str = "{ \"1\": true, \"2\": false, \"3\": null }";

// let obj = JSON.parse(str);
// console.log("no error!");
// console.log(obj);
// console.log(typeof obj);



// Are these JavaScript objects valid for JSON.stringify() conversion?

// let obj = { true: 1, false: 2, null: 3 };
// let obj = { 1: true, 2: false, 3: null };
// let obj = ["{cats:12}","Tom"];
// let obj = [{"\"cats\"":12},"Tom"];
// let obj = [{"cats":12},"Tom"];
// let obj = ['cat','dog'];
// let obj = "[cat,dog]";
// let obj = [1,2,3];
// let obj = ['cat','dog'];
// let obj = 1;

// let str = JSON.stringify(obj);
// console.log("no error!");
// console.log(str);
// console.log(typeof str);

// But can they be parsed as valid JSON strings?

// let obj2 = JSON.parse(str);
// console.log("no error!");
// console.log(obj2);
// console.log(typeof obj2);
