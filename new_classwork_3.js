// find the longenst string from an array of strings
function longstr(array) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
} 
const words = ["apple", "banana", "cherry", "watermelon", "grapefruit"];
const longestString = longstr(words);
console.log("The longest string is:", longestString);     
