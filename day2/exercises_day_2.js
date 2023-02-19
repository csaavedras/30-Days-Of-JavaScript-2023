/*  💻 Day 2: Exercises */

//Exercise: Level 1 

// TODO
// 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

// let challenge = '30 Days Of JavaScript'

// 2: Print the string on the browser console using console.log()
console.log(challenge);

// 3: Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4: Change all the string characters to capital letters using toUpperCase() method
let challengeToUpperCase = challenge.toUpperCase();
console.log(challengeToUpperCase);

//5: Change all the string characters to lowercase letters using toLowerCase() method
let challengeToLoweCase = challenge.toLowerCase();
console.log(challengeToLoweCase);

//6: Cut (slice) out the first word of the string using substr() or substring() method
const cutSlice = challenge.substring(0, 2);
console.log('Slice first word', cutSlice);

//7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


const slidePhrase = challenge.substring(2, challenge.length);
console.log(slidePhrase);

//8: Check if the string contains a word Script using includes() method
const searchWord = challenge.includes('Script');
console.log(
  searchWord
    ? `The string ${challenge} contains a word 'Script'`
    : 'The string not contains the word Script'
);

//9: Split the string into an array using split() method
let challenge = '30 Days Of JavaScript';
console.log(challenge.split(" "))

//10: Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split());

//11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(", "));

//12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let challenge2 = '30 Days Of JavaScript';
console.log(challenge2.replace('JavaScript', 'Python'));

//13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge2.charAt(15)) // S

//14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge2.charCodeAt('J')); // 51

//15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge2.indexOf())

// 16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('lastIndexOf', challenge2.lastIndexOf('JavaScript'));

// 17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentenceExample =
  'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceExample.indexOf('because'));
// 18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentenceExample2 =
  'You cannot end a sentence with because because because is a conjunction';
console.log(sentenceExample2.lastIndexOf('because'));

//19  Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentenceExample2.search('because')) //31
 
//20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const newText = ' 30 Days Of JavaScript ';
console.log('Without trim()',newText)
console.log('With trim()', newText.trim());

//21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const text2 = '30 Days Of JavaScript';
console.log(text2.startsWith('30')); // true

//22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(text2.endsWith('JavaScript')); // true

//23: Use match() method to find all the a’s in 30 Days Of JavaScript
const text3 = '30 Days Of JavaScript';
const regex = /[a]/g;
console.log(text3.match(regex));

//24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const paragraph1 = '30 Days of';
const paragraph2 = ' JavaScript';

console.log(paragraph1.concat(paragraph2))

//25: Use repeat() method to print 30 Days Of JavaScript 2 times
const paragraphJs = '30 Days Of JavaScript';
console.log(paragraphJs.repeat(2));
