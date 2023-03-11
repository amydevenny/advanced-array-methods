const nums = [ 20, 30, 50, 12, -2, 45, 99, 19, 22, 85 ];

// total all numbers in the array
let total = 0;
for (let num of nums) {
  total += num;
}
console.log(total);

//find the minimum number in the array
let min = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] < min) min = nums[i];
}
console.log(min);

// create an object with each character in a string and the number of times it appears
const str = "lollapalooza";
const charFreq = {};
for (let char of str) {
  if (charFreq[char]) {
    charFreq[char] += 1;
  } 
  else {
    charFreq[char] = 1;
  }
}

// REDUCE
// accepts a callback function and an optional second parameter
// iterates through an array
// runs a callback on each value in the array
// the first parameter to the callback is either the first value in the array or the optional second parameter
// the first parameter to the callback is often called "accumulator"
// the returned value from the callback becomes the new value of the accumulator

let evens = [ 2, 4, 6, 8, 10 ];

// accumulator is 2, next value is 4
evens.reduce(function(accumulator, nextValue) {
  // accumulator is initialized to the first value and adds the nextValue
  // accumulator become the sum of the two numbers, and nextValue moves up an index and becomes the value
  // accumulator adds the nextValue number and continues 
  // 2 + 4 = 6 (accumulator is 6, nextValue is 6) 6 + 6 = 12 (accumulator is 12, nextValue is 8) 12 + 8 = 20 (accumulator is 20, nextValue is 10) 20 + 10 = 30
  return accumulator + nextValue;
  // reduce returns 30
});

// can use on strings as well
const words = ['hello', 'I', 'love', 'you'];
const result = words.reduce(function(accum, nextWord) {
  console.log(accum, nextWord);
  return accum + nextWord;
});

// can use it to compare values in an array
const midtermScores = [70, 88, 93, 94, 64, 62, 56];
const finalsScores = [92, 93, 76, 77, 78, 59, 61];
// const minScore = midtermScores.reduce(function(min, nextScore) {
//   if(nextScore < min) {
//     return nextScore;
//   }
//   return min;
// })

// get min midtermScore
const minMidtermScore = midtermScores.reduce(function(min, nextScore) {
  return nextScore < min ? nextScore : min;
});

// get max midtermScore
const maxScore = midtermScores.reduce(function(max, nextScore) {
  return nextScore > max ? nextScore : max;
});

// get min score from both arrays using finalScore first, then passing in the reduced value of midtermScore
const minOverallScore = finalsScores.reduce(function(min, nextScore) {
  return nextScore < min ? nextScore : min;
}, minMidtermScore);

