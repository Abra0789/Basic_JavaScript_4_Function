//remove duplicates
function removeDuplicates(array) {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

// Example
const nums4 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nums4)); // [1, 2, 3, 4, 5]