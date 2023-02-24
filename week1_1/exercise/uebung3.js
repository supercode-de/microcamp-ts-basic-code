function addToParticipants(name, participants) {
  participants.push(name);
  return participants;
}

function removeFromParticipants(name, participants) {
  const index = participants.indexOf(name);
  if (index > -1) {
    participants.splice(index, 1);
  }
  return participants;
}

participants = addToParticipants("Chad", participants);

console.log(greetEveryone("Hi", participants));

participants = removeFromParticipants("Marzio", participants);

console.log(greetEveryone("Hi", participants));
