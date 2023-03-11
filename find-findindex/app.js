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