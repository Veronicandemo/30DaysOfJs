'use strict'

// for loop
// for(initialization, condition, increment/decrement){
//   //body of loop
// }

for(let i = 0; i <= 5; i++){
  // console.log(i) //prints 0 to 5 to console
  console.log(`${i} * ${i}  = ${i * i}`)
}
console.log('****************')

for(let i = 5; i > 0; i--){
  console.log(i)
}
console.log('****************')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
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
 
for(let i = 0; i <= 100; i++){
  if(i % i === 0 && i % 1 ===0){
    console.log(i)
  }
}

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// for(let i = 0; i <= 100; i++){
//   let sum = 0
//   sum += i
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`)



