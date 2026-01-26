//get words that contain at least one vowel from an array of strings
function getWordsWithVowels(array) {
  let result = [];//to store words with vowels
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < array.length; i++)//full array iteration
  {
    let word = array[i];//recent word add from array to word variable
    
    let hasVowel = false;//flag to check if the word has at least one vowel

    for (let j = 0; j < word.length; j++) // ei loop ta use kori word er prottek character check korar jonno
      {
      if (vowels.includes(word[j])) {
        hasVowel = true;
        break;
      }
    }

    if (hasVowel) {
      result.push(word);//add word to result array if it contains at least one vowel
      //result array te word ta add korbo jodi oi word e at least ekta vowel thake
    }
  }
  return result;
}

// Example
const words = ["apple", "banana", "sky", "try", "orange"];
console.log(getWordsWithVowels(words));