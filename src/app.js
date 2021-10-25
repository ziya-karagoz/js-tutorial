// rest
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products[0][0]);
};

//spread
let points = [1, 2, 3, 4, 56, 23, 51, 20];
console.log(...points);
console.log(Math.max(...points));

// deconstruct
let deneme = ["ali", "veli", "can", "cem"];
let [name1, name2, name3, name4] = deneme;
console.log(name1);

let denemeObj = { id: 1, name: "Yemekler" };

let { alan1, alan2 } = denemeObj;

console.log(alan1);
