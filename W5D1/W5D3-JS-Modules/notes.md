# Node.js Modules

local modules
- each JS file in a project
- private by default, prevents content from being accessed by other modules
- content must be explicitly exported so other modules can import
- ideally each module has single purpose, implements single functionality


core and third party modules
- core mods: native mods contained within node.js
  * path, readline, fs (writing files), http 
- third party mods: distributed & managed using npm 


module systems
1. CommonJS: legacy module system
2. ES Modules: newer system
   - will eventually replace CommonJS 
   - never completely due to amt of legacy node.js code that exists


adding local module to node.js app
- simply add new JS file (.js)


entry file
- entry point is index.js 
- file that is passed to node command (`node index.js`)


exporting a module 
- each module is Node has access to module object that reps current module
- contains props that provide einfo about module
- `module.exports` prop used to export items

```js

class CatalogItem {

}

class Book extends CatalogItem {

}

class Movie extends CatalogItem {

}

// set key value pairs in module.exports object
module.exports.Book = Book;
module.exports.Movie = Movie;

// define new object that contains property for each 

module.exports = {
  Book,
  Movie
}

// node provides exports var thats initialized to module.exports prop value
exports.Book = Book;
exports.Movie = Movie;


// CANNOT do this (breaks linkage)
// module.exports = {};
// exports = module.exports
exports = { Book, Movie }
```


importing from a module
- must explicitly state what module needs from other modules
- when module needs something from other mod, we say it is dependent
- a modules dependencies are modules that it needs to run



module loading logic 
- node looks at ideentifier passed to `require()` to determ what kind of module
- local modules: identifier starts with ./ ../ /
- node.js core mod: identifier matches core mod name
- third party mod: identifier matches mod in node_modules folder




module loading process
- when module is imported by another module, node will:
  1. load the module
  2. execute code in module
  3. return module.exports object to consuminig module



# Writing ES6 Modules vs CommonJS


location of imports
- commonJS: require method can be anywhere in file
- es6: importing must be at top of file 


importing names
- commonJS: `let Dog = require('./dog')`
- es6: `import Dog from './dog.js'`


importing everything
- commonJS: `let fs = require('fs')`
- es6: `import * as fs from 'fs'`


exporting names
- commonJS:
```js
  class Wallet { ... }
  function sayHello() { ... }
  exports.Wallet = Wallet;
  exports.sayHello = sayHello;
```
- es6:
```js
  class Wallet { ... }
  function sayHello() { ... }
  export class Wallet;
  export function sayHello
```

browser support for es6 modules
- must include file extension in name of module
- must be running local web server
  * python3 -m http.server
  