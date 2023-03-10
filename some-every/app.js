// on submit, checks if all checkboxes are checked using .every and .checked
// if true it's all good, if false alert to check evberything
const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every(function(checkbox){
    return checkbox.checked;
  });
  console.log(allChecked);
  if(!allChecked) alert('Please agree to everything');
});

// write .some as a function
//takes an array and callback as parameters
function mySome(arr, callback) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // executes the call back, passing in the value, index, and entire array
    // because .some and .every passes all of them to be used by a callback
    // if any of them are truthy return true
    if (callback(arr[i], i, arr)) return true;
  }
  // if nothing is truthy return false
  return false;
}

mySome([4, 5, 6, 7], function(n) {
  return n > 5;
});

// write .every as a function
//takes an array and callback as parameters
function myEvery(arr, callback) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // executes the call back, passing in the value, index, and entire array
    // because .some and .every passes all of them to be used by a callback
    // if any of them are falsey return false, because .every needs all things to be true
    if (!callback(arr[i], i, arr)) return false;
    //  ^ indicates false
  }
  // if everything is truthy return true
  return true;
}

myEvery([4, 5, 6, 7], function(n) {
  return n > 5;
});