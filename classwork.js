//duplicate checker using function

// input : array and duplicate value 
//values are true or false
// output : array of duplicate values
const chkduplicate = (arr) => {
  const seen = {};
  for (let value of arr) {
    if (seen[value]) {
      return true;
    } else {
      seen[value] = true;
    }
  }
  return false;
}
const array1 = [1, 2, 3, 2, 6, 7, 8, 2];

const rslt = chkduplicate(array1);

if (rslt) {
  console.log("Duplicate value found in the array.");
} else {
  console.log("No duplicate value found in the array.");
}

