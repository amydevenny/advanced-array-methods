// map creates a new array and returns the products of the callback
const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function(num){
  return num * -1;
});

//create an array containing only one key's value of an object
const todos = [
  {
    id : 1,
    text : 'walk the dog',
    priority : 'medium'
  },
  {
    id : 2,
    text : 'walk the chickens',
    priority : 'low'
  },
  {
    id : 3,
    text : 'feed the cats',
    priority : 'high'
  },
  {
    id : 4,
    text : 'put out the fire',
    priority : 'very high'
  }
];
// return the text
const todoText = todos.map(function(todo) {
  return todo.text;
});

// get only hrefs from ul links into new array
const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
  return a.href;
});

//write a version of map
function myMap(arr, callback) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    // callback is the expected function argument with the value, index, and whole array as parameters
    const val = callback(arr[i], i, arr);
    //push only the value onto the new array
    mappedArray.push(val);
  };
  return mappedArray;
};

// return priority values from todo object
const priorityMap = myMap(todos, function(todo) {
  return todo.priority;
});

//create a new array with each string repeated by its index value
const repeatedStrings  = myMap(['a', 'b', 'c', 'd', 'e'], function(str, idx) {
  return str.repeat(idx);
});