import { getGreetings } from "./samples/simple";
import { getGreetingsCurry } from "./samples/currying";
import { getGreetingsPartial } from "./samples/partial";
import {
  getComposeSentenceCount,
  getComposeDigitsInSentence,
  getPath,
  printStringPipe,
  printStringPipeAsync,
  printPipeWithAsynFunctions,
} from "./samples/ramda";

// const name = "Alberto Arroyo Raygada";

// const friends = ["Beto", "Ronald", "Luiggi", "JC"];

// const sentence =
//   "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

// getGreetings(name);

// getGreetingsCurry(friends);

// getGreetingsPartial(name);

// getComposeSentenceCount(sentence);

// getComposeDigitsInSentence(sentence);

// const response = {
//   errors: [
//     {
//       code: 400,
//       description: "BadError",
//       data: [
//         { message: "The length to the object is not valid" },
//         { message: "The value can not be empty" },
//       ],
//     },
//     {
//       code: 500,
//       description: "Internal Server Error",
//       data: [
//         { message: "The server is time out" },
//         { message: "The server has problems" },
//       ],
//     },
//   ],
// };

// getPath(["errors", 1, "data", 1], response);

// printStringPipe();

// printStringPipeAsync();

printPipeWithAsynFunctions();
