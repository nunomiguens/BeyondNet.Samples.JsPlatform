function app() {
  const friends = ["Beto", "Ronald", "Luiggi", "JC"];

  console.log("RAMDA: Samples using RAMDA");

  const ramdaGreetSimpleFunction = ramdaGreettings("Good Night", "Aitana");

  const ramdaGreetCurry = friends.map(ramdaGreettings("Good Morning"));

  const ramdaGreetAfternoonPartial = ramdaGreettings("Good Afternoon");

  const ramdaGreetAfternoon = ramdaGreetAfternoonPartial("Beto");

  console.log(ramdaGreetSimpleFunction);
  console.log(ramdaGreetCurry);
  console.log(ramdaGreetAfternoon);
}

module.exports = app;
