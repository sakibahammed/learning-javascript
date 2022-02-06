//Problem-1: ana To Vori convert
function anaToVori(ana) {
  //Error message
  if (typeof ana == "string") {
    return "Enter Number Value";
  }
  if (ana < 0) {
    return "Enter Positive Number";
  }
  //convert
  var vori = ana / 16;
  return vori;
}
var inputAna = 16;
var vori = anaToVori(inputAna);
console.log(vori);

//Problem-2: panda Cost calculation
function pandaCost(singgara, samucha, jilapi) {
  //Error message
  if (
    typeof singgara == "string" ||
    typeof samucha == "string" ||
    typeof jilapi == "string"
  ) {
    return "Enter Number Value";
  }
  if (singgara < 0 || samucha < 0 || jilapi < 0) {
    return "Enter Integer Number";
  }
  //food price
  const perSinggaraPrice = 7;
  const perSamuchaPrice = 10;
  const perJilapiPrice = 15;
  //food calculation
  const singgaraQuantity = singgara * perSinggaraPrice;
  const samuchaQuantity = samucha * perSamuchaPrice;
  const jilapiQuantity = jilapi * perJilapiPrice;
  //adding all food quantity
  const totalFood = singgaraQuantity + samuchaQuantity + jilapiQuantity;
  return totalFood;
}
const foodOrder = pandaCost(1, 1, 1);
console.log(foodOrder);

//Problem-3: picnic Budget calculation
function picnicBudget(number) {
  //Error message
  if (typeof number == "string") {
    return "Enter Number Value";
  }
  if (number < 0) {
    return "Enter Positive Number";
  }
  //Per Person Cost
  const forFirst100Person = 5000;
  const forSecond100Person = 4000;
  const forThirdRestPerson = 3000;
  if (number <= 100) {
    //first 100 persons cost
    const cost = number * forFirst100Person;
    return cost;
  } else if (number <= 200) {
    //101-200 persons cost
    const first100Persons = 100 * forFirst100Person;
    const restPersons = number - 100;
    const second100Persons = restPersons * forSecond100Person;
    const totalCost = first100Persons + second100Persons;
    return totalCost;
  } else {
    //201- rest persons cost
    const first100Persons = 100 * forFirst100Person;
    const second100Persons = 100 * forSecond100Person;
    const restPersons = number - 200;
    const thirdRestPersons = restPersons * forThirdRestPerson;
    const totalCost = first100Persons + second100Persons + thirdRestPersons;
    return totalCost;
  }
}
const totalPerson = picnicBudget(100);
console.log(totalPerson);

//Problem-4: first odd Friend name
function oddFriend(name) {
    //Error message
    if (typeof name == "number") {
      return "Enter String Value";
    }
    //find oddName
    else{
        for (let i = 0; i < name.length; i++) {
            let element = name[i];
            if (element.length % 2 != 0) {
              return element;
            }
          }
    }
    // for (let i = 0; i < name.length; i++) {
    //   let element = name[i];
    //   if (element.length % 2 != 0) {
    //     return element;
    //   }
    // }
  }
  const friendNames = ['lkknkn','sakib'];
  const result = oddFriend(friendNames);
  console.log(result);
  