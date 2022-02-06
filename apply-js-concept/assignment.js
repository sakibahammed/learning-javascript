// ana To Vori convert
function anaToVori(ana) {
    var vori = ana / 16;
    return vori;
  }
  var inputAna = 38;
  var vori = anaToVori(inputAna);
  console.log(vori);
  
  //panda Cost calculation
  /* function pandaCost(singgara, samucha, jilapi) {
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
  const foodOrder = pandaCost(1, 2, 1);
  console.log(foodOrder); */
  
  //picnic Budget calculation
  /* function picnicBudget(number) {
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
      //201-unlimited persons cost
      const first100Persons = 100 * forFirst100Person;
      const second100Persons = 100 * forSecond100Person;
      const restPersons = number - 200;
      const thirdRestPersons = restPersons * forThirdRestPerson;
      const totalCost = first100Persons + second100Persons + thirdRestPersons;
      return totalCost;
    }
  }
  const totalPerson = picnicBudget(500);
  console.log(totalPerson); */
  