'use strict'
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//2. Explain the difference between forEach, map, filter, and reduce.
//3.Define a callback function before you use it in forEach, map, filter or reduce.

/*
forEach is used to loop through an array and changes each value.It is a better version of for loops
map creats a new array after iteraiong through each element on an array
filter return only the value that have passed the filter condition
reduce boils down the whole array into one value.Accepts three parameters(the accumulator,current value,optionaly
     the initial value and the )
     //Callback Functions
     Passed in as a parameter to high order function.High order functions in this case return the callback functions
*/

//4.Use forEach to console.log each country in the countries array.
countries.forEach( country => console.log({country}))
//5.Use forEach to console.log each name in the names array.
names.forEach( name => console.log({name}))
//6.Use forEach to console.log each number in the numbers array.
numbers.forEach( number => console.log({number}))

//7.Use map to create a new array by changing each country to uppercase in the countries array.
const toupperCase = countries.map( country => country.toUpperCase())
console.log(toupperCase);
//8 Use map to create a new array by changing each number to square in the numbers array
const  toSquare = numbers.map( number => number * number)
console.log(toSquare)
//9 Use map to change to each name to uppercase in the names array
const nameToUpper = names.map( name => name.toUpperCase())
console.log(nameToUpper)
//10 Use map to map the products array to its corresponding prices.

// Use filter to filter out countries containing land.
const containigLand = countries.filter( country => {
  if(country.includes('Land')){
    return true
  }
})
console.log(containigLand)

// Use filter to filter out countries having six character.
console.log(countries)
const sixChars = countries.filter( country => {
 return country.length === 6
})
console.log(sixChars)
// Use filter to filter out countries containing six letters and more in the country array.
const moreThanSix = countries.filter( country => country.length > 6)
console.log(moreThanSix)

const array1 = [2,4,5,6,7,8,9]

//3. Write a function that takes in an array of numbers and 
// consoles the first four items multiplied by 12 and the last two added by 2
//  Console the array with the new values
// console.log('***multiply and add ***')
const multiplyAndAdd = arrayNums => {
  const newArr = arrayNums.map( (number, index , array) => {
    if ( index < 4){
      return number *12
    }
    else if( index > array.length -3){
      return number +2
    }
    else{
      return number
    }
  })
  return newArr
}
console.log(multiplyAndAdd(array1))



// let sstr = "Beautiful"
// sstr.split("").forEach( (char, index) => {
//   if(index % 2 !== 0){
//     console.log(char)
//   }
// })

let sttttr = "Beautiful"
let x =""
sttttr.split("").forEach((char,index) =>{
  if(index %2 !==0){

    x += char;
  }
})
console.log(x)


// Use filter to filter out country start with 'E';
const containgE = countries.filter( country => country.startsWith('E'))
console.log(containgE)
// Use filter to filter out only prices with values.
// Declare a function called getStringLists which takes an array as a parameter and 
// then returns an array only with string items.


const getStringLists = (array) => {
  return array.filter( item => typeof item == 'string')
}
const arr = [1,2,3,4,'Hi','Veronica', 'Ndemo ', 'AkiraChix']
console.log(getStringLists(arr))

// Use reduce to sum all the numbers in the numbers array.
const sumNumbers = numbers.reduce( (acc, curValu) => acc + curValu)
console.log(sumNumbers);

// Use reduce to concatenate all the countries and to produce this sentence:
//  Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// Explain the difference between some and every

//some is used to get som elements in an array are similar in one aspect. 
// Check if all the elements are similar in one aspect
// Use some to check if some names' length greater than seven in names array

console.log(names)
const greater = names.some( item =>  item.length > 7)

console.log(greater)

// Use every to check if all the countries contain the word land

const checkland = countries.every( country => country.includes('land'))
console.log(checkland)
// Explain the difference between find and findIndex.
// find returns the first  element that meets the specified condition while findIndex returns the first  index
// Use find to find the first country containing only six letters in the countries array


const firstContaing6 = countries.find( country => country.length === 6)
console.log(firstContaing6)
// Use findIndex to find the position of the first country containing only six letters in the countries array
const positionOfContaining6 = countries.findIndex( country => country.length === 6)
console.log(positionOfContaining6);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const posOfSweden = countries.findIndex( country => country === 'Norway')
console.log(posOfSweden);
const posOfRussia = countries.findIndex( country => country === 'Russia')
console.log(posOfRussia);

//////LEVEL TWO EXERCISE///////////////////////////
// Find the total price of products by chaining two or more
//  array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// Find the sum of price of products using only reduce reduce(callback))

