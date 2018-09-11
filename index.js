/*
  Review on Arrow functions and Map

  Arrow functions:
    A way to more cleanly write anonymous functions within our code
    Pretty much the only difference is how 'this' gets bound within an arrow function

  Format:
    Does not require a function keyword, or a function name. Just the parameter list and the execution(with an arrow '=>' placed between).
  
  // ES5 function
  function isOdd(number){
    if(number % 1 === 0){
      return true;
    }else{
      return false;
    }
  }
  // function expression
  const isOdd = function(number){
    . . .
  }
  // ES6 arrow function
  const isOdd = (number) => {
    . . .
  }


  ES6 Array method structure:
    Functions:
      map - Returns an array of the same length as the original
      filter - Returns an array of the same or less length as the original
      reduce - Returns 1 and only 1 item
      forEach*
      some*
      find*

    Each function takes a callback. The number of parameters for this callback are 1-3
      1: Current item you're at in the array
      2: Current index you're at in the array
      3: Entire array(THE ORIGINAL array, not a copy)
    
    For map, the return statement in the callback will be what is placed into the new array at that index.
    If you leave off a return statement for any item, it will be 'undefined' in the resulting array.
    If you modify the original array to remove items after you start the map, you will still get the number of items back that you started with. Some may be empty or undefined however.

    let nums = [1,2,3,4,5]
    nums.map((item, index, array) => {
      if(index !== 3){
        return item;
      }
    })

*/

// Recreating the map function - Callbacks and all

// Old way:
let newArr = [];
for (let i = 0; i < oldArr.length; i++) {
  // perform operation to add to new array
}
return newArr;

// Rebuilding the method that map uses:
// Our version will require two parameters instead of one, because we have to feed in the array ourselves.
function ourMap(arr, callback) {
  // Within our map we will need the new array, a loop for the old array, and to return the new array
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // This is where the logic for the new array normally goes.
    // HOWEVER we have a callback that will handle that for us.

    // All that we're responsible for is adding items to the new array
    newArr.push(callback(arr[i], i, arr));
  }

  return newArr;
}
let nums = [1, 2, 3, 4, 5];
ourMap(nums, item => {
  return item * 2;
});

let newNums = [];
for (let i = 0; i < 1000000; i++) {
  newNums.push(i);
}

function testInputs(arr) {
  let start = performance.now();
  ourMap(arr, item => item * 5);
  let mid = performance.now();
  console.log(mid - start); // How long our version took
  arr.map(item => item * 5);
  let last = performance.now() - mid;
  console.log(last); //
}
