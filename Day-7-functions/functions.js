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
    let fullName = `${firstNAme}  ${lastName}`
    return fullName
}
console.log(printFullName())

function addTwoNums(){
    let numOne = 10
    let numTwo = 20
    // let result = numOne + numTwo
    return numOne + numTwo
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


//1,2. Declare a function fullName and it print out your full name.
const myName = function (firstNAme, lastName){
    return `${firstNAme} ${lastName}`
}
console.log(myName('Kelvin', 'Ndemo'))

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

const density = ((mass, volume) =>  mass/volume)
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
console.log('***Find max***')
const findMax = (a,x,y) => {
    if(a > x && a > y) return a
    else if(x > a && x > y) return x
    else if(y > a && y > x) return y
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))


// Exercises: Level 2
//1. Linear equation is calculated as follows: ax + by + c = 0. 
// Write a function which calculates value of a linear equation, solveLinEquation.
const solveLinEquation = function (a,b,x,y){
    //ax +by = c
    //c is the value of the eqauation
    return (a*x) + (b*y)
}
console.log(solveLinEquation(2,3,4,6))


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
//2. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log('***Quadratic equation***')
// const solveQuadEquation = function(a,b,x){
//     return ((-a*a*x) - b * x)
// }
// console.log(solveQuadEquation()) // {0}
// console.log(solveQuadEquation(1, 4, 4)) // {-2}
// console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
// console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
// console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
// console.log(solveQuadEquation(1, -1, 0)) //{1, 0}
// console.log('***Quadratic equation***')


//3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
console.log('each element')
const printArray = function(array){
  array.forEach( element => {
    return console.log(element)
})

}
let arr = [2,3,4,5,67]
printArray(arr)

//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()
    const hours = date.getHours()
    const mins = date.getMinutes()
    console.log(`0${month}/0${day}/${year} ${hours}:${mins}`)
}
showDateTime()

//5. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (a,b) =>{
    let c; //declare with no value
    c = a;  //c = 3
    a = b  // a = 4
    b = c  //b = 3
    console.log(`${a}, ${b}`)
}
swapValues(3, 4)
swapValues(4, 5) 


//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    if(arr.length <= 1)  return arr

    let middle = Math.floor(arr.length /2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return sortsArrays(reverseArray(left), reverseArray(right))
}
function sortsArrays(left, right){
    const newArr = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            newArr.push(left.shift())
        }else{
            newArr.push(right.shift())
        }
    }
    return [...newArr,...left,...right]
}
const array = [1, 2, 3, 4, 5]
console.log(reverseArray(['A', 'B', 'C']))
console.log(reverseArray(array))
//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (arr) => {
    let capitalizearray = []
    arr.forEach(element => {
        return console.log((element.toUpperCase()))
    })
}
const mycountries = [
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
  console.log(mycountries)
  capitalizeArray(mycountries)

// 8.  Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item) => {
    const newArr =  []
    newArr.unshift(item)
    return newArr
}
console.log(addItem('sugar'))
//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (...numbers) => {
    let sum = 0
    for(const number of numbers){
        sum += number
    }
    console.log(sum)
}
sumOfNumbers(1,2,3,4,5,6,7,8,9,10)
//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (...numbers) => {
    let sum = 0
    for(const num of numbers){
        if (num % 2 !== 0){
            sum += num
        }
    }
    console.log(sum)
}
sumOfOdds(1,2,3,4,5,6,7,8,9,10)

//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (...numbers) => {
    let sum = 0
    for(const num of numbers){
        if (num % 2 === 0){
            sum += num
        }
    }
    console.log(sum)
}
sumOfEven(1,2,3,4,5,6,7,8,9,10)

//13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (int) => {
    let count = 0
    for(let i = 0; i <= int.length; i++){
        if(i % 2 === 0){

            return console.log(`The number of even is ${count += 1}`)
        } 
            
        if(i % 2 !== 0) return console.log(`The number of odds is ${count += 1}`)
    }
}
evensAndOdds(100)


const sum = (...args) => {
    let sum = 0
    args.forEach(element => sum += element)
    console.log(sum)
}
sum(1, 2, 3)
sum(1, 2, 3, 4) 

// Writ a function which generates a randomUserIp.
function generatesIp(){
    const ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
console.log(ip)
}
generatesIp()

//16. Write a function which generates a randomMacAddress

//17. Declare a function name randomHexaNumberGenerator. 
// When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

//18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.


///////////////////////LEVEL 3///////////////////////////////////


