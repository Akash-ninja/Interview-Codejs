// About String.split()
// Arguments - String.split(separator, limit) 
    // separator(=optional) - Any char or Regular Expression
    // limit(=optional) - number_to_limit_splitted_strings
// Returns - An array (of separated strings)
// Note: Does not mutate the Original array

let anystr = 'A type of string';

// If no separator is passed then whole string is returned as an Array
const noArgsPassed = anystr.split();
console.log(noArgsPassed);

// Separates the string on each character
const charArray = anystr.split('');
console.log(charArray);

const charArray2 = [...anystr];
console.log(charArray2);

const charArray3 = Array.from(anystr);
console.log(charArray3);

// To Return a limited number of splits
const limitedCharArray = anystr.split('', 3);
console.log(limitedCharArray);

// Separation done on space
const spaceSeparatedStringArray = anystr.split(' ');
console.log(spaceSeparatedStringArray);

const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
const comma = ',';
const arrayOfStrings = monthString.split(comma);
console.log(arrayOfStrings);

// Separation done based on Regular Expression
const myString = 'Hello 1 word. Sentence number 2.';
const regExp = /(\d)/;
const splits = myString.split(regExp);
console.log(splits);

// Reversal of string
const str = 'akash';
const strReverse = str.split('').reverse().join('')
console.log(strReverse);
