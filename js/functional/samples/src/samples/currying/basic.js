const curryGreetings = (greeting) => {
  return function (name) {
    return `${greeting} ${name}`;
  };
};

export const getGreetingsCurry = (friends) => {
  const friendGreetings = friends.map(curryGreetings("Good Morning"));

  console.log(`Listing greetings: ${friendGreetings} from: ${friends}`);
};
