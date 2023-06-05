'use strict'
//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/name/kenya'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// const request = fetch(countriesAPI)
// console.log(request)
const getCountryData =  function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`) //pending
  //To hundle fulfilled and pass a callback function that we want ot be executed as soon as executed
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data.country)
  })
}
getCountryData('kenya')
// .then(response => response.json())
// .then( data => {
//   console.log(data.name)
//   console.log(data.languages.name)
// })
// .catch(err => console.log('An error occured'))
// const fetchData = async () => {
//   try {
//     const response = await fetch(countriesAPI)
//     const countries = await response.json()
//     console.log(countries)
//   } catch (err) {
//     console.error(err)
//   }
// }
// // console.log('===== async and await')
// fetchData()



// Question 1: Fetching data from an API using Promises and async/await
// Write a function called fetchData that takes a URL as a parameter. 
// Inside the function, use the fetch function to make a GET request 
// to the specified URL and return a promise that resolves with the response data.
// Question 2: Chaining promises using then
// Create a promise chain that performs the following operations:
// Make an HTTP GET request to fetch a list of users from an API.
// Parse the response JSON and extract the user IDs.
// For each user ID, make another HTTP GET request to fetch the user's details.
// Parse the response JSON and log the user's name and email.
// Question 3: Implementing an async function with await
// Write an async function called getUserDetails that takes a user ID as a parameter.
//  Inside the function, use await to fetch the user details from an API using the provided ID. 
// Return the user details as an object.
// Question 4: Error handling with Promises and catch
// Create a function called divideNumbers that takes two numbers as parameters. 
// Inside the function, divide the first number by the second number and return a promise.
//  If the second number is zero, reject the promise with an error message.
// Question 5: Using Promise.all to handle multiple asynchronous operations
// Write a function called fetchMultipleData that takes an array of URLs as a parameter. 
// Inside the function, use Promise.all to fetch data from all the URLs concurrently.
//  Return a promise that resolves with an array containing the response data from all the requests

