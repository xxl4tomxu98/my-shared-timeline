const fs = require('fs');


const [ONE, TWO, TARGET_FILE, OLD_STR, NEW_STR, NUM] = process.argv;
const replace = (target, oldStr, newStr, num) => {
  if (num === undefined) {
    return target.split(oldStr).join(newStr);
  }
  num = Number(num);
  let array = target.split(oldStr);
  let newSentence = array.slice(0, num).join(newStr);
  newSentence = newSentence + newStr + array.slice(num).join(oldStr);
  return newSentence;
}
fs.readFile(TARGET_FILE, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  // console.log(replace(data, OLD_STR, NEW_STR));
  let newData = replace(data, OLD_STR, NEW_STR, NUM);
  fs.writeFile(TARGET_FILE, newData, "utf8", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("done!")
  });
});
