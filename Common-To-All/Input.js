const userInput = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

(function () {
  do {
    userInput.pause();
    userInput.question(
      `1. Push11 \n2. Pop \n3.Exit \nSelect from above\n`,
      (opt) => {
        switch (parseInt(opt)) {
          case 1:
            userInput.question(`Enter the number to push: `, (num) => {
              push(num);
              userInput.close();
            });
            console.log("Push");
            console.log("here");
          case 2:
            console.log("Popping the value");
            pop();
          case 3:
            console.log("Case 3");
            console.warn("Exited.....");
            process.exit(1);
          default:
            console.log("Wrong selection");
            process.exit(1);
        }
      }
    );
  } while (true);
})();

function push(num) {
  return num;
}

function pop(num) {
  return num;
}
