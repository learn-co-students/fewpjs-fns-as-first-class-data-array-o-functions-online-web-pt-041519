function wakeDog(name = "Snuffles", breed = "evil ruler"){
  console.log(`Wake ${name} the ${breed}`);
  return `Wake ${name} the ${breed}`;
}

function leashDog(name = "Snuffles", breed = "evil ruler"){
  console.log(`Leash ${name} the ${breed}`);
  return `Leash ${name} the ${breed}`;
}

function walkToPark(name = "Snuffles", breed = "evil ruler"){
  console.log(`Walk to the park with ${name} the ${breed}`);
  return `Walk to the park with ${name} the ${breed}`;
}

function throwFrisbee(name = "Snuffles", breed = "evil ruler"){
  console.log(`Throw the frisbee for ${name} the ${breed}`);
  return `Throw the frisbee for ${name} the ${breed}`;
}

function walkHome(name = "Snuffles", breed = "evil ruler"){
  console.log(`Walk home with ${name} the ${breed}`);
  return `Walk home with ${name} the ${breed}`;
}

function unleashDog(name = "Snuffles", breed = "evil ruler"){
  console.log(`Unleash ${name} the ${breed}`);
  return `Unleash ${name} the ${breed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
  return routine.map(fn => fn(dogName, dogBreed))
}