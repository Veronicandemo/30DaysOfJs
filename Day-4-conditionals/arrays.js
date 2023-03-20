'use strict';

//Statements used to make decisions based on differnt conditions
// let a = 10;
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

//SWITCH - An alternativwe for if else if else else

// let weather = 'Cloudy';
// switch (weather) {
//   case 'rainy':
//     console.log('You need a raincoat');
//     break;
//   case 'Cloudy':
//     console.log('Might be cold, You need a rain coat');
//     break;
//   case 'Sunny':
//     console.log('You can get out freely');
//     break;
//   default:
//     console.log('No need for rain coat');
// }
// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }
//Exercise LEVEL 1
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// const age = Number(prompt('Enter your age:'));
// if (age >= 18) {
//   console.log('You are old enough to drive');
// } else {
//   console.log(`Wait for other ${18 - age} year to turn 18`);
// }
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// const yourAge = 24;
// const myAge = Number(prompt('Enter your age: '));
// if (myAge < yourAge) {
//   console.log(`You are ${yourAge - myAge} years younger than me`);
// } else {
//   console.log(`You are ${myAge - yourAge} years older than me`);
// }

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//using if else
let a = 24;
let b = 13;
if (a > b) {
  console.log(`a is greater than b`);
} else {
  console.log(`a is less than b`);
}
//ternary operator.
a > b ? console.log(`a is greater than b`) : console.log(`a is less than b`);

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = Number(prompt('Enter a number,odd or even:'));

num % 2 === 0
  ? console.log(`This is an even number`)
  : console.log(`This is an odd number`);

//EXERCISE LEVEL TWO
//Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

let score = Number(prompt('Enter your grade'));

switch (true) {
  case score >= 80 && score <= 100:
    console.log(`A`);
    break;
  case score >= 70 && score <= 89:
    console.log(`B`);
    break;
  case score >= 60 && score <= 69:
    console.log(`C`);
    break;
  case score >= 50 && score <= 59:
    console.log(`D`);
    break;
  case score >= 0 && score <= 49:
    console.log(`F`);
    break;
  default:
    console.log('No score recorded');
}

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

const month = prompt(`Enter month of the year`);
switch (true) {
  case month === 'September' || 'October' || 'November':
    console.log(`The season is Autumn`);
    break;
  case month === 'December' || 'January' || 'February':
    console.log(`The season is Winter`);
    break;
  case month === 'March' || 'April' || 'May':
    console.log(`The season is Spring`);
    break;
  case month === 'June' || 'July' || 'August':
    console.log(`The season is Summer`);
    break;
  default:
    console.log(`Enter the correct month`);
}

//Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt('What is the day today?');

switch (true) {
  case day === 'Saturday' || 'Sunday':
    console.log(`${day} is a weekend`);
    break;
  case day === `Monday` || `Tuesday` || `Wednesday` || `Thursday` || `Friday`:
    console.log(`${day} is a weekday`);
    break;
  default:
    console.log(`Invalid day`);
}

//Exercise Level 3
//Write a program which tells the number of days in a month.
