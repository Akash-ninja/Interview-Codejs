// Prime No. - Divisible by 1 and the number itself. Starts from 2(The first prime).

// Function to check if a number is prime or not
function isPrime(n) {
  if (n >= 1) {
    let flag = false,
      oneLine = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        flag = true;
        // For printing 'divisble by' only one time
        if (oneLine) {
          process.stdout.write(`Divisible by `);
          oneLine = false;
        }
        // this can only write strings
        process.stdout.write(`${i} `);
      }
    }
    if (!flag) console.log(`${n} is prime`);
    else console.log(`\nHence ${n} is non prime`);
  } else {
    console.log(`${n} is non-prime`);
  }
}

function primeInRange(low, up) {
  if (low >= up) {
    console.log("Error: Lower limit is greater than upper limit!!");
  } else {
    for (let p = low; p <= up; p++) {
      let flag = false,
        oneLine = true;
      for (var i = 2; i <= Math.sqrt(p); i++) {
        if (p % i == 0) {
          flag = true;
          break;
        }
      }
      if (!flag && p >= 2) process.stdout.write(`${p} `);
    }
    console.log();
  }
}

const userInput = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

userInput.question(
  `1. Check Prime \n2. Print Prime nos. in a range \nSelect from above\n`,
  opt => {

    // while(true) {
      switch (parseInt(opt)) {
        case 1:
          console.log("Case 1");
          checkPrime();
          break;
        case 2:
          console.log("Case 2");
          rangePrime();
          break;
        default:
          console.log("Wrong selection");
          process.exit(1)
      // }

      // userInput.question(`Want to exit? Y or N`, choice => {
      //   if (choice == "y" || choice == "Y") {
      //     break;
      //   } else continue;
      };
    }
);

function checkPrime() {
  userInput.question(`Enter the number: `, num => {
    isPrime(num);
    userInput.close();
  });
}

function rangePrime() {
  userInput.question(`Enter the lower and uppper limit: `, input => {
    let str = input.split(" ");
    primeInRange(parseInt(str[0]), parseInt(str[1]));
    userInput.close();
  });
}
