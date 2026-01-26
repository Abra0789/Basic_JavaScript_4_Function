//find max num using function
function findMaxNumber(array) {
  let maxNum = array[0]; // Initialize maxNum with the first element of the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
}
const numsArray = [3, 5, 7, 2, 8, 1];
const maxNumber = findMaxNumber(numsArray);
console.log("The maximum number in the array is:", maxNumber);  


function findMaximum(array) {
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Example
const nums2 = [3, 7, 2, 9, 5];
console.log(findMaximum(nums2)); // 9