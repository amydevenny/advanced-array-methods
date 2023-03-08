const colors = ['teal', 'cyan', 'peach', 'purple'];

// logs value, index and entire array
colors.forEach(console.log);

//create anonymous function to log each value in uppercase
colors.forEach(function(val){
  console.log(val.toUpperCase());
})

//create declared function to log each index and value
function yell(val, i) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}: ${caps}`);
}

//call the function on the colors array
colors.forEach(yell);

//log total of an array of prices ---- for of loop works better for this
const prices = [ 30.99, 19.99, 2.50, 99.00 ];
let total = 0;
prices.forEach(function(price) {
  total += price;
});
console.log(total);

// build a function in place of forEach
function myForEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

myForEach(colors, function(color){
  console.log(color.toUpperCase());
})