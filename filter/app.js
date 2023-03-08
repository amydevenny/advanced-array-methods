const words = [
  'immunoelectrophoretically',
  'rotavator',
  'tsktsk',
  'pshychopsysicotheraputics',
  'squirrelled',
  'crypt',
  'uncopyrightable',
  'cysts',
  'pseudopseudohypoparathyroidism',
  'unimaginatively'
];

// use filter to create a new array with words containing 20 characters or more
const longWords = words.filter(function(word) {
  // returns true or false and adds truthy values to the new array
  return word.length >= 20;
});

//add words starting with c or u to a new array
const startsWithCOrU = words.filter(function(word) {
  //if the first index of the string is c or u it returns true and adds to startsWithCOrU array
  return word[0] === 'u' || word[0] === 'c';
});


//check if char is a vowel
const isVowel = function(char) {
  //if it does NOT return -1 it is a vowel
  return 'aeiou'.indexOf(char) !== -1;
};

//run isVowel on each word 
const containsVowel = function(word) {
  // for loop through every char of each word
  for(let char of word) {
    // if it returns 1, return true
    if(isVowel(char)) return true;
  }
  return false;
};

// declare the containsVowels variable and run the opposite to get noVowels
const containsVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word) {
  return !containsVowel(word);
})