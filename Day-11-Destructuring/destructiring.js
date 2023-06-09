const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
//EXERCISE 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
console.log(pi,gravity,humanBodyTemp,waterBoilingTemp)

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin,est,sw,den,nor] =  countries
console.log(fin,est,den,nor)
// Destructure the rectangle object by its properties or keys.
const {width, height, area,perimeter} = rectangle
console.log(width,height,area,perimeter);

//Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring

for(const{name, scores, skills, age} of users){
    console.log(name,scores,skills,age)
}
// Find the persons who have less than two skills
const person = users.filter(user => user.skills.length < 2)
console.log(person)


// Exercises: Level 3

// Destructure the countries object print name, capital, population and languages of all countries
// A junior developer structure student name, skills and score in array of arrays which may not easy to read.
//  Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, jsScore, reactScore] =  student
// console.log(name)
console.log({name}, {skills}, {jsScore}, {reactScore})

// Write a function called convertArrayToObject which can convert the array to a structure object.



const convertArrayToObject = (arr) => {
return  {arr}
}
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))