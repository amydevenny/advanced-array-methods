const words = 
[ 'car',
  'cat',
  'monster',
  'octopus',
  'bird',
  'tiger',
  'elephant',
  'hippopotamus',
  'rat'
];

// a function that takes in an array and a callback as parameters
function myFilter(arr, callback) {
  // start with an empty array
  const filteredArray = [];
  // loop though the words of the array passed in
  for (let i = 0; i < arr.length; i++) {
    // if any of the words make the callback function true, add it to the array
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }
  // finally return the array
  return filteredArray;
}

const shorties = myFilter(words, function(word) {
  return word.length <= 3;
});