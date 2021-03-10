// About Array.slice() and String.slice() - Same as array slice

// Used for slicing/extracting a piece of array
// Arguments - Array.slice(startIndex, endIndex)
    // startIndex(=optional) - Number to indicate start point of extraction (follows array based index)
    // endIndex(=optional) - Number to indicate end point of extraction (usually extracts-> Number-1)

// Returns - An array (of substring or exracted string)
// Note: 1. Does not mutate the Original array 2. Returns shallow copy of portion of array

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice());    // ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(0,3)); // ['ant', 'bison', 'camel']

console.log(animals.slice(5));    // [] (if index >= array-length)
console.log(animals.slice(0, 0)); // []

// If NO endIndex then extraction done to the end
console.log(animals.slice(3));    // ['duck', 'elephant']

// Extracts last 3 elements
console.log(animals.slice(-3));  // ["camel", "duck", "elephant"]

// endIndex < 0, end-index starts from end with last element as index -1
console.log(animals.slice(0, -1));  // ['ant', 'bison', 'camel', 'duck']

console.log(animals.slice(-3, -1)); // ['camel', 'duck']
