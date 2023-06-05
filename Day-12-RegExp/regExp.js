'use strict'
let pattern = 'love';
let regExp = new RegExp(pattern)


// Declaring regular expression with global flag and case insensitive flag without constructor

let rexEx = /love/gi

// ****** Regular expression methods *** //
// .test() -- tests for a match in a string and returns a boolean
const str =  'I love  LOVE Mariagoretti'
const ptn =  /love/
console.log(ptn.test(str)) //returns true

// match() - array containing all of the match or null if not found
//  If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
let result = str.match(ptn)
console.log(result)
let pattern1 = /love/gi
let result2 = str.match(pattern1)
console.log(result2)

// Search()
// Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const pattern3 = /love/g
const result3 = str.search(pattern3)
console.log(result3)
// search()
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

// Using a g flag
const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt2.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

// using global and i:casesensitive flags
const txt3 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt3.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

const pattern4 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt4.match(pattern4)

console.log(matches)  
const pattern5 = /\d+/g  // d is a special character which means digits
const txt5 = 'This regular expression example was made in January 12,  2020.'
const matches1 = txt5.match(pattern5)
console.log(matches1)  // ["12", "2020"], this is not what we want


const txt6 = 'This regular expression example was made in December 6,  2019.'
const pattern6 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers you can add 0-9 to include numbers
const matches6 = txt6.match(pattern6)
console.log(matches6)  //['This', 'made']

// Starts with
const txt7 = 'This regular expression example was made in December 6,  2019.'
const pattern7 = /^This/g // ^ means starts with
const matches7 = txt7.match(pattern7)
console.log(matches7)  // ['This']

