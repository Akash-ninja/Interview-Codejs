/* 
 Input: azxxzyyddddyzzz
 Output: azzz

 Input: aaabbbaaabbabddccc
 Output: aaaccc
*/

function findResultantString(str) {
  let copyStr = str.toLowerCase()
  let countSame = 1;

  for (let i = 0; i <= copyStr.length - 1; i++) {
    if ( (copyStr.length-1 !== i) && (copyStr[i] === copyStr[i + 1]) ){
      countSame++;
      continue;
    }

    if (countSame % 2 == 0) {
      copyStr = removeEvenDuplicates(countSame, copyStr, i);
      i = -1;
      countSame = 1;
      continue;
    } else {
      countSame = 1;
      continue;
    }
  }

  return copyStr.join("");
}

function removeEvenDuplicates(countSame, arr, it) {
  const transformArr = [];
  for (let i = 0; i < arr.length - countSame; i++)
    if (i > it - countSame) 
        transformArr.push(arr[i + countSame]);
    else
        transformArr.push(arr[i]) 

  return transformArr;
}

console.log(findResultantString('aaabbbaaabbabddcccc'));