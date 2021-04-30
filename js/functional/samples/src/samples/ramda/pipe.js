import R from "ramda";

const function1 = (val) => {
  return "Hello";
};

const function2 = (val) => {
  const value = val + " world.";

  return value;
};

const function3 = (val) => {
  return val + " I am PIPE from RAMDA";
};

const function4 = async (val) => {
  const value = val + " world." + (await GetDate());

  return value;
};

async function GetDate() {
  return await new Date();
}

export const printStringPipe = () => {
  const result = R.pipe(function1, function2, function3)(" ");

  console.log(result);
};

export const printStringPipeAsync = async () => {
  const result = await R.pipe(function1, function4, R.andThen(function3))(" ");

  console.log(result);
};

async function AsyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("This is a test for pipe.withAll ");
    }, 250);
  });
}
async function AsyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("It works only for async functions? ");
    }, 250);
  });
}

async function AsyncFunction3() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("What do you thing ");
    }, 250);
  });
}

export const printPipeWithAsynFunctions = () => {
  const result = R.pipeWith(R.andThen, [
    AsyncFunction1,
    AsyncFunction2,
    AsyncFunction3,
  ])("");

  console.log(result);
};
