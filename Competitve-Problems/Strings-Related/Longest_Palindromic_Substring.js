var longestPalindrome = function(s) {
    
    if(s.length === 1) {
        return s
    } else if(s.length === 2) {
        if(s[0] === s[1]) {
            return s    
        } else {
            return s[0]
        }
    }

    for(let i in s) {
        
    }
};

console.log(longestPalindrome('babad'))