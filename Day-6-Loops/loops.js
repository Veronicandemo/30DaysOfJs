'use strict'

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
//To upperCase
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
//adding all elements in an array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
   sum += numbers[i]
}
console.log(sum)

//Creating a new array based on the existing array
const nums = [1, 2, 3, 4, 5]
const newNumArr = []
let summation = 0
for(let i = 0; i < nums.length; i++){
  newNumArr.push( nums[i] ** 2)

}
console.log(newNumArr)