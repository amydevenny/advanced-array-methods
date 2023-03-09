// select all checkboxes
const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');

//make an array with Array.from and use filter to return only checked boxes
const checked = Array.from(allCheckBoxes).filter(function(box) {
  return box.checked;
});

// find checked item text using .map and .parentElement
const completedItems = checked.map(function(checkbox) {
  return checkbox.parentElement.innerText;
});

// put it all into one function 
function extractCompletedTodos() {
  const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
  return Array.from(allCheckBoxes)
  .filter(function(box) {
    return box.checked;
  })
  .map(function(checkbox) {
    return checkbox.parentElement.innerText;
  });
}