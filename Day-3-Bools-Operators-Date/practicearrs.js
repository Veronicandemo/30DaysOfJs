'use strict'
//ADA LAB
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'maize'
console.log(shopping.splice(0,2))
console.log(shopping);


//last element of the following arrays
const arr1 = [3,7,34,90,12]
const arr2 = [true, "green", "where",12,56]
console.log(arr1[arr1.length -1])
console.log(arr2[arr2.length -1])

//Write a JS program that will join the following array elements into a string
const myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets)
//each pet
for(let pet of myPets){
    console.log(pet)
}
//to string
const petString = myPets.join(',')
console.log(petString)
//OR
console.log(myPets.toString())
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities = data.split(',')
console.log(cities)
console.log(cities.length)
console.log(cities[0])
console.log(cities[cities.length -1])
console.log(cities.join())

//that will sort the following array items
const arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort())

//removes duplicates
let arr= ["apple", "mango", "apple","orange", "mango", "mango"];

let uniquearr = []
arr.forEach((character) => {
if (!uniquearr.includes(character)){
    uniquearr.push(character)
}
})
console.log(uniquearr)

let duplicateArr = []
arr.forEach((character)=>{
    if(duplicateArr.includes(character)){
        duplicateArr.push(character)
    }
})
console.log(duplicateArr)


let arr5 = ["the", "way", "x", 4];
//Search for the word "way" in an array
if(arr5.includes('way')){
    console.log('way')
}else{
    console.log('the search word is not found')
}

//Write a JS script to sort the following string
let word = "sevink"
let arrWord = word.split('')
console.log(arrWord.sort())
console.log(arrWord.join(''))
// let sorted = word.sort()
// console.log(sorted)


//ANITA B

