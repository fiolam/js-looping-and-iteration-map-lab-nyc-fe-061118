// Code your solution in this file.
function lowerCaseDriver(name){
  return name.toLowerCase()
}

function lowerCaseDrivers(drivers){
return drivers.map(lowerCaseDriver)
}

function CreateNewObject(name){
let nameArray = name.split (" ")
let firstName = nameArray [0]
let lastName = nameArray [1]
return {firstname: firstName, lastname:lastName};
}


names.map(createNewObject)
function nameToAttributes(names){
return names.map(createNameObject}
}