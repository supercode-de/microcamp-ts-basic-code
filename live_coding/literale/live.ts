import * as readline from "readline";

type Action = "moveLeft" | "moveRight" | "moveUp" | "moveDown";

type Positon = [number, number];

//Beispiel: Spieler auf [3,4]

function performActionLight(pos: Positon, action: Action): Positon {
  const x = pos[0]; //3
  const y = pos[1]; //4
  switch (action) {
    case "moveLeft": {
      return [x - 1, y];
    }
    case "moveRight": {
      return [x + 1, y];
    }
    case "moveUp": {
      return [x, y - 1];
    }
    case "moveDown": {
      return [x, y + 1];
    }
  }
}

function isLegalPosition(pos: Positon): boolean {
  const x = pos[0]; //3
  const y = pos[1]; //4
  if (x < 0) {
    return false;
  }
  if (y < 0) {
    return false;
  }
  if (x > 7) {
    return false;
  }
  if (y > 7) {
    return false;
  }
  if (playingField[x][y] === "wall") {
    return false;
  }
  return true;
}

function performAction(pos: Positon, action: Action): Positon {
  const x = pos[0]; //3
  const y = pos[1]; //4
  const nextPos: Positon = performActionLight(pos, action);
  if (isLegalPosition(nextPos)) {
    return nextPos;
  }
  console.log("INVALID MOVE");
  return pos;
}

type FieldType = "empty" | "wall" | "treasure";

const playingField: FieldType[][] = [
  ["empty", "empty", "empty", "empty", "empty", "wall", "wall", "wall"],
  ["wall", "wall", "wall", "wall", "empty", "wall", "treasure", "wall"],
  ["wall", "wall", "wall", "wall", "empty", "wall", "empty", "wall"],
  ["empty", "empty", "empty", "empty", "empty", "wall", "empty", "wall"],
  ["empty", "wall", "wall", "wall", "wall", "wall", "empty", "wall"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall"],
  ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
  ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
];

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

function toAction(userInput: string): Action {
  if (userInput == "links") {
    return "moveLeft";
  }
  if (userInput == "rechts") {
    return "moveRight";
  }
  if (userInput == "oben") {
    return "moveUp";
  }
  if (userInput == "unten") {
    return "moveDown";
  }
  return undefined;
}

function runGame(startingPosition: Positon, playingField: FieldType[][]): void {
  console.log("Current Positon: " + startingPosition);
  console.log(
    "Gebe einen der folgenden Befehle ein: links, rechts, oben, unten"
  );
  let currentPosition = startingPosition;
  rl.question("Richtung: ", (answer) => {
    currentPosition = performAction(currentPosition, toAction(answer));
    const x = currentPosition[0];
    const y = currentPosition[1];

    const field: FieldType = playingField[x][y];
    console.log("---  Aktuelles Feld " + field + "---");
    //Code hier
    runGame(currentPosition, playingField);
  });
}

runGame([0, 0], playingField);

export {};
