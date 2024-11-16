// 1. Named Function

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("ASHMOL");

// 2. Named Function

var myfunc = function () {
  console.log("Ashvini");
};

myfunc();

// 3. Arrow   Function

const greet = () => console.log("Good Morning");

// Arrays in Java Script
// How to declare array in js

// 1. using tarditional way using[] bracket

const marveHeros = ["Iron Man", "Thor", "Captain America", "Balck Window"];
//2. using new Array ()
const dcHeros = new Array("Super man", "Wonder woomen", "falsh");

var cap = marveHeros[2];

for (let i = 0; i < marveHeros.length; i++) {
  console.log("marveHeros[i]");
}

for (let hero in marveHeros) {
  console.log(hero);
}

for (let hero of marveHeros) {
  console.log(hero);
}

marveHeros.forEach((hero, i) => console.log(hero, i));

const dcHeros1 = ["Iron Man", "Thor", "Captain America", "Balck Window"];
dcHeros1.push("Bat Man");
console.log(dcHeros1);
dcHeros1.pop("Iron Man");
