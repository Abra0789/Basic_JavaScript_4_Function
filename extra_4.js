//vowel counter function
const vowelCount = function(str){
  let count = 0; //counter to count vowels
  const vowels = 'aeiouAEIOU'; //string containing all vowels
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) //includes() checks if the character is in the vowels string
      {
      count++;
    }
  }
  return count;
}
const inputString = "Hello World, This is a JavaScript Function!";
const result = vowelCount(inputString);
console.log("Total number of vowels in the string is:", result);
//আমরা রেজাল্টটা সংরক্ষণ করতে পারি না তাই ভ্যারিয়েবল ব্যবহার করে রেজাল্টটা সংরক্ষণ করছি

function countVowels(array) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j])) {
        count++;
      }
    }
  }
  return count;
}

// Example
const words = ["apple", "banana", "orange"];
console.log(countVowels(words)); // 8





function getAllVowels(array) {
  let vowels = "aeiouAEIOU";
  let foundVowels = [];

  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j])) {
        foundVowels.push(word[j]);
      }
    }
  }
  return foundVowels;
}

// Example
const words2 = ["apple", "banana", "orange"];
console.log(getAllVowels(words2));