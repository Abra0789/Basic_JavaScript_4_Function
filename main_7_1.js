//find max num using function
//anonymous func

const findMinNumb = function(array) {
  let minNum = array[0]; 
  // Initialize minNum with the first element of the array 
  //prothom shonkhake choto shongkha dhore nei
  for (let i = 1; i < array.length; i++) {
    //start loop from second element
    //compare each element with minNum
    //ptothom shongkha minNum dhore nei tai i=1 theke loop shuru
    if (array[i] < minNum) {
    //if current element is smaller than minNum, update minNum
    //array[i] is current element
  
      minNum = array[i];
      //jodi choto hoy current element ta tahole minNum ke update kore oi choto current element shongkha dara
    }
      
  }
  return minNum;

};
const numsArray = [5, 9, 3, 15, 2];
const minNumber = findMinNumb(numsArray);
//calling the function and storing the result in the variable
//because of store the return value of the function 
//we use this calling method in a variable
console.log("The Minimum number in the array is:", minNumber);  