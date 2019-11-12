function actions(action, dogName, dogBreed){
  let msg = `${action} ${dogName} the ${dogBreed}`
  console.log(msg)
  return msg
}

function wakeDog(dogName, dogBreed){
  return actions("Wake", dogName, dogBreed)
}

function leashDog(dogName, dogBreed){
  return actions("Leash", dogName, dogBreed)
}

function walkToPark(dogName, dogBreed){
  return actions("Walk to the park with", dogName, dogBreed)
}

function throwFrisbee(dogName, dogBreed){
  return actions("Throw the frisbee for", dogName, dogBreed)
}

function walkHome(dogName, dogBreed){
  return actions("Walk home with", dogName, dogBreed)
}

function unleashDog(dogName, dogBreed){
  return actions("Unleash", dogName, dogBreed)
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
  return routine.map(nr => nr(dogName, dogBreed))
}