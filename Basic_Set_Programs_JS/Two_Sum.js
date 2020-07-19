
let twoSum_Best = function(nums, target) {
    let numberIndex = new Map();
    let result = [];

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let complement = target - num;

      if (numberIndex.has(complement)) {
        result[0] = numberIndex.get(complement);
        result[1] = i;

        return result;
      }

      numberIndex.set(num, i);
    }

    return result;
};

var twoSum_Medium = function(nums, target) {
    
    let i = 0, j = 1
    
    while(j>i && j < nums.length) {

        if  (nums[i]+nums[j] == target)
           return [i, j]
        
        if(j == nums.length-1) {
            i++
            j=i+1
            continue
        }
        j++
    }
};

var twoSum_Basic = function(nums, target) {
    
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            if(i!=j && nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

twoSum([2, 5, 7, 11, 15, 90], 9)