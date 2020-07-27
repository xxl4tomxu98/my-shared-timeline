function returnsThree(){
  return 3;
}

function reciprocal(num){
  if (num < 1 || num > 1000000) {
    throw new TypeError("Number out of range from 1 to 1000000");
  }
  return 1/num;
}
module.exports = {returnsThree, reciprocal};
