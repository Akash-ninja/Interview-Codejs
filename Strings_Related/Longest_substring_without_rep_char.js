var lengthOfLongestSubstring1 = function(s) {
   let substringLen = 0, key = 0, locationMarked = 0
   let characters = [];
   
   if(s.length === 0) {
      return 0;
   } else if(s.length === 1){
      return 1;
   }
      
   for(let i in s) {
     characters[key] = s[i];
     for(let j=locationMarked; j<characters.length - 1; j++) {
        if(characters[j] === s[i]) {
           substringLen = substringLen < characters.length-locationMarked-1 ? characters.length-locationMarked-1 : substringLen;
           locationMarked = j+1;
           break;
        }
     }
     key++;
   }
   
   if(locationMarked !== s.length - 1) {
      substringLen = substringLen < s.length - locationMarked ? s.length - locationMarked : substringLen;
   }
   return substringLen;
};

var lengthOfLongestSubstring2 = function(s) {
   let max_len = 0;
   let curr = 0;
   let hash = {}; 
   if (s.length < 2) {
       return s.length;
   }
   for(let i = 0; i < s.length;  i++) {
       if(hash[s[i]] == null) {
           curr += 1;
       } else {
           curr = Math.min(i - hash[s[i]], curr + 1);
       }
       max_len = Math.max(max_len, curr);
       hash[s[i]] = i; //save the index
   }
   console.log(hash)
   return max_len;
};

console.log(lengthOfLongestSubstring2('ammm'))
