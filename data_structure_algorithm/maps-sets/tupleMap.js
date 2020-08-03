class TupleMap {
  constructor() {
    this.data = [];
  }


  set (key, value) {
    const i = this.data.findIndex(element => element[0]===key);
    if(i>=0){
      this.data[i][1] = value;
    } else {
      this.data.push([key, value]);
    }
  }


  get(key) {
    const i = this.data.findIndex(element => element[0]===key);
    if(i>=0){
      return this.data[i][1];
    } else {
      return false;
    }
  }


  delete(key) {
    const i = this.data.findIndex(element => element[0]===key);
    if(i>=0) {
      this.data.splice(i, 1);
    }
  }
}

let myMap = new TupleMap();
myMap.set("new york", 800000000);
console.log(myMap);
console.log(myMap.get("new york"));
myMap.delete("new york");
console.log(myMap);
