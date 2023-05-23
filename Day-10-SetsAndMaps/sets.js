'use strict'
//creating an empty set
const countries = new Set()
//set from an array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
const setOfLangs = new Set(languages)
console.log(setOfLangs)
  
for(const language of setOfLangs) {
    console.log(language)
}

const companies = new Set()

companies.add('Google')
companies.add('Microsoft')
companies.add('Facebook')
companies.add('Oracle')
companies.add('Amazon')

companies.delete('Google')
console.log(companies)

//UNION of Sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c  = [...a,...b]
console.log(c)

//intersection
let A = new Set(a)
let B = new Set(b)

let d = a.filter((num) => B.has(num))
let C = new Set(d)

console.log(C)

//MAPS

const map = new Map()
console.log(map)


let countriess = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const mapCountries = new Map(countriess)
  console.log(mapCountries.size)
  mapCountries.set('Kenya', 'Nairobi')
  console.log(mapCountries)

  for(const[country, city] of mapCountries){
    console.log(country, city)
  }

  //Exercise LEvel 1

const e = [4, 5, 8, 9]
const f = [3, 4, 5, 7]
const countriesArr = ['Finland', 'Sweden', 'Norway']

// create an empty set
const emptySet  = new Set()
// Create a set containing 0 to 10 using loop
const numSet = new Set()
for(let i = 0; i <= 10; i++){
  numSet.add(i)
}
console.log(numSet)



// Remove an element from a set
numSet.delete(7)
console.log(numSet)

// Clear a set
numSet.clear()
console.log(numSet)
// Create a set of 5 string elements from array
const fiveStrings = [
  'AkiraChix',
  'Uganda',
  'Veronica',
  'Anita B',
  'Linda'
]
const setFiveStrings = new Set()
for(const string of fiveStrings){
  setFiveStrings.add(string)
}
console.log(setFiveStrings)
// Create a map of countries and number of characters of a country
let countriesA = ['USA', 'India', 'Canada', 'Australia', 'Japan'];
let charCount = new Map();

for (let i = 0; i < countriesA.length; i++) {
    charCount.set(countriesA[i], countriesA[i].length);
}

console.log(charCount);

//EXERCISE LEVEL TWO
// Find g union h
let h = [1, 2, 3, 4, 5]
let g = [3, 4, 5, 6]
const union = [...h,...g]
console.log(union)
// Find a intersection b
// Find a with b


// LEVEL 3
// How many languages are there in the countries object file.
console.log(languages.length)

// *** Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries, n) {
  let languageCount = {};

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (language in languageCount) {
        languageCount[language]++;
      } else {
        languageCount[language] = 1;
      }
    });
  });

  let sortedLangCount = Object.entries(languageCount).sort((a, b) => b[1] - a[1]).slice(0, n);
  return sortedLangCount.map(([lang, count]) => ({[lang]: count}));
}

// example usage
let countriesArrrr = [    {name: "United States", languages: ["English"]},
    {name: "France", languages: ["French"]},
    {name: "Canada", languages: ["English", "French"]},
    {name: "China", languages: ["Mandarin", "Cantonese"]},
    {name: "India", languages: ["Hindi", "English"]},
    {name: "Spain", languages: ["Spanish"]},
    {name: "Mexico", languages: ["Spanish"]},
    {name: "Russia", languages: ["Russian"]},
    {name: "Australia", languages: ["English"]},
    {name: "Brazil", languages: ["Portuguese"]},
];

console.log(mostSpokenLanguages(countries, 10));


