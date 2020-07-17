// ---------------------------------------------------
//                NPM Learning Objectives 
// ---------------------------------------------------


// 1. Explain what "npm" stands for.

// 2. Explain the purpose of the package.json file 
// and node_modules directory.

// 3. Given multiple choices, identify the difference 
// between npm's package.json and package-lock.json files.

// 4. Use npm --version to check what version is currently 
// installed and use npm to update itself to the latest version.

// 5. Use npm init to create a new package and npm install 
// to add a package as a dependency. Then use require to import the 
// module and utilize it in a JavaScript file.

// 6. Given a package version number following the MAJOR.MINOR.PATCH 
// semantic versioning spec that may include tilde (~) and caret (^) ranges, 
// identify the range of versions of the package that will be compatible.

// 7. Explain the difference between a dependency and a development dependency.

// 8. Given an existing GitHub repository, clone the repo 
// and use npm to install it's dependencies.

// 9. Use npm uninstall to remove a dependency.

// 10. Use npm update to update an out-of-date dependency.

// 11. Given a problem description, use the npm registry to 
// find a reputable package (by popularity and quality stats) that 
// provides functionality to solve that problem.

// 12. Given a package with vulnerabilities due to outdated dependency 
// versions, use npm audit to scan and fix any vulnerabilities.

// 13. Write and run an npm script.






// -----------------------------------------------------------------------
//             Introduction to Built-In Node Packages (Video)
// -----------------------------------------------------------------------

// Packages and Objects of Interest
  // Console Object
  // File System Library
  // Path / Manipulating File Paths
  // The Process Object
  // Readline / Reading File Data

// ** This is all just for Node! Not browsers! **

// Check node version...
// $ node --version
// $ node -v

// nodejs.org

// always find docs for your specific version




// -------[ Console Object ]-------------------------


// console.log("What a great log message!");

// let a = 0;
// console.log(a);
// console.error("This error message doesn't stop anything!");
// a += 5;
// console.log(a);

// let tomsCats = [
//   {name: "Kitty", age: 27, color: "white"},
//   {name: "Pogo", age: 16, color: "black"},
//   {name: "Plum", age: 7, color: "purple", breed: "tortoise-shell"},
// ]
// console.table(tomsCats);

// console.group("Shopping List");
// console.group("PetSmart");
// console.log("Cat Chow");
// console.log("Catnip");
// console.groupEnd();
// console.group("Home Depot");
// console.log("Carpet Samples");
// console.log("Stain Remover");
// console.log("Playground Sand");
// console.groupEnd();
// console.groupEnd();




// -------[ FS Library ]-------------------------


// const fs = require('fs');

// fs.appendFile('./new_file.txt', 'Here is some text!', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.appendFile('./bad_website.html', '<h1>Hello Internet!</h1>', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.readFile('./sample.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data)
// });

// fs.readdir('./test_project', 'utf-8', (err, files) => {
//   if (err) {
//     console.log(err);
//   }

//   for (let fileName of files) {
//     console.log(fileName);
//   }
// });



// const stream = fs.createReadStream('./sample.txt', 'utf-8');

// stream.on('data', chunk => {
//   console.log("Starting to read...\n")
//   console.log(chunk);
// });

// stream.on('close', () => {
//   console.log('All done reading!')
// });




// -------[ Path Library ]-------------------------


// const path = require('path');

// console.log(__dirname);

// let newPath = path.join('/Users', 'tombetthauser');
// let newPath = '/Users/tombetthauser';
// newPath = path.join(newPath, 'Music', 'rain.mp3');

// console.log(newPath);
// console.log(typeof newPath);

// console.log(path.dirname(newPath));
// console.log(path.extname(newPath));
// console.log(typeof path.extname(newPath));
// console.log('.mp3' === path.extname(newPath));

// console.log(path.parse(newPath));
// console.log(path.parse(newPath).ext);
// console.log(path.parse(newPath).name);
// console.log(typeof path.parse(newPath).name);
// console.log(path.parse(newPath).ext === '.mp3');




// -------[ Process Global Object ]-------------------------

// console.log(process.argv);
// $ node notes.js arg1 arg2 arg3 

// console.log(process.cwd());
// console.log(__dirname);
// $ cd ..
// $ cd npm_notes/notes.js

// process.exit(0);
// console.log('will this run?')
// $ echo "$?"




// -------[ Readline Library ]-------------------------

// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface(fs.createReadStream('./sample.txt'));

// rl.on('line', (line) => {
//   console.log(line, "...dramatic pause...")
// });





// -------[ Bonus! ]-------------------------

// const fs = require('fs');

// fs.writeFile('./new_file.js', 'hey hey!', (err) => {
//   if (err) {
//     console.log(err);
//   };

//   console.log("The file has been created!")
// })






// ---------------------------------------------------------
//               Introduction to NPM (Video)
// ---------------------------------------------------------

// It's a Command Line Interface tool.
    // ie $ npm init, $ npm install etc.

// It's also a registry, website and a company.

// npms dependencies are located from the project root directory



// -------[ package.json ]-------------------------

// Metadata like project name and author
// Most importantly for now dependencies!



// -------[ package-lock.json ]-------------------------

// Dependency details



// -------[ node_modules (directory) ]-------------------------

// This is where all the code for the dependencies is actually stored
// It can get huge, so we don't put it on github!






// -----------------------------------------------------------
//               Using NPM  - Part I & II (readings)
// -----------------------------------------------------------


// -------[ Part I ]-------------------------

    // Verifying what version of npm is installed and how to 
    // use npm to update itself to the latest version.

    // Using npm to initialize a new package or project.

    // Using the npm registry to find a package.

    // Using npm to install a package.

    // Using an npm package in code.

    // Understanding the difference between a dependency 
    // and a development dependency.




// $ npm -v
// check to see if you have the CLI installed and what version youre running.

// $ npm install -g npm@latest



// -------[ npm command line setup ]-------------------------

// $ npm init --y
// $ npm install colors
// $ npm install mocha --save-dev

// const colors = require('colors');

// console.log('hello'.green)
// console.log('hello'.underline.red)
// console.log('hello'.inverse.blue)
// console.log('hello'.rainbow)
// console.log('hello'.trap)
// console.log('hello'.trap.rainbow.inverse)




// -------[ Part II ]-------------------------

// Installing an existing project's dependencies.
// Using npm to uninstall a package.
// Using npm to update a package.
// Finding and fixing npm package security vulnerabilities.
// And writing and running npm scripts.




// -------[ Uninstalling Packages ]-------------------------

// $ npm install lodash
// $ npm uninstall lodash
// $ npm install lodash@3.0.0

// In package.json...
// Semver ^3.0.0 means that you'll accept any minor 
// and patch versions for lodash major version 3.

// $ npm update lodash
// $ npm install lodash@latest
// $ npm update

// $ npm audit
// will show a security problem

// $ npm audit fix

// When a fix requires updating to a new major version 
// of a package, that's considered by npm to be a 
// "breaking change".

// $ npm audit fix --force