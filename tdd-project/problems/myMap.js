function myMap(arr, cb){
  let newArr = [];
  arr.forEach(ele => {
    newArr.push(cb(ele));
  });
  return newArr;
}

module.exports = myMap;
