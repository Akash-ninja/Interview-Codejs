var str = 'Welcome to India';

//output = 'emoclew ot aidnI'
let singleOutput;
let tempOutput = [], output = '';

const splittedString = str.split(' ');
for (let i=0; i<splittedString.length; i++) {
    singleOutput = [];
	singleString = splittedString[i];
    for (let j=singleString.length-1; j>=0; j--) {
      singleOutput.push(singleString[j]);
    }
  	tempOutput.push(singleOutput.join(''));
  	output = tempOutput.join(' ');
}

console.log(output)