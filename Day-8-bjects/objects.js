'use strict'
//We use two curly braces to create an object in JS
const person = {
    firstName: 'Veronica',
    lastName: 'Ndemo',
    age: 21,
    country: 'Kenya',
    city: 'Nairobi',
    skills: [
     'HTML',
     'CSS',
     'JavaScript',
     'React',
     'Node', 
     'MongoDB',
     'Python',
     'D3.js'
    ],
    isMarried: true,
    getFullName: function() {
         return `${this.firstName} ${this.lastName}`
        },
    'phone Number': '+254112490586',
    getPersonInfo: function() { 
        return `I am ${this.getFullName()} and i live in ${this.city} ${this.country}. I am ${this.age}.`
    },
}
console.log(person)
console.log(person.firstName)
console.log(person.getFullName)
console.log(person["phone Number"])

//Setting New Keys for an object
person.nationality = 'Kenyan'
person.title = 'teacher'
person.skills.push('Sass')
person.skills.push('Meteor')

// person.getPersonInfo = () => {
//     let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length -1).join()
//     // let lastSkill = this.skills.splice(this.skills.length -1)
//     let skills = `${skillsWithoutLastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${title}.\nHe lives is ${this.country}. \nAnd he teaches ${this.skills}}`

// }
// console.log(person)
// console.log(person.getPersonInfo())
//Object.assign
const copyPerson = Object.assign({}, person)
console.log(copyPerson)
console.log(copyPerson.getPersonInfo())
//Getting Keys
const keys =Object.keys(copyPerson)
// const fullName  = Object.keys(copyPerson.['skills'])

// console.log(fullName)
console.log(keys)
//Getting values
const values = Object.values(copyPerson)
console.log(values)
//Get keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)
//
console.log(copyPerson.hasOwnProperty('name'))
console.log(person.hasOwnProperty('firstName'))

//EXERCISE LEVEL ONE/////////////
// Create an empty object called dog
const dog = {}
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof
dog.name = 'Bear'
dog.age = 53
dog.legs = 4
dog.colour = 'White'
dog.bark = function() { return 'woof woof'}

console.log(dog)
const dogentries = Object.entries(dog)
console.log(dogentries)
// Get name, legs, color, age and bark value from the dog object
const dogValues = Object.values(dog)
console.log(dogValues)



// Set new properties the dog object: breed, getDogInfo
Object.defineProperties(dog, {
    breed: 'Maaan',
    getDogInfo: function(){
        return `I am ${thin.name}, ${this.colour} in colour, of ${this.age} and ${this.breed} breed.`
    }
})
console.log(dog)