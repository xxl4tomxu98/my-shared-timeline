document.addEventListener("DOMContentLoaded", () => {

  let catObjectsArray = [];

  // grab all necessary dom element nodes ----------------------------------------

  const catsListUl = document.getElementById("cats-list-ul");
  const runningCatsUl = document.getElementById("running-cats-ul");
  const finishedCatsUl = document.getElementById("done-cats-ul");

  const normalRaceButton = document.getElementById("start-race-button");
  const relayRaceButton = document.getElementById("start-relay-button");
  const clearCatsButton = document.getElementById("clear-cats-button");
  const historyEraserButton = document.getElementById("history-eraser-button");
  const addCatButton = document.getElementById("add-cat-button");

  const newNameInput = document.getElementById("new-cat-input");
  const newWeightInput = document.getElementById("new-weight-input");

  // run asynchronous cat race ----------------------------------------
  // the synchronous function runs first which is incorrect
  // normalRaceButton.addEventListener("click", () => {
  //   const promiseCallBacks = createPromiseCallBacks(catObjectsArray);
  //   for (let i = 0; i < promiseCallBacks.length; i++) {
  //     const cb = promiseCallBacks[i];
  //     cb();
  //   }
  //   raceOverDomUpdate();
  // });


  // normalRaceButton.addEventListener("click", () => {
  //   const promiseCallBacks = createPromiseCallBacks(catObjectsArray);

  //   for (let i = 0; i < promiseCallBacks.length; i++) {
  //     const cb = promiseCallBacks[i];
  //     cb(); // this is a Promise
  //   }

  //   const maxWeightTime = catObjectsArray.reduce((acc, catObj) => {
  //     if (catObj.time > acc) {
  //       return catObj.time;
  //     } else {
  //       return acc;
  //     }
  //   }, 0)
  //   //manually delay max runtime to ensure correct sequence of final update
  //   setTimeout(raceOverDomUpdate, maxWeightTime);
  // });

  // ensure correct sequence by counting array length and after
  // last element run then update. synchronous func inside async callback
  // normalRaceButton.addEventListener("click", () => {
  //   const promiseCallBacks = createPromiseCallBacks(catObjectsArray);

  //   let promiseCount = promiseCallBacks.length;

  //   promiseCallBacks.forEach(cb => {
  //     cb().then(() => {
  //       promiseCount -= 1;
  //       if (promiseCount < 1) raceOverDomUpdate();
  //     });
  //   })
  // });

  // async/await to make async func run like a sync function
  // normalRaceButton.addEventListener("click", () => {
  //   const promiseCallBacks = createPromiseCallBacks(catObjectsArray);

  //   let promiseCount = promiseCallBacks.length;

  //   promiseCallBacks.forEach(async function(cb) {
  //     await cb(); // this is a Promise
  //     promiseCount -= 1;
  //     if (promiseCount < 1) raceOverDomUpdate();
  //   })
  // });

  /*When all of the Promise objects in the super Promise transition out of the pending state, then the super Promise will also transition out of the pending state. If any one of the Promise objects in the array transition to the rejected state, then the super Promise will immediately transition to the rejected state with the same reason as the inner Promise failed with. If all of the internal Promise objects transition to the fulfilled state, then the super Promise will transition to the fulfilled state and its value will be an array of all of the resolved values of the original array. */

  normalRaceButton.addEventListener("click", () => {
    const promiseCallBacks = createPromiseCallBacks(catObjectsArray);

    // const promAll = Promise.all(promiseCallBacks.forEach(cb=>cb()))
    // .then(() => raceOverDomUpdate());
    const promAll = Promise.all(promiseCallBacks.map(cb=>cb()))
    .then(() => raceOverDomUpdate());
    // const promAll = promiseCallBacks.map(cb=>cb())
    // .then(allPromises=>Promise.all(allPromises))
    // .then(() => raceOverDomUpdate());
  });




  // run synchronous cat race recursively------------------------------------

  // relayRaceButton.addEventListener("click", () => {
  //   const promiseCallBacks = createPromiseCallBacks(catObjectsArray);

  //   const recursiveThenChain = (promiseCallBacksArg) => {
  //     if (promiseCallBacksArg.length === 0) {
  //       raceOverDomUpdate();
  //       return
  //     }

  //     const currentPromise = promiseCallBacksArg[0];
  //     const slicedPromiseArray = promiseCallBacksArg.slice(1);

  //     currentPromise().then(() => {
  //       recursiveThenChain(slicedPromiseArray);
  //     });
  //   }

  //   recursiveThenChain(promiseCallBacks);
  // });


  relayRaceButton.addEventListener("click", async function() {
    const promiseCallBacks = createPromiseCallBacks(catObjectsArray);

    for (let i = 0; i < promiseCallBacks.length; i++) {
      const cb = promiseCallBacks[i];
      await cb();
    }

    raceOverDomUpdate()
  });








  // clear cats list ----------------------------------------

  clearCatsButton.addEventListener("click", () => {
    catsListUl.innerHTML = "";
    catObjectsArray = [];
  });



  // clear the dom cat race history ----------------------------------------

  historyEraserButton.addEventListener("click", () => {
    finishedCatsUl.innerHTML = "";
  });



  // add "New Cat" object to array ----------------------------------------

  addCatButton.addEventListener("click", event => {
    event.preventDefault();

    const newCatObject = {
      name: newNameInput.value,
      //set time in seconds equal to weight in lbs divided by 2
      //here time is in miliseconds
      time: parseInt(newWeightInput.value) * 500
    }

    catObjectsArray.push(newCatObject);

    // boring dom stuff --------------------

    const catName = newCatObject.name;
    const catWeight = newWeightInput.value;
    const catSeconds = Math.floor(parseInt(newWeightInput.value) / 2);
    const newCatString = `${catName} (${catWeight}lbs / ${catSeconds}sec)`;
    const newEle = document.createElement('li');
    newEle.innerHTML = newCatString;
    catsListUl.appendChild(newEle);
    newNameInput.value = "";
    newWeightInput.value = "";
  });



  // helper to update dom when cats are done ----------------------------------------

  function raceOverDomUpdate() {
    runningCatsUl.innerHTML = "";
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "special-li");
    newLi.innerHTML = `cat race complete!`;
    finishedCatsUl.appendChild(newLi);
  }



  // helper to create an array of chore promises ----------------------------------------

  function createPromiseCallBacks(catObjectArray) {
    const promiseCallBacks = [];

    catObjectArray.forEach(catsObject => {
      const name = catsObject.name;
      const time = parseInt(catsObject.time) || 0;

      const newPromise = () => {
        return new Promise((resolve, _reject) => {
          const newLi = document.createElement("li");
          newLi.innerHTML = `${name} has started running...`;
          runningCatsUl.appendChild(newLi);

          setTimeout(() => {
            const newLi = document.createElement("li");
            newLi.innerHTML = `${name} is done running!`;
            finishedCatsUl.appendChild(newLi);
            resolve(name);
          }, time)
        })
      }
      promiseCallBacks.push(newPromise);
    })
    return promiseCallBacks;
  }
})
