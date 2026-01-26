//check even odd number
//using annonymous function
const evnodd = function(array){
  let cnt =0;
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
      cnt++;
    }   
  }
  return cnt;

}
const arr = [1,2,3,4,5,6,7,8,9,10];
const result = evnodd(arr);
console.log("Total even numbers in the array is:", result); 
