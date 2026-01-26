//using arrow function do multiplication of two numbers
const multiply = (a, b) => {
  return a * b;
};  
const result = multiply(5, 10);
console.log("The multiplication of two numbers is:", result);




//using  multiple array values

const multiplyArray = (array) => {
  let product = 1; //initialize product to 1 (as multiplying by 0 gives 0)
  //1 is the multiplicative identity
  for (let i = 0; i < array.length; i++) {
    product = product * array[i]; //multiply each element to product
  } 
  return product;
};
const arr = [1, 2, 3, 4, 5];
const arrayResult = multiplyArray(arr);
console.log("The multiplication of array elements is:", arrayResult); 


// Arrow function তৈরি করা
const productOfArray = (arr) => {
    let product = 1;   // product শুরু 1 দিয়ে

    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];   // প্রতিটা element এর সাথে গুণ
    }

    return product;   // final result return
};

// Function কল + Output দেখানো
console.log(productOfArray([2, 3, 4]));