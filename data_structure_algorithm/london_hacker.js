/*You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx */


// the solution is more elegant if I move the counter according to the rules
function londonCityHacker(journey) {
  //code me up baby!
  let money = 0;
  let i = 0;
  while (i < journey.length) {
    if (typeof journey[i] === 'string') {
      money += 2.4;
      i += 1;
    } else if (typeof journey[i] === typeof journey[i + 1]) {
      money += 1.5;
      i += 2;
    } else {
      money += 1.5;
      i += 1;
    }
  }
  return '£' + money.toFixed(2);
}
