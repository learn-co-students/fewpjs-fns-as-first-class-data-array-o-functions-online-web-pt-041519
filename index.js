let msg;

const wakeDog = function(dogName="Default", dogBreed="mut") {
  msg = `Wake ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

const leashDog = function(dogName="Default", dogBreed="mut") {
  msg = `Leash ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

const walkToPark = function(dogName="Default", dogBreed="mut") {
  msg = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

const throwFrisbee = function(dogName="Default", dogBreed="mut") {
  msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

const walkHome = function(dogName="Default", dogBreed="mut") {
  msg = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

const unleashDog = function(dogName="Default", dogBreed="mut") {
  msg = `Unleash ${dogName} the ${dogBreed}`;
  console.log(msg);
  return msg;
}

const routine = [
  wakeDog, 
  leashDog, 
  walkToPark, 
  throwFrisbee, 
  walkHome, 
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  // Iterate through array and call each function. Return values to array.
  return routine.map(action => action(dogName, dogBreed))
}