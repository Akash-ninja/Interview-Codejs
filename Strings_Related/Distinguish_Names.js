/* 
 Input: AkashPawanAbhijeetPawanSafaBaspaBaspaAkash
 
*/

function getSplittedWords(str) {
   
   let words = [],
       cntWords = 0, index = 0

   for(let i=0; i<str.length; i++) {
     
      if(i!=0 && str[i]>='A' && str[i]<='Z') {
         words[cntWords++] = str.slice(index, i) // push()
         index = i
      } else if(i == str.length-1) {
         words[cntWords++] = str.slice(index, str.length)
      }
   }
   return words;
}

function refactored_getSplittedWords(str) {
   
   let words = [], index = 0

   for(let i in str) {
      if(i!=0 && str[i]>='A' && str[i]<='Z') {
         words.push(str.slice(index, i))
         index = i
      } else if(i == str.length-1) {
         words.push(str.slice(index, str.length))
      }
   }
   return words;
}

getRepeatedWords = (wordsInString) => {

   let arr = [], repeatedWords = [], noticeIndex = []

   for(let i=0; i<wordsInString.length; i++) {
     let count = 1, flag = false
     if(noticeIndex.includes(i)) {
        continue;
     }
     for(let j=i+1; j<wordsInString.length; j++) {
       if(wordsInString[i] == wordsInString[j]) {
          noticeIndex.push(j)
          arr[i] = ++count
          flag = true
       }
     }
     if(flag == false) {
        arr[i] = 0
     }
   }
   
   for(let i=0; i<arr.length; i++) {
      if(arr[i] > 0) {
         repeatedWords[wordsInString[i]] = arr[i]
      }
   }

   console.log(repeatedWords)
   return repeatedWords
}

refactored_getRepeatedWords = (wordsInString) => {

   let storeIndexofRepeatedWords = [], repeatedWords = [], noticeIndex = []
 
    for(let i in wordsInString) {
      let count = 1, flag = false
      if(noticeIndex.includes(i)) {
         continue;
      }
      for(let j=parseInt(i)+1; j<wordsInString.length; j++) {
        if(wordsInString[i] == wordsInString[j]) {
            console.log(j)
           noticeIndex.push(j)
           storeIndexofRepeatedWords[i] = ++count
           flag = true
        }
      }
      if(flag == false) {
         storeIndexofRepeatedWords[i] = 0
      }
    }
    
    for(let i in storeIndexofRepeatedWords) {
       if(parseInt(storeIndexofRepeatedWords[i]) > 0) {
          repeatedWords[wordsInString[i]] = storeIndexofRepeatedWords[i]
       }
    }
 
    console.log(repeatedWords)
    return repeatedWords
}

distinguishNames = function(str) {

   let wordsInString = refactored_getSplittedWords(str)
   console.log(wordsInString)
   let repeatedWords = refactored_getRepeatedWords(wordsInString)
   
}

let str = 'AkashPawanAbhijeetPawanSafaBaspaBaspaAkashBaspaSafa'
distinguishNames(str)