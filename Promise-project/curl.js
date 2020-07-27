const dash = require('dashdash');
const fetch = require('node-fetch');
const fs = require('fs');


const options = {
    allowUnknown: true,
    options: [
      {
    names: ['output', 'o'],
    type: 'string',
    help: 'file in which to store the fetched content'
    },
    {
      names: ['input', 'i'],
      type: 'string',
      help: 'file in which to be related to the content'
    },
    {
      names: ['header', 'H'],
      type: 'arrayOfString',
      help: 'an arbitrary headed to set on the fetch'
    },
    {
      names: ['agent', 'A'],
      type: 'string',
      help: 'sets user agent header'
    },
    {
      names: ['referer', 'e'],
      type: 'string',
      help: 'sets the URL of the referer header'
    },
    {
      name: 'version',
      type: 'bool',
      help: 'Print tool version and exit.'
    },
    {
      names: ['verbose', 'v'],
      type: 'arrayOfBool',
      env: 'CURL_VERBOSE',
      help: 'Verbose output. Use multiple times for more verbose.'
    },
    {
      names: ['file', 'f'],
      type: 'string',
      help: 'File to process',
      helpArg: 'FILE'
    },
    {
      // `names` or a single `name`. First element is the `opts.KEY`.
      names: ['help', 'h'],
      // See "Option specs" below for types.
      type: 'bool',
      help: 'Print this help and exit.'
    }
  ]
};

const parser = dash.createParser(options);
const opts = parser.parse(options);
// console.log('Options are:', opts)
// console.log("args:", opts._args);

// const input = opts.input;
// const url = opts._args[0];
//console.log(input, url);

//let parser1 = dash.createParser({options: options});
try {
    let opts = parser.parse(process.argv);
} catch (e) {
    console.error('curl: error: %s', e.message);
    process.exit(1);
}

console.log("# opts:", opts);
console.log("# args:", opts._args);
if (opts.help) {
  let help = parser.help({includeEnv: true}).trimRight();
  console.log('usage: node curl.js [OPTIONS]\n'
              + 'options:\n'
              + help);
  process.exit(0);
}

// https://artii.herokuapp.com/make?text=curl++this
// JUST GET A URL
// fetch('https://artii.herokuapp.com')
//     .then(res => res.text()) //taking res object, turn into json obj
//     .then(body => {
//         //console.log(body);// printing the json res obj
//         // let fileName = output[0];
//         // console.log(fileName);
//         return body; // return json obj so itis passed to the next then()
//     })
//     .then(body => {
//         //console.log(fs.promises.writeFile);
//         fs.promises.writeFile('artiihtml.txt', body)
//     })
//     .catch(err => console.log(err));


//Setting an arbitray header
//headers obj allow you to store, retrieve, add, remove HTTP request/response header
// can add new headers using .append() method
// -A 'string', "User-Agent: <<string>>"
// -e <<URL>>,  "Referer: <<URL>>"

// let headers = new fetch.Headers();

// const init = {
//   method: 'GET',
//   headers: headers
// }


// const arbHeaders = opts.headers;

// if (arbHeaders){
//   arbHeaders.forEach(header => {
//     let [key, val] = header.split(':');
//     headers.append(key.trim(), val.trim())
//   });
// }
