import * as readline from "readline";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runGame(
  startingPosition: [number, number],
  playingField: fieldType[][]
): void {
  console.log("Current Positon: " + startingPosition);
  console.log(
    "Gebe einen der folgenden Befehle ein: links, rechts, oben, unten"
  );
  let currentPosition = startingPosition;
  rl.question("Richtung: ", (answer) => {
    //Code hier
    runGame(currentPosition, playingField);
  });
}
