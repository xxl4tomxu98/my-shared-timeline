# PROMISES

The problem
- sometimes we dont want one task to start until another task completes
- difficult with async code b/c there is no guarenteed order


Why promises?
- used to handle asynch operations in JS 
- easier to manage when dealing with multiiple asynch ops
- callbacks can quickly lead to unmanageable code



Overview
- object that may produce some value in the future
  * produces resolved value or reason it didn't resolve
- eager: will start doing task as soon as promise constructor invoked




# VIDEO 1





1. the problem
   - issue with async code is there is no guareenteed order
   - what if we want one async task to start only when another 
     async task has completed?


2. cannot do this because there is no guarenteed order
   - tasks will not complete in order we're invoking them


3. callback solution
   - could use callbacks like so to solve the issue
   - pass each step to previous step is a callback
   - allows us to specify order asyc funcs are invoked


4. callback issue
   - this can get super complicated super quickly 



5. enter promises
   - promise: object that may produce single value some time in future
   - global JS object as of ES6
   - create a promise like any other obj, using new keyword




6. promise pseudo code
   - promise constructor takes a function
   - that function has two callback arguments, resolve and reject
     * invoking resolve fulfills the promise
     * invoking reject rejects the promise



How promises work
- exists in three possible states
1. fulfilled: resolve was called
2. rejected: reject was called
3. pending: not yet fulfilled or rejected
- once settled (rejected/fulfilled) cannot be changed



7. example
   - promises are eager, code starts executing as soon as constructor is called
     * function param invoked as soon as promise created
   - if we invoke reseolve, we're fulfilling the promise
   - if we invoke reject, we're rejecting the promise


8. promise is in pending state until it is either fulfilled or rejected
   - code is async so putting this console.log statement below will always
     show the pending state


9. how can we use promises to manage this async behavior ? using then!
   - `.then()` is a built in method you can call on promises


10. `.then(onFulfilled, onRejected)` accepts two params
    - onFulfilled invoked after promise is fulfilled
      * value resolve invoked with is passed as argument to callback
    - onRejected invoked if promise is rejected (optional)


Process
- code in promise constructor executes
- if that code resolves the promise, invoke success handler
- if that code rejected the promise, invoke error handler


11. if promise rejected and you dont have an onRejected handler
    - results in unhandled promise rejection warning



12. .then always returns a new promise
    - this makes it possible to chain promises
    - value returned from promise is argument passeed to next promise
    - thens executed in sequence, simulates sync behavior
    - makes it super easy to control order operations will occur



13. previously saw how we could provide onRejected cb to handle promise rejection
    - what if onRejected throws an error ?
    - unhandled promise rejection b/c theres nothing to catch that rejection


14. could keep chaining .thens but where does it end ?



15. catch is another method you can call on promises
    - will catch any error that occurs


The difference
- first example:
  * error occuring in myPromise will be caught
  * error occuring in handleSuccess will not be caught
- second example:
  * catch() will handle rejections in either myPromise or handleSuccses




16. example
    - catch will handle promise rejection and any errors thrown in .then cb



SUMMARY: good to end all promise chains with `.catch()`
- avoid unhandled promise rejections



17. what do promises look like in final state?






# VIDEO 2



1. taken our original problem and made it so each func returns a promise
   - now that they return promises, we can use .then 



2. using promises and then allow us to write async code that looks sync
   - makes it easy for us to control order of these async funcs


problem: maybe we have three tasks
- want to wait until all tasks are finished before handling them
- want the tasks to be performed simulatniously

solution: promise.all


3. promise.all()
  - accepts array of values
  - returns a new Promise obj in pending state
  - if any Promise transitions to rejected, superPromise is rejected with same reason
  - if all inner promises fullfilled, superpromise transitions to fulfilled
  - returns array populated in order, of resolved values of original array