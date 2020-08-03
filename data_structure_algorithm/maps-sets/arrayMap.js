class ArrayMap{
  constructor(){
    this.keys = [];
    this.values = [];
  }

  set(key, value){
    const i = this.keys.indexOf(key);
    if(i >= 0){
      this.value[i] = value;
      return this.value[i];
    }  else {
      this.keys.push(key);
      this.values.push(value);
    }
  }

  get(key) {
    const i = this.keys.indexOf(key);
    if(i>=0){
      return this.value[i];
    } else {
      return false;
    }
  }

  delete(key) {
    const i = this.keys.indexOf(key);
    if(i>=0) {
      this.keys.splice(i, 1);
      this.values.splice(i, 1);
    }
  }

}

let myMap = new Map();
myMap.set("new york", 800000000);
console.log(myMap);
