let counter = 0;

const getData = () => {
  console.log("Fetching data..... ", counter++);
};

const debounce = (func, delay) => {
  let timerId;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const invokeDebounce = debounce(getData, 500);

// invokeDebounce() - this will be called