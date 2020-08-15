if (!fetch) {
    var fetch = require('./test/node-fetch')(1);
  }
  if (!document) {
    const createDom = require('./test/node-dom');
    var document = createDom(__filename);
  }

  /**
   * Do not change code above this line.
   *
   * INSTRUCTIONS:
   *
   * Implement a getSpaceStation method that performs the following:
   *
   * 1. Makes a GET call to fetch() for the URL
   *    'http://api.open-notify.org/iss-now.json'
   * 2. Uses the json() method on the response to get the data from the API
   *    call. The object returned from the json() call will be the following
   *    object.
   *
   *    {
   *      message: "success",
   *      iss_position: {
   *        latitude: "33.0036",
   *        longitude: "72.2221"
   *      },
   *      timestamp: 1597291944
   *    }
   *
   * 3. Gets the element #space-station using the document object.
   * 4. Update the inner HTML of the space-station div to :
   *  'The ISS is currently over 33.0036 Lat. and 72.2221 Lon.'
   * Hints:
   *   * If you're using npm test and want to see what's happening with your DOM,
   *     use console.log(document.body.innerHTML) to see what's happening, if you
   *     need to.
   ******************************************************************************/

  function getSpaceStation() {
    //throw new Error('Replace this error with your implementation');
    async () => {
      const res = await fetch('http://api.open-notify.org/iss-now.json');
      const data = await res.json();
      let {message, iss_position, timestamp} = data;
      console.log(data);
      document.getElementById("space-station").innerHTML = `The ISS is currently over ${iss_position.latitude} Lat. and ${iss_position.longitude} Lon.` ;
      console.log(document.body.innerHTML);
    }
  }

  /*******************************************************************************
 * Do not change code below this line.
 */
if (!exports) {
    var exports = {};
  }
  (function (exports) {
    try {
      exports.getSpaceStation = getSpaceStation;
    } catch (e) {
      exports.getElementById = () => {throw new Error('Cannot export getSpaceStation')};
    }
  })(exports);
