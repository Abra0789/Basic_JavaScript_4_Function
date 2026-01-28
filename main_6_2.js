//find max num using function
//anonymous function
const findMaxNumb = function(array) {
  let maxNum = array[0]; 
  // Initialize maxNum with the first element of the array 
  //prothom shonkhake boro shongkha dhore nei
  for (let i = 1; i < array.length; i++) {
    //start loop from second element
    //compare each element with maxNum
    //ptothom shongkha maxNum dhore nei tai i=1 theke loop shuru
    if (array[i] > maxNum) {
    //if current element is greater than maxNum, update maxNum
    //array[i] is current element
  
      maxNum = array[i];
      //jodi boro hoy current element ta tahole maxNum ke update kore oi boro current element shongkha diye
    }
      
  }
  return maxNum;//return the maximum number found in the array
};
const numsArray = [5, 9, 3, 15, 2];
const maxNumber = findMaxNumb(numsArray);
//calling the function and storing the result in the variable
//because of store the return value of the function 
//we use this calling method in a variable
console.log("The maximum number in the array is:", maxNumber); 