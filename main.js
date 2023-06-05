'use strict'
// import { webTechs } from "./Day-5-Arrays/web_techs";
// import { countries } from "./Day-5-Arrays/countries";

// Write a program that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz".
//  For numbers that are multiples of both three and five, print "FizzBuzz".
for(let i = 1; i <= 100;i++){
    if(i % 15 === 0){
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
        console.log('Fizz')
    }
    else if(i % 5 === 0){
        console.log('Buzz')
    }
    else{
        console.log(i)
    }
}

// You are tasked with developing an inventory management system for an online bookstore. 
// The system should allow users to perform various operations related to book inventory management.
// Requirements:
// The system should have a database to store book information. Each book should have attributes such as title, author, publication date, price, quantity in stock, etc.
// Users should be able to add new books to the inventory by providing the necessary details.
// Users should be able to search for books based on title, author, or publication date.
// Users should be able to update the information of existing books, such as changing the price or quantity in stock.
// Users should be able to remove books from the inventory.
// Users should be able to view the details of all books in the inventory.
// The system should have proper error handling and validation to ensure data integrity.
// Implement appropriate data structures and algorithms for efficient book searching and management operations.
// Provide a user-friendly command-line or GUI interface for users to interact with the system.
// Note: You can choose to implement the system in Python, JavaScript, or Kotlin, and use an appropriate database technology
//  (e.g., SQLite, MySQL, MongoDB) to store the book information.

class Book{
    constructor(title, author, publicationDate, price, quantity){
        this.title =title
        this.author = author
        this.publicationDate = publicationDate
        this.price = price
        this.quantity = quantity
    }
}

class inventorysystem{
    constructor(){
        this.inventory = []
    }
    // Users should be able to add new books to the inventory by providing the necessary details.
addNewBook(book){
    this.inventory.push(book)
    return this.inventory
}
// Users should be able to search for books based on title, author, or publication date.
searchBook(searchItem){
    const result = []
    for(let book of this.inventory){
        if(book.title.includes(searchItem) || book.author.includes(searchItem) || book.publicationDate.includes(searchItem)){
            result.push(book)
        }
    }
    return result
}
// Users should be able to update the information of existing books, such as changing the price or quantity in stock.
updateInformation(book, newPrice, newQuantity){
    book.price = newPrice
    book.quantity = newQuantity
}
// Users should be able to remove books from the inventory.
removeBook(book){
    const index = this.inventory.indexOf(book)
    if(index !== -1){
        this.inventory.splice(index, 1)
    }
}
// Users should be able to view the details of all books in the inventory.
viewDetails(book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Publication Year: ${book.publicationDate} Quantity: ${book.quantity}`)
}
}
const book1 = new Book('Born A Crime', 'Trevor Noah', 2023, 2500, 15)
const book2 = new Book('Born Alone', 'Ndemo Veronica', 2001, 500, 4)

const inventorySy = new inventorysystem()
inventorySy.addNewBook(book1)
console.log(inventorySy.addNewBook(book1))
inventorySy.updateInformation(book1, 700, 2)
inventorySy.viewDetails(book1)
// You are tasked with developing an online food ordering system for a restaurant. 
// The system should allow users to browse the menu, place orders, and manage their orders.
// Requirements:
// The system should have a database to store menu items and order information.
//  Each menu item should have attributes such as name, description, price, and availability.
// Users should be able to view the menu with all available items.
// Users should be able to add items to their cart, specify quantities, and remove items from the cart.
// Users should be able to place an order, which includes providing delivery address, contact information, and payment details.
// Users should be able to view their order history and check the status of their current orders.
// The system should have proper error handling and validation to ensure data integrity.
// Implement appropriate data structures and algorithms for efficient order management and processing.
// Provide a user-friendly command-line or GUI interface for users to interact with the system.
















const AddMultiply = (arrayNums) => {
    const multiply = arrayNums.slice(-4).map(num => num*12)
    const add = arrayNums.slice(0,2).map(num => num+2)
    const finalArr = add.concat(multiply)
    return finalArr
}
const arr = [1,2,1,1,1,1,7,8,9,10]
console.log(AddMultiply(arr))

const string = 'Beautiful'
const arrString = string.split('')
const atOdd = arrString.map((char, index) => {
    if(index % 2 !== 0){
        return console.log(char)
    }
});
const stringAa = 'a house did burn'

const titleCase = stringAa.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
console.log(titleCase)

// const bmi = (mass, heigth) => {
//     const bmi = mass / heigth ** 2
//     return bmi
// }
// const johnbmi  = bmi()

// Weather forecat App
// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort()
const min = Math.min(...ages)
const max = Math.max(...ages)
console.log(min, max)
// Find the median age(one middle item or two middle items divided by two)

function mergeSort1(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge1(mergeSort1(leftArr), mergeSort1(rightArr))
  }
  function merge1(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr1 = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr1
  }
  const num =  [45,12,6,89,2,5]
let target1 = 6
let sortedArr1 = mergeSort1(num)
console.log(sortedArr1)


function Binary(num, target){
  let left = 0
  let right = num.length -1
  while(left <= right){

    let middle = Math.floor((left + right) / 2)
    if(num[middle] === target){
        return middle
    }else if(num[middle] < target){
        left = middle + 1

    }else{
        right = middle - 1
    }
}
return null

  }

  console.log(Binary(sortedArr1, target1))
