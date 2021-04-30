const curryGreetings = (greeting) => {
  return function (name) {
    return `${greeting} ${name}`;
  };
};

const getGoodMorningPartial = curryGreetings("Good Morning ");
const getGoodAfternoonPartial = curryGreetings("Good Afternoon ");
const getGoodNightPartial = curryGreetings("Good Night ");

export const getGreetingsPartial = (name) => {
  const morningGreeting = getGoodMorningPartial(name);
  const afternoonGreeting = getGoodAfternoonPartial(name);
  const nightGreeting = getGoodNightPartial(name);

  console.log(morningGreeting);
  console.log(afternoonGreeting);
  console.log(nightGreeting);
};
