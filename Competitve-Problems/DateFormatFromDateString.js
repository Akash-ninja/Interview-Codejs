'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'preprocessDate' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY dates as parameter.
 */
const monthObj = {
    'jan': '01',
    'feb': '02',
    'mar': '03',
    'apr': '04',
    'may': '05',
    'jun': '06',
    'jul': '07',
    'aug': '08',
    'sep': '09',
    'oct': '10',
    'nov': '11',
    'dec': '12',
}

function preprocessDate(dates) {
    // Write your code here
    const result = [];
    let prepareStr = '';

    for (const i in dates) {
        prepareStr = '';
        const oneDate = dates[i];

        const getYear = oneDate.slice(-5);
        prepareStr += getYear + '-';

        let getMonth = '';
        if (oneDate.length === 12) {
            const lastIndexMonth = oneDate.length / 2 + 1;
            const monthStr = oneDate.substring(lastIndexMonth - 3, lastIndexMonth).toLowerCase();
            getMonth = monthObj[monthStr];
            prepareStr += getMonth + '-';
            prepareStr += '0' + oneDate[0];
        } else {
            const lastIndexMonth = Number(oneDate.length / 2) + 2;
            const monthStr = oneDate.substring(lastIndexMonth - 3, lastIndexMonth).toLowerCase();
            getMonth = monthObj[monthStr];
            prepareStr += getMonth + '-';
            prepareStr += oneDate[0] + '' + oneDate[1];
        }

        result.push(prepareStr);
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const datesCount = parseInt(readLine().trim(), 10);

    let dates = [];

    for (let i = 0; i < datesCount; i++) {
        const datesItem = readLine();
        dates.push(datesItem);
    }

    const result = preprocessDate(dates);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


// Input: ['27th Jun 1996', '3rd Jan 2023']
// Output: 
/* 2023-01-03
   1996-06-27
*/