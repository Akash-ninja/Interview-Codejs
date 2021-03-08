'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'itemsSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY items as parameter.
 */

function countElements(a) {
    let counts = {}

    for (let i = 0; i < a.length; i++) {
        if (counts[a[i]]) {
            counts[a[i]] += 1;
        } else {
            counts[a[i]] = 1;
        }
    }
    
    // console.log(counts)
   return counts; 
}

function itemsSort(items) {
    // Write your code here
    const objCount = countElements(items);
    
    const keysSorted = Object.keys(objCount).sort(function(a,b){return objCount[a]-objCount[b]});
    // console.log(keysSorted)
    
    const result = []
    for(const i in keysSorted) {
        for(let j=1; j<=objCount[keysSorted[i]]; j++){
            result.push(parseInt(keysSorted[i]));
        }
    }
    // console.log(result);
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const itemsCount = parseInt(readLine().trim(), 10);

    let items = [];

    for (let i = 0; i < itemsCount; i++) {
        const itemsItem = parseInt(readLine().trim(), 10);
        items.push(itemsItem);
    }

    const result = itemsSort(items);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

// Description: Sort first by quantity and then by value in ascending order
// Input - 4,4,3,2,1,8,5,5,5
// Output - 1,2,3,8,4,4,5,5,5

// e.g.2 - input - 1,2,3,2,4
// output - 1,3,4,2,2
