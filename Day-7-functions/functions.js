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
    console.log(`${firstNAme} ${lastName}`)

}
myName('Kelvin', 'Ndemo')

const changeToUpperCase = arr =>{
    const newArr = []
    for(const element of arr){
    newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

//using default Value
const greetings = () =>{
    console.log(`Veronica Ndemo welcome to 30Days of JavaScript`)
}
greetings()
//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName= (firstName, lastName) => {
return `${firstName} ${lastName}`

}
console.log('Mary', 'Aluel')

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = (num1, num2) => {
    return num1 + num2
}
console.log(addNumbers(34,5))

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (lenght, width) =>{
    return lenght * width

}
console.log(areaOfRectangle(4,6))
//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => {
    return (length + width) * 2
}
console.log(perimeterOfRectangle(23,5))

//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism  = (length, width, height) => {
    return length * width * height
}
console.log(volumeOfRectPrism(12,24,18))

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaCircle = (radius) => {
    return Math.PI * radius**2
}
console.log(areaCircle(14))
//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (radius) => {
    return 2*Math.PI*radius
}
console.log(circumOfCircle(14))
//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = (mass, volume) => {return mass/volume}
console.log(density(400,20))

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
// Write a function which calculates a speed of a moving object, speed.
const speedCalc = function(distance, time){
    return `You are driving at ${distance / time} Km/h.`
}
console.log(speedCalc(120,2))

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weightCalc = (mass, gravity) => {
    return mass * gravity
}
console.log(weightCalc(50, 5))
//12. Temperature in oC can be converted to oF using this formula: 
// oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (celcuis) => {
    return `${celcuis} degress celcius is ${(celcuis * 9/5) +32} Fahrenheit `
}
console.log(convertCelsiusToFahrenheit(47))

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
const BodyMassIndex = function(weight, height){
    let bmi =Math.floor(weight / (height * height))
    switch(true){
        //Underweight: BMI is less than 18.5
        case bmi < 18.5: 
        console.log(`${bmi} as bmi: you are underweight`)
        break;
        //Normal weight: BMI is 18.5 to 24.9
        case bmi >= 18.5 || bmi <= 24.9:
            console.log(`${bmi} as bmi: you have normal weight`)
            break;
        //Overweight: BMI is 25 to 29.9
        case bmi >= 25 || bmi <= 29.9:
            console.log(`${mbi} as bmi: You have overwight`)
            break;
        // Obese: BMI is 30 or more
        case bmi >= 30:
            console.log(`${bmi} as bmi: you are obese`)
        break;
        default:
            console.log('Invalid Inputs')
    }
}
BodyMassIndex(160, 1.7)
BodyMassIndex(160, 3)
//14. Write a function called checkSeason, 
// it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
    switch(month){
        case 'December':
        case 'January':
        case 'February':
        console.log(`Its Winters`)
        break;
        case 'March':
        case 'April':
        case 'May':
            console.log('Its Spring')
            break;
        case 'June':
        case 'July':
        case 'August':
        console.log('Its Summer')
            break;
        case 'September':
        case  'October':
        case 'November':
            console.log('Its Autum')
            break;
        default:
            console.log('Invalid Month')
    }
    
}
checkSeason('January')
checkSeason('March')
checkSeason('June')
checkSeason('July')
checkSeason('')

//15. Math.max returns its largest argument.
//  Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.


// const findMax =  function (arg1, arg2, arg3){
    
// }
