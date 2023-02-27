function greetEveryone(greeting: number, participants: string[]): boolean {
  let message = "";
  participants.forEach((participant) => {
    message += greeting + " " + participant + "\n";
  });
  return message;
}

let welcomeText: string = "Willkommen im TypeScript-Kurs";

let participants: number[] = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];

console.log(greetEveryone(welcomeText, participants));

export {};
