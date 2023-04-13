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
const mcountries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


///LEVEL 1
// Declare an empty array;
const emptyArray = []
//2. Declare an array with more than 5 number of elements
const withMore5 = [1,2,3,4,5,6,7,8]
console.log(withMore5.length)

//3. Get the first item, the middle item and the last item of the array
const firstItem = withMore5[0]
const middle = [(firstItem + withMore5.length) /2]
const lastItem = withMore5.length -1
console.log(`first Item:${firstItem}, middle Item:${middle}, last Item${lastItem}`)
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
//  The array size should be greater than 5

const mixedDataTypes = [1, 'Hopper', true, NaN, undefined, Symbol, BigInt]
console.log(mixedDataTypes.length)

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7. Print the array using console.log()
console.log(itCompanies)
//8. Print the number of companies in the array
console.log(itCompanies.length)
//9. Print the first company, middle and last company
const firstCamp = itCompanies[0]
const middleCamp = itCompanies[Math.floor(itCompanies.length /2)]
const lastCamp = itCompanies[itCompanies.length -1]
console.log(firstCamp)
console.log(middleCamp)
console.log(lastCamp)
//10 Print out each company
console.log('***Each Company**')
itCompanies.forEach(company => console.log(company))

//11. Change each company name to uppercase one by one and print them out
console.log('***To upperCase ***')
itCompanies.forEach( company => console.log(company.toUpperCase()))

//12. Print the array like as a sentence: 
// Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itString = itCompanies.join(' ,')
console.log(itString)

//13.Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found

//14. Filter out companies which have more than one 'o' without the filter method

//15. Sort the array using sort() method
const sortedCompanies = itCompanies.sort()
console.log(sortedCompanies)
//16. Reverse the array using reverse() method
console.log(sortedCompanies.reverse())
//17. Slice out the first 3 companies from the array
console.log(sortedCompanies.slice(0, 3))
console.log(sortedCompanies.slice(-3))
//18.Slice out the middle IT company or companies from the array
const midIndex = (0 + sortedCompanies.length -1) /2
console.log(midIndex)
// console.log(sortedCompanies.slice(sortedCompanies[midIndex],4))

//19. Remove the first IT company from the array
console.log(itCompanies)
console.log(itCompanies.splice(0,1))
console.log(itCompanies)

//20. Remove the middle IT company or companies from the array

//21. Remove the last IT company from the array
console.log(itCompanies.splice(-1))
//22. Remove all IT companies
console.log(itCompanies.splice())

//24. First remove all the punctuations and change the string to 
///////LEVEL 2////////////////////////////////////////////////////////////////
//2. array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words.join(''))
console.log(words.length)

//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//4. add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart)
//5. add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

//6. remove 'Honey' if you are allergic to honey
console.log(shoppingCart.splice(4,1))
console.log(shoppingCart)
//7. modify Tea to 'Green Tea'
console.log(shoppingCart[3] = 'Green Tea')
console.log(shoppingCart)

//8. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const newCountries = mcountries.forEach(country => {
  if(country == 'Ethiopia'.toLowerCase()) console.log(country.toUpperCase())
  else mcountries.push(country)
})

//9. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.


//10. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [...frontEnd,...backEnd]
console.log(fullStack)

/////////LEVEL 3 EXERCISE///////////////////////////////////////////
//1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//2. Sort the array and find the min and max age
const sortedAges = ages.sort()
const minNum = Math.min.apply(Math, sortedAges)
const maxNum = Math.max.apply(Math, sortedAges)
console.log(minNum)
console.log(maxNum)

//ALTERNATIVELY
console.log('***ES6**')
console.log(Math.min(...sortedAges))
console.log(Math.max(...sortedAges))

//3. Find the median age(one middle item or two middle items divided by two)

//4. Find the average age(all items divided by number of items)
let averageAge = 0
let length = ages.length
const average = ages.forEach(element => Math.floor(averageAge += element / length))
console.log(averageAge)

//5. Find the range of the ages(max minus min)
console.log(maxNum - minNum)

//6. Compare the value of (min - average) and (max - average), use abs() method 1.
const minAv = Math.floor(minNum - averageAge)
const maxAv = Math.floor(maxNum - averageAge)
console.log(`${Math.abs(minAv)} is less than  ${maxAv}`)
//7 Slice the first ten countries from the countries array
console.log(mcountries.slice(0,10))

//8. Find the middle country(ies) in the countries array

//9. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.



