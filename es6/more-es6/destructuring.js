const fish = {
  name: "king hilsha",
  id: 58,
  price: 9000,
  phone: "01283919831313",
  address: "chandpur",
  dress: "sliver",
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// destructuirng

const { phone, price, address, dress, id } = fish;

// console.log(phone,dress);
// console.log(phone);
// console.log(phone);
// console.log(phone,price);
// console.log(phone);

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuska" },
  web: {
    work: "website devlopment",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

const { work, framework } = company.web;
const { food, name } = company.ceo;
const { first } = company.web.tech;

// console.log(work , framework, name);
console.log(first);
