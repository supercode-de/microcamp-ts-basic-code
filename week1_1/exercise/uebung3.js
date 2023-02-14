function addToParticipants(name) {
  participants.push(name);
  return true;
}
function removeFromParticipants(name) {
  const index = participants.indexOf(name);
  if (index > -1) {
    participants.splice(index, 1);
    true;
  }
  false;
}
