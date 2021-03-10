// About Array.splice()

// changes the contents of Original array (by removing, replacing and adding elements)
// Arguments - Array.slice(startIndex, count, item1, item2, ........)
    // startIndex(=optional) - Number to indicate start point of extraction (follows array based index)
    // count(=optional) - Number of elements to be deleted (usually extracts-> Number-1)

// Returns - An array (of deleted or empty elements)
// Note: 1. Mutates the Original array


// STARTINDEX
// startIndex > array.length, startIndex == array.length => // will behave as ADDING method
// startIndex < 0, indexing starts from end

// COUNT
// count == not given OR count > Number of elements left in the array, all elements from startIndex to end will be removed
// count == 0 OR count < 0, No element is removed, need to specify some item to add

// ITEMS
// item1, item2 == items to be added or replace

// REMOVAL OF ITEMS
// Case 1:
const months = ['Jan', 'March', 'April', 'June'];
const removedElements = months.splice(1, 2); // From index 1 remove 2 elements
console.log(months); // ["Jan", "June"]
console.log(removedElements); // ["March", "April"]

// Case 2:
const months1 = ['Jan', 'March', 'April', 'June'];
const removedElements1 = months1.splice(1); // From index 1 remove all elements
console.log(months1); // ["Jan", "June"]
console.log(removedElements1); // ["March", "April"]

// Case 3:
const months2 = ['Jan', 'March', 'April', 'June'];
const removedElements2 = months2.splice(3, 2); // From index 3 remove 2 elements
console.log(months2); // ['Jan', 'March', 'April']
console.log(removedElements2); // ["June"]

// Case 4:
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1); // From index -2 remove 1 element
console.log(myFish); // myFish is ["angel", "clown", "sturgeon"]
console.log(removed); // removed is ["mandarin"]

// REPLACING ITEMS
let myFish1 = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed1 = myFish.splice(0, 2, 'parrot', 'anemone', 'blue') // From index 0, remove 2 elements and replace with items
console.log(myFish1);  // myFish1 is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
console.log(removed1); // removed1 is ["angel", "clown"]

// ADDING ITEMS
// Provide 2nd argument as 0 for insertion
let myFish2 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed2 = myFish2.splice(2, 0, 'drum', 'guitar')
console.log(myFish2); // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
console.log(removed2); // removed is [], no elements removed
