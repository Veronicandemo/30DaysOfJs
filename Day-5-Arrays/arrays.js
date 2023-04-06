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

// Find the last element of the following arrays.
const arr1 = [3,7,34,90,12]
const arr2 = [true, "green", "where",12,56]


console.log(arr1[arr1.length -1])
console.log(arr2[arr2.length -1])

// Write a JS program that will join the following array elements into a string
const myPets = ["Cow", "Python", "Snake", "Dog"];
const newPetsArr = myPets.join(',') 
console.log(newPetsArr)
// Write a JS script to sort the following array items

//merge Sort
const divingArray = function(array){
  if(array.length <= 1)
  return array

  let middle = array.length /2
  let left = array.slice(0,middle)
  let right = array.slice(middle)

  return sortingArr(divingArray(left),divingArray(right))
}

const  sortingArr = function(leftArr, rightArr){
  let emptyArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]){
      emptyArr.push(leftArr.shift())
    }else{
      emptyArr.push(rightArr.shift())
    }
  }
  return [...emptyArr,...leftArr,...rightArr]

}
const arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(divingArray(arr3))
// console.log(arr3.sort())
// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
const arrFruits = ["apple", "mango", "apple", "orange", "mango", "mango"];
// arr.forEach(function(element, index, array){
//   console.log(`${element} - ${index} - ${arr.indexOf(element)}`)
// })
let withoutDup = arrFruits.filter(function(element, index){
  return arrFruits.indexOf(element) === index
})
console.log(withoutDup)
let withDup = arrFruits.filter(function(element, index){
  return arrFruits.indexOf(element) !== index
})
console.log(withDup)
// Write a JS script to search for the following word in the array 4
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
let letter = 4
if(arr5.includes(letter)){
console.log(letter)
}else{
  console.log(`The search word not found`)
}

// Write a JS script to sort the following string
let word = "lufituaeb"
// const wordArr = word.split('')
// const sortedWord = wordArr.sort()
// console.log(sortedWord.join(''))
//one Line
const sorted = word.split('').sort().join('')
console.log(sorted)
// arr.match(/4/g)


//The map method
const array5 = [1,4,9,16]
const map1 = array5.map(x => x * 3)
console.log(map1)


///makes a copy of the original array but does not alter the original array
const nummberss = [1,4,9]
const map3 = nummberss.map((num) => Math.sqrt(num))
console.log(map3) //1,2,3
console.log(nummberss) //1,4,9

let multnumbers =  [65, 44, 12, 4]
const newNumbers = multnumbers.map((number) => number * 10)
console.log(newNumbers)

// This example uses the array map() method and returns the square of the array element. 
let arrY = [2, 5, 6, 3, 8, 9];
let squares = arrY.map(num => num*num)
console.log(squares)
let modifier = arrY.map(element => element*3)
console.log(modifier)



//CHALLANGE
let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];
/*
Use the map method to create a new array 
called userEmails that creates email addresses 
for each of the users in the users array. The 
results should look like this:

["SusanSteward@smallcompany.com", 
 "DanielLongbottom@smallcompany.com", 
 "JacobBlack@smallcompany.com"]

For bonus points, render the email addresses in all 
lowercase letters, like this:

["susansteward@smallcompany.com", 
 "daniellongbottom@smallcompany.com", 
 "jacobblack@smallcompany.com"] 

*/
let userEmails = users.map((element,index,arr) => {

   return `${element.firstName}@${element.lastName}`
})
 
console.log(userEmails)