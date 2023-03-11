 // iterates through array
 // Runs callback on each value in the array
 //If the callback is true at any point, return the value in the array that we're iterating over
 // Otherwise return undefined
 
 const scores = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  55,
  59,
  69,
  73,
  73,
  75,
  79,
  83,
  88,
  91,
  93
 ];

 // find the first score that is greater than 75
 scores.find(function(score) {
  return score > 75;
 });

 // find the first score that is not 0 and is even
 scores.find(function(score) {
  return score !== 0 && score % 2 === 0;
 });


//.filter acts like a find all
const evenScores =  scores.filter(function(score) {
  return score % 2 === 0;
 })

 // .findIndex does the same thing as .find, but returns the index of the first thing that is true
 const firstEven = scores.findIndex(function(score) {
  return score !== 0 && score % 2 === 0;
 })

 // find a score that doesn't exist
 // returns -1 because it's looking for an index
 scores.findIndex(function(score){
  return score > 100;
 })

 // split an array at a pivot point
 // takes in 2 parameters, the array and the pivot value
 function partition(arr, pivot) {
  // find the index of the first element that is greater than the pivot value
  const pivotIndex = arr.findIndex(function(el) {
    return el > pivot;
  });
  // slice starts at the index of the first parameter and goes up to, but not including, the second parameter
  const left = arr.slice(0, pivotIndex);
  // if only one parameter, it starts there and goes until the end
  const right = arr.slice(pivotIndex);
  //return a new array containing both left and right arrays
  return [ left, right ];
 }

 //rewrite my own versions of find
 // accepts an array and a callback as parameters
function myFind(arr, callback) {
  //loops through the array
  for (let i = 0; i < arr.length; i++) {
    // pass in the value, index, and entire array to the callback
    // if the callback is true at any point, return the value of that index
    // if nothing is true it returns undefined by default
    if (callback(arr[i], i, arr) === true) return arr[i];
  }
}

// run myFind on scores array, looking for a score greater than 91
myFind(scores, function(score){
  return score > 91;
})

//rewrite my own versions of findIndex
// same as findIndex
function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    //except return the first index that is true
    if (callback(arr[i], i, arr) === true) return i;
  }
  //return -1 if nothing is true
  return -1;
}

myFindIndex(scores, function(score){
  return score !== 0 && score % 2 === 0;
})