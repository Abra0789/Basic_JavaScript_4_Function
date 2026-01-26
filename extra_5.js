//to get all vowels from an array of strings
function getAllVowels(array) {
  let vowels = "aeiouAEIOU";
  let foundVowels = [];//to store found vowels

  for (let i = 0; i < array.length; i++)
    //full array iteration
  {
    let word = array[i];//recent element from array will be stored in word variable
    for (let j = 0; j < word.length; j++) 
      //iterate through each character of the word
    {
      if (vowels.includes(word[j])) {
        foundVowels.push(word[j]);
      }
    }
  }
  return foundVowels;
}

// Example
const words2 = ["apple", "banana", "orange"];
console.log(getAllVowels(words2)); // ['a', 'e', 'a', 'a', 'o', 'a', 'e']
//আমরা রেজাল্টটা সংরক্ষণ করতে পারি না তাই ভ্যারিয়েবল ব্যবহার করে রেজাল্টটা সংরক্ষণ করছি

//now create a function that common vowels should be returned only once
function getUniqueVowels(array) {
  let vowels = "aeiouAEIOU";
  let foundVowels = [];//to store found vowels  
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j]) && !foundVowels.includes(word[j])) {
        foundVowels.push(word[j]);
      }
    }
  }
  return foundVowels;
}

// Example
const words3 = ["apple", "banana", "orange"];
console.log(getUniqueVowels(words3)); // ['a', 'e', 'o']
//আমরা রেজাল্টটা সংরক্ষণ করতে পারি না তাই ভ্যারিয়েবল ব্যবহার করে রেজাল্টটা সংরক্ষণ করছি

