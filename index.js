// Code your solution in this file.
function lowerCaseDriver(name){
  return name.toLowerCase()
}

function lowerCaseDrivers(drivers){
return drivers.map(lowerCaseDriver)
}

function createNewObject(name){
let nameArray = name.split (" ")
let firstName = nameArray [0]
let lastName = nameArray [1]
return {firstname: firstName , lastname: lastName};
}



function nameToAttributes (drivers) {
return drivers.map(createNameObject)
}