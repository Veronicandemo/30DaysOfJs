'use strict'
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)


const randomNum = Math.floor(Math.random()*10)
console.log(randomNum)

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let theCountry = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
// let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${theCountry}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${theCountry}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let myCountry = 'Finland'
console.log(myCountry.substr(3, 4))   // land

let String = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let Country = 'Finland'

console.log(Country.substring(0, 3))   // Fin
console.log(Country.substring(3, 7))   // land
console.log(Country.substring(3))      // land

let str = '30 Days Of JavaScript'

console.log(str.split()) //Changes to an array
console.log(str.split(' ')) //splits to an array at space

let myName = `Veronica`
console.log(myName.split())
console.log(myName.split(''))

let countries =  `FinLand, Sweden, Norway, Denmark, and IceLand`

console.log(countries.split(','))

let jString = `
    30 Days of learning JavaScript
`
console.log(jString.trim())
let loveString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(loveString.search('love'))          // 2
console.log(loveString.search(/javascript/gi))  // 7
console.log(loveString.search(/JavaScript/gi))  //7

console.log(loveString.match('love'))

