/*
******* LEVEL ONE ******
*/
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = `30 Days of JavaScript`

//Print the string on the browser console using console.log()
console.log(challenge)

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substring(0,2))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substring(3))

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')) //true

console.log(challenge.split())
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let serviceProviders = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(serviceProviders.split())
console.log(serviceProviders.split(","))
console.log(typeof(serviceProviders))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let myLanguage = ' 30 Days Of JavaScript'
console.log(myLanguage.replace('30 Days Of JavaScript','30 Days Of Python'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(myLanguage.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(myLanguage.charCodeAt('J'))


//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(myLanguage.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSent = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSent.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSent.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseSent.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(myLanguage)
console.log(myLanguage.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(myLanguage.startsWith(' '))
console.log(myLanguage.endsWith('t'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(myLanguage.match(/a/gi))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let str1 = '30 Days of'
let str2 = 'Javascript'
console.log(str1.concat(str2))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(myLanguage.repeat(2))

/*
***** LEVEL TWO *****

*/
//Using console.log() print out the following statement

let quote1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote1)

let motherTersaQuote = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(motherTersaQuote)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num = 10
let numstr = '10'

console.log(num === numstr)
numstr = parseInt(numstr)
console.log(num === numstr)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let numFloat = '9.8'
console.log(num === numFloat)
console.log(Math.round(numFloat))
parseInt(numFloat)
console.log(num === Number(numFloat))

//Check if 'on' is found in both python and jargon
let strPython = 'python'
let strjargon = 'jargon'

console.log(strPython.includes('on'))
console.log(strjargon.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.

let jargon = 'I hope this course is not full of jargon'
console.log(jargon.match('jargon'))

//Generate a random number between 0 and 100 inclusively.

console.log(Math.random()*100)

//Generate a random number between 50 and 100 inclusively.
console.log(Math.random(50)*100)

//Generate a random number between 0 and 255 inclusively.

console.log(Math.random()*255)

//Access the 'JavaScript' string characters using a random number.

let stringJ = 'JavaScript'
console.log(Math.random(stringJ))

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(becauseSent.indexOf('because'))
console.log(becauseSent.lastIndexOf('because'))
console.log(becauseSent.substr(31, 24))

//Use console.log() and escape characters to print the following pattern.
console.log(' 1\t1\t1\t1\t1 \n 2\t1\t2\t4\t8\n 3\t1\t3\t9\t27 \n 4\t1\t4\t16\t64 \n 5\t1\t5 \t25\t125')

/*
***** LEVEL THREE *****
*/
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let countLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(countLove.match(/love/g).length)
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(becauseSent.match(/because/g).length)

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'



















