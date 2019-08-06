// Code your solution here


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


let findMatching = (driverArr, name) => {
    let result = driverArr.filter( driver => driver.toUpperCase() === name.toUpperCase())
    return result
}

function fuzzyMatch(driverArr, name){
    let result = driverArr.filter(driver => driver.startsWith(name))
    debugger
    return result
}

let matchName = (driverArr, name) => {
    let result = driverArr.filter(driver => driver.name == name)
    return result
}
