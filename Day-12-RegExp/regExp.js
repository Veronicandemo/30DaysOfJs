'use strict'
let pattern = 'love';
let regExp = new RegExp(pattern)

//test() -- tests for a match in a strinng and returns a boolean
const str =  'I love Mariagoretti'
const ptn =  /love/
console.log(ptn.test(str))
