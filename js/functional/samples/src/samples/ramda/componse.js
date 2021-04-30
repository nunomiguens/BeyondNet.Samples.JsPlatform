const R = require("ramda");

export const getComposeSentenceCount = (sentence) => {
  const wordList = R.split(" ", sentence);

  const wordCount = R.length(wordList);

  console.log(`Word List: ${wordList}, Count: ${wordCount}`);

  const countWords = R.compose(R.length, R.split(" "));

  const result = countWords(sentence);

  console.log(`Count: ${result}`);
};

export const getComposeDigitsInSentence = (sentence) => {
  const numbersInString = R.pipe(
    R.split(""),
    R.map(parseInt),
    R.filter(Number.isInteger),
    R.length
  );

  console.log(`Sentence: ${sentence}, Count: ${numbersInString(sentence)}`);
};
