'use strict'
const now = new Date()
console.log(now)
const year = now.getFullYear()
const month = now.getMonth() +1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()
const time = now.getTime()
console.log(`${date}/${month}/${year}/ ${hours}:${minutes}:${seconds}`)


//EXERCISE-1
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Veronica"
const lastName = "Ndemo"
const country = "Kenya"
const city = "Nairobi"
const age = 21
const isMarried = true
const yearNow = 2023

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(yearNow))

// Check if type of '10' is equal to 10

const num1 = '10'
const num2 = 10
console.log(typeof(num1) == typeof(num2))
console.log(typeof(num1) === typeof(num2))

// Check if parseInt('9.8') is equal to 10
const num3 = parseInt('9.8')
console.log(typeof(num3) === typeof(num2))

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

//Truthy values
const statement1 = 'My name is Veronica'
const statement2 = 54
const statement3 = true
//Falsy values
const statement4 = ''
const statement5 = 0
const statement6 = null


//OPERATORS


console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
// Find the length of python and jargon and make a falsy comparison statement.

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

// Use the Date object to do the following activities

const today = new Date()
// What is the year today?
console.log(today.getFullYear())

//What is the month today as a number?
console.log(today.getMonth()+1)
// What is the date today?
console.log(today.getDate())
//What is the hours now?
console.log(today.getHours())
//What is the minutes now?
console.log(today.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(today.getTime())

//EXERCISE LEVEL 2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base = prompt(`Enter the base:`)
// const height = prompt(`Enter the height:`)
// const area = `${base * height * 0.5}`
// alert(`The area of the triangle is ${area}`)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
 const sidea = Number(prompt(`Enter side a: `))
 const sideb = Number(prompt(`Enters side b:`))
 const sidec = Number(prompt(`Enter side c: `))
 const perimeter = `${sidea + sideb + sidec}`
 alert(`The perimeter of the triangle is ${perimeter}`)

 