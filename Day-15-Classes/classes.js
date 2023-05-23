'use strict'
class PersonCl{
    constructor(firstName = 'Mercy', lastName = 'Kimani',age =24,country = 'Kenya', city = 'Nairobi'){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.country = country
        //initial value
        this.score = 0
        this.skills = []
    }
    //class methods
    getFullName(){
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
    get getScore () {
         return this.score
    }
    get getSkill(){
        return this.skills

    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
      }
      static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }

}
const person1 = new PersonCl('Ndemo', 'Veronica', 22, 'Nairobi')
console.log(person1.getFullName())
const person2 = new PersonCl()
console.log(person2.getFullName())
console.log(person1.getScore)
console.log(person2.getScore)
console.log(person1.getSkill)

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)

console.log(PersonCl.favoriteSkill())
console.log(PersonCl.showDateTime())


class StudentCl extends PersonCl{
    constructor(firstName,lastName, age, country, city,gender){
        super(firstName,lastName,age,country, city)
        this.gender = gender
    }
    saySomething(){
        console.log(`I am a child of the person class`)
    }
}

const s11 = new StudentCl('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s11)
console.log(s11.saySomething())
console.log(s11.getFullName())
// console.log(s11.getPersonInfo())
//LEVEL ONE
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.
class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs

    }
    description(){
        console.log(`My name is ${this.name} and I am  ${this.color} with ${this.age} years old `)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
    bark(){
        console.log(`Woof! Woof!`);
    }

}
class Dog extends Animal{
    constructor(name,age,color,legs){
        super(name,age,color,legs)
    }
    description(){
        console.log(`${this.name} has ${this.legs} legs`)
    }


}
const dog = new Dog('Doggy', 34, "red", 4)
console.log(dog)
dog.description()
dog.sleep()
// Cat child class from the Animal Class
class Cat extends Animal{
    constructor(name,age,color,legs){
        super(name,age,color,legs)
    }
    sleep(){
        console.log(`${this.name} is awake`)
    }

}

const cat = new Cat('Pussy', 12, 'purple', 4)
console.log(cat)
cat.description()


// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, 
// percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions 
// which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics{

}

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, 
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and 
// its description and expenses is also a set of expenses and its description.\
class PersonAccount{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = []
        this.expenses = []
    }
    totalIncome(){
        let sum = 0
        for(let income of this.incomes){
            sum += income.amount
        }
        return sum
    }
    totalExpenses(){
        let sum  = 0
        for(let expense of this.expenses){
            sum += expense.amount
        }
        return sum
    }
    accountInfo(){
        console.log(`Hello ${this.firstName} ${this.lastName} your income is ${this.totalIncome()} with a total of ${this.totalExpenses()} expenses
        and account balance is ${this.accountBalance()}`)
    }
    addIncome(amount, description){
        this.incomes.push({description, amount})

    }
    addExpenses(amount, description){
        this.expenses.push({description, amount})

    }
    accountBalance(){
        return this.totalIncome() - this.totalExpenses();
    }
}
const person = new PersonAccount('Veronica','Ndemo')
person.addIncome(2000, "Salary");
person.addIncome(500, "Bonus");
person.addExpenses(1000, "Rent");
person.addExpenses(300, "Groceries");
person.addExpenses(200, "Utilities");
person.accountInfo();
// console.log(acc1);