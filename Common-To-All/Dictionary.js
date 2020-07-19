function processData(input) {
  
  inputData = input.split("\n");
  n = parseInt(inputData[0]);
  let dict = {};
  for (i = 1; i <= n; i++) {
    let tempArr = inputData[i].split(" ");
    
    dict[tempArr[0]] = tempArr[1];
    console.log(dict);
  }

  for (i = n + 1, j = 1; j < inputData.length - n; i++, j++) {
    if (dict[inputData[i]]) {
      console.log(`${inputData[i]}=${dict[inputData[i]]}`);
    } else {
      console.log("Not found");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
