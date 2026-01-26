// take array num
// use  loop to check whtether the array is sorted in ascending order
function sortedinAscending(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

const numbers = [1, 2, 7, 4, 5];
const result = sortedinAscending(numbers);
console.log("Is the array sorted in ascending order?", result);