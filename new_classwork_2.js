//avg of array items
function avgarray(array){//any name can be used for parameter
  let sum =0;
  for(let i=0; i<array.length; i++){
    sum = sum + array[i];
  }
  return sum / array.length;
}
const num = [1000,5000,25435,3242,35,235,4325];
const result = avgarray(num);//num is argument
console.log("Average of array items:", result);
