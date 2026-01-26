//sum of positive numbers in an array
//using function
function sumPos(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
const numbers = [10, -5, 3, -1, 7, -2];
const result = sumPos(numbers);
console.log("Sum of positive numbers in the array is:", result);
//আমরা রেজাল্টটা সংরক্ষণ করতে পারি না তাই ভ্যারিয়েবল ব্যবহার করে রেজাল্টটা সংরক্ষণ করছি 