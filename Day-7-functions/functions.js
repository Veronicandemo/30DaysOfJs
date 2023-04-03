'use strict'

// //Fuction Declaration

// function square(){
//     let num = 2
//     let sq = num * num
//     console.log(sq)
// }
// square() //4

// function addNums(){
//     let numOne = 10
//     let numTwo = 20
//     let result = numOne + numTwo
//     console.log(result)
// }
// addNums()

// function printFullName(){
//     let firstNAme = 'Veronica'
//     let lastName = 'Ndemo'
//     let space = ' '
//     let fullName = firstNAme + space + lastName
//     console.log(fullName)
// }
// printFullName()

//Function returning a Value
console.log('***Returning values ***')

function printFullName(){
    let firstNAme = 'Veronica'
    let lastName = 'Ndemo'
    let space = ' '
    let fullName = firstNAme + space + lastName
    return fullName
}
console.log(printFullName())

function addTwoNums(){
    let numOne = 10
    let numTwo = 20
    let result = numOne + numTwo
    return result
}
console.log(addTwoNums())

//With parameters
console.log('*** function with parameters')

//Area of a circle
function areaOfCircle(radius){
    const area = Math.floor((Math.PI * radius**2 * 0.5))
    return area

}
console.log(areaOfCircle(14))
console.log(areaOfCircle(7))

//square of a num
function squareOfNum(number){
    const square = number**2
    return square
}
console.log(squareOfNum(4))
console.log(squareOfNum(40))

//function with two parameters

function sumOfTwoNumbers(num1, num2){
    return num1 + num2
}
console.log(sumOfTwoNumbers(12, 13))
console.log(sumOfTwoNumbers(112, 6733))

function printsFullName(firstName, lastName){
    return `${firstName}  ${lastName}`
}
console.log(printsFullName('Marion', 'Njeri'))
console.log(printFullName('Veronica', 'Ndemo'))

//MAny parameters
function addsArrElements(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
const nums = [2,3]
console.log(addsArrElements(nums))
// console.log(addsArrElements())

//function declaration arrow function
const sumAllNums = (...args) => {
    let sum = 0
    for(const element of args){
        sum += element
    }
    return sum

}
console.log(sumAllNums(1,2,3,4)) //10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93

const anonymousFunc = function(){
    console.log('I am an anonymous function')
}
anonymousFunc()

//arrow function
const square = n => n * n 
console.log(square(2))


// Declare a function fullName and it print out your full name.





const myName = function (firstNAme, lastName){

}
