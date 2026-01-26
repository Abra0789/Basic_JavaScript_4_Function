//take array number
// use loop to find the second largest number in the array
//built-in methods are not allowed
function secondLargest(array) {
  let largest = -Infinity;
  //initialize largest to the smallest possible number
  //-infinity is smallest value 
  //so any number in the array will be larger than this
  //this ensures that the first number in the array will always update largest
  let second = -Infinity;  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {//check if current element is greater than largest
      second = largest;//update second largest before updating largest
      largest = array[i];//update largest to current element
    } else if (array[i] > second && array[i] !== largest)//check if current element is greater than second largest and not equal to largest
    {
      second = array[i];//update second largest
    } 
  }
  return second;
} 
const nums = [3, 5, 7, 2, 8, 6];
const secondLargestNumber = secondLargest(nums);//calling the function
console.log("The second largest number is:", secondLargestNumber);  
