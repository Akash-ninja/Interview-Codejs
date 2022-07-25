let counter = 1;

const expensive = () => {
  console.log("Expensive operations... ", counter++);
};

// this variant ignores the last call of expensive func. i.e.,
// after the limit is reached last call is not made
const throttle = (func, limit) => {
  let flag = true;

  return function () {
    let context = this,
      args = arguments;

    if (flag) {
      func.apply(context, args);

      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};


const throttle_v2 = (func, limit) => {
  let lastFunc; // stores timerId of setTimeout
  let lastRun = null; // stores timestamp

  return function () {
    const context = this;
    const args = arguments;

    if (!lastRun) {
      func.apply(context, args);
      lastRun = Date.now();
    } else {
      clearTimeout(lastFunc);

      lastFunc = setTimeout(() => {
        if (Date.now() - lastRun >= limit) {
          func.apply(context, args);
          lastRun = Date.now();
        }
      }, limit - (Date.now() - lastRun));
    }
  };
};

const invokeThrottle = throttle_v2(expensive, 2000);

window.addEventListener("resize", () => {
  invokeThrottle();
});
