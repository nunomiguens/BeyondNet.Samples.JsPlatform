const greetings = (greeting, name) => {
  console.log(`${greeting} ${name}`);
};

export const getGreetings = (name) => {
  console.log(greetings("Good Morning", name));
};
