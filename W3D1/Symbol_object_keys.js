//Object initialize
let o = {
  name: "Luke Skywalker",
  typename: "People",
  [Symbol('asd')]: 'john',
  [Symbol('123')]: 'luke',
  [Symbol('mbn')]: 'chewy',
  [Symbol('gfd')]: 'yoda',
  [Symbol('54t')]: 'leah',
}
//Logs object
console.log(o); //o (object)
//Logs value that don't have Symbols as keys
console.log(Object.values(o)); //['Luke Skywalker', 'People']
//Logs second value for Symbol key
console.log(o[Object.getOwnPropertySymbols(o)[1]]); //Luke
//Commented out bc throws error
//console.log(o[Object.getOwnPropertySymbols(o)]); //Cannot convert a Symbol value to a string
//Iterates over array that is returned by getOwnPropertySymbols (up to 3 items)
console.log((function () { for (let i = 0; i < 2; i++) { console.log(o[Object.getOwnPropertySymbols(o)[i]]) } }()));

//john
//luke
//undefined
//Logs array of Symbol keys
console.log(Object.getOwnPropertySymbols(o)); // [Symbol(asd), Symbol(123), Symbol(mbn), Symbol(gfd), Symbol(54t)]
//Assigned Symbol keys array to variable a
let a = Object.getOwnPropertySymbols(o);
//Logs a length
console.log(a.length);//5
//Iterates and prints Symbol keys values
console.log((function () { for (let i = 0; i < a.length; i++) { console.log(o[a[i]]) } }())); // john, luke, chewy, yoda, leah, undefined
