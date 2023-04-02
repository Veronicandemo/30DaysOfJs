'use strict'

// for loop
// for(initialization, condition, increment/decrement){
//   //body of loop
// }

const countries = [
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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for(let i = 0; i <= 5; i++){
  // console.log(i) //prints 0 to 5 to console
  console.log(`${i} * ${i}  = ${i * i}`)
}
console.log('****************')

for(let i = 5; i > 0; i--){
  console.log(i)
}
console.log('****************')

const country = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let country = 0; country < countries.length; country++){
  newArr.push(countries[country].toUpperCase())
}
console.log(newArr)
console.log('****************')


//adding all elements in an array
const numbers = [1,2,3,4,5,6]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}
console.log(sum)
console.log('****************')


//while loop
let i = 0;
while(i <= 5){
  console.log(i)
  i++
}
console.log('****************')


//do while loop
let l = 0
do{
  console.log(l)
  l++
}while(l <=  5)

console.log('****************')

//for of loop

// for(const element of arr){
//   //code
// }
const numArr = [1,2,3,4,5]
for(const element of numArr){
  console.log(element * element )
}
console.log('****************')

//break is used to interupt a loop

for(let i = 0; i <= 6; i++){
  if( i === 3){
    break
  }
  console.log(i)
}
console.log('****************')

for(let i = 0; i <= 6; i++){
  if( i === 3){
    continue
  }
  console.log(i)
}
//***********EXERCISE LEVEL 1 *********/

// Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
console.log('********for loop********')
for(let i = 0; i <= 10; i++){
  console.log(i)
}
console.log('******* while loop*********')
//while loop
let k = 0
while(k <= 10){
  console.log(k)
  k++
}
console.log('******* for loop*********')

//Iterate 10 to 0 using for loop, do the same using while and do while loop

//for loop

for(let i = 10; i >= 0; i--){
  console.log(i)
}
console.log('********while loop********')

//while
let n = 10
while(n >= 0){
  console.log(n)
  n--
}
//Iterate 0 to n using for loop

// for(let n = 0; n >= 0; n++){
//   console.log(n)
// }
//4. Write a loop that makes the following pattern using console.log():
console.log('******* for loop*********')

  // for(let i = 1; i <= 6; i++ ){
  //   i = '#';
  //   console.log(i[])
  // }

  // Use loop to print the following pattern:
console.log('********while loop********')

  let z= 0
  do{
    console.log(`${z} * ${z} = ${z * z}`)
    z++
  }while(z <= 10)

  //6. Using loop print the following pattern

  //7.Use do while loop to iterate from 0 to 100 and print only even numbers
  console.log('********while loop  while loop even numbers********')

let num = 0
do{

  if(num % 2 === 0){
    console.log(num)
  }
  num ++
}while(num <= 100)

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
console.log('******* for loop of odd numbers*********')
for(let i = 0; i <= 100; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
}
console.log('******* for loop of  prime numbers*********')

//9. Use for loop to iterate from 0 to 100 and print only prime numbers
//Prime numbers are those numbers that have no divisor other than 1 and the number itself
 let w = 1
for(let i = 1; i <= 100; i++){
  if(i % i === 0  &&  i / w === 0){
    console.log(i)
  }
}

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let summation = 0
const maxnum = 100
for(let i = 0; i <= maxnum; i++){
  sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

// 13. Develop a small script which generate array of 5 random numbers
// const nums = Math.floor(Math.random()*5) +1
// const numsArr = []
// for(num  in nums){
//   console.log(numsArr.push(num.shift()))
// }

console.log(" ****Sum of odd and even ****")
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let x;
let sumEven = 0;
let sumOdd = 0;
for(i = 0; i <= 100; i++){
  i % 2 === 0 ? (sumEven += i): sumOdd += i
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}. `)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

const numsArr = []
numsArr.push(sumEven,sumOdd)
console.log(numsArr)

//13. Develop a small script which generate array of 5 random numbers
let randomArr = [];
for (let  i=0, t = 5; i < t; i++) {
    randomArr.push(Math.round(Math.random() * t))
}
console.log(randomArr);
// const randomNums = Math.trunc(Math.random () *5 ) +1
// console.log(randomArr.concat(randomNums))
//14. Develop a small script which generate a six characters random id:
// const randoms = /[A - Z, 0-9]/i
// let result = []
// for(let i =0; i <= randoms.length; i++){
//   result.push(Math.random() *randoms)
//   console.log(result)
// }
const result = Math.random().toString(36).substring(2,8);
console.log(result);

//Exercise Level 2
// Develop a small script which generate any number of characters random id:

const id = Math.random().toString(36)
console.log(id)

//Using the above countries array, create the following new array.

//Using the above countries array, create an array for countries length'.

// In above countries array, check if there is a country or countries containing the word 'land'.
//  If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// let landCountries = []
// const string = 'land'
// for(let landCountry = 0; landCountries < countries.length; landCountries++){

//   for(landCountry in countries){
//     if(landCountry.matchAll(/string/g)){
//       console.log(landCountries.push())

//     }
//   }
// }