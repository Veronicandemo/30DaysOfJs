'use strict'
// Calculate the total annual income of the person from the following text.
//  ‘He earns 4000 euro from salary per month, 
// 10000 euro annual bonus, 5500 euro online courses per month.’

let str = 'He earns 4000 euro from salary per month,  10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g 
const result = str.match(pattern)
const converNum = result.map( num => Number(num))
console.log(converNum)
const sum = converNum.reduce( (acc, curVal) => acc + curVal)
console.log(sum);

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 
// in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
// Extract these numbers and find the distance between the two furthest particles.


