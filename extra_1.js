//even number filter
//create a function that takes an array of number as input 
//uses a loop to extract only even numbers from the array
//returns a new array containing the even numbers
function fltrEvnNum(array) {
  let fltrEvnNum = [];//initialize an empty array to store even numbers

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {//check if the current element is even
      fltrEvnNum.push(array[i]);//if even, add it to the new array
    } //push method adds the element to the end of the array
  }
  return fltrEvnNum;//return the array containing even numbers


}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//example array of numbers
const evenNumbers = fltrEvnNum(nums);//calling the function and storing the result
console.log("The even numbers are:", evenNumbers);//printing the result 
