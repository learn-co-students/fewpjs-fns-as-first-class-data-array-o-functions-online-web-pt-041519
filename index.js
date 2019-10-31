


function performTask(task, name, type){
    let str = `${task} ${name} the ${type}`
    console.log(str)
    return str
}

function wakeDog(name, type){
    return performTask("Wake", name, type)
}

function leashDog(name, type){
    return performTask("Leash", name, type)
}

function walkToPark(name, type){
    return performTask("Walk to the park with", name, type)
}

function throwFrisbee(name, type){
    return performTask("Throw the frisbee for", name, type)
}

function walkHome(name, type){
    return performTask("Walk home with", name, type)
}

function unleashDog(name, type){
    return performTask("Unleash", name, type)
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed){
    return routine.map( r => r(name, breed))
}