"use strict";
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies////
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

//creating an array using split
//We can split a string into different positions

let js = "JavaScript";
const charsJavaScript = js.split("");
console.log(charsJavaScript);

let companieString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companieString.split(", ");
console.log(companies);

let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");
console.log(words);

//Methods to modify an array
//Array constructor
const arr = new Array(8); //creates an array with eight empty values
console.log(arr);

//creating static values with fill
const eightXvalues = arr.fill("X");
console.log(eightXvalues);

//concatinating using the concat method
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList);
const myFruits = ["banana", "orange", "mango", "lemon"]; // array of fruits
const myVegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
const fruitsAndVegetables = myFruits.concat(myVegetables); // concatenate the two arrays

console.log(fruitsAndVegetables);

//getting the lenght using the lenght method
console.log(fruitsAndVegetables.length);
//indexof is used to get the index of element in an array
console.log(fruitsAndVegetables.indexOf("Tomato"));
