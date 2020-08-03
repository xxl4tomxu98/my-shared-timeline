/* HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to  the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

Given the number of trailing days  and a client's total daily expenditures for a period of  days, find and print the number of times the client will receive a notification over all  days.

For example, d=3 and expenditure=[10,20,30,40,50]. On the first three days, they just collect spending data. At day 4, we have trailing expenditures of [10,20,30]. The median is 20 and the day's expenditure is 40. Because 40>=2*20, there will be a notice. The next day, our trailing expenditures are [20,30,40] and the expenditures are 50 . This is less than 2*30 so no notice will be sent. Over the period, there was one notice sent.

Note: The median of a list of numbers can be found by arranging all the numbers from smallest to greatest. If there is an odd number of numbers, the middle one is picked. If there is an even number of numbers, median is then defined to be the average of the two middle values. (Wikipedia)

Function Description

Complete the function activityNotifications in the editor below. It must return an integer representing the number of client notifications.

activityNotifications has the following parameter(s):

expenditure: an array of integers representing daily expenditures
d: an integer, the lookback days for median spending
Input Format

The first line contains two space-separated integers n and d, the number of days of transaction data, and the number of trailing days' data used to calculate median spending.
The second line contains n space-separated non-negative integers where each integer i denotes expenditure[i] .*/


//the key in this impletation is "count sort algorithm"
function activityNotifications(expenditure, d) {
  // Number of notifications
  let n = 0
  // Set midpoints for median calculation
  let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]
  let m1, m2, m
  // Initialize count sorted subarray
  let cs = new Array(201).fill(0)
  for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {

      // Find median
      for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
      for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
      let m = (m1 + m2) / 2

      // Check if notification is given
      if (expenditure[i] >= m * 2) n++

      // Replace subarray elements
      cs[expenditure[i-d]]--
      cs[expenditure[i]]++
  }

  return n
}

let array = [2, 3, 4, 2, 3, 6, 8, 4, 5];
let d = 5

console.log(activityNotifications(array, d));
