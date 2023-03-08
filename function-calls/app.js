function holler() {
  console.log('HEY YOU!');
}

const whisper = function() {
  console.log('pssst. i have a secret.');
}

function add(x, y) {
  return x + y;
} 

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

//functions in an array
const mathFuncs = [add, subtract, multiply, divide];

//timeout a function
setTimeout(whisper, 4000);

//pass function as an argument
function doMath(a, b, mathFunc) {
  return mathFunc(a, b);
}

//call each function in an array using for loop
function doAllMath(a, b, mathFuncs) {
  for(let func of mathFuncs) {
    console.log(func(a, b));
  }
}