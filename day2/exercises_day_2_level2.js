/*  💻 Day 2: Exercises */

//Exercise: Level 2

// 1. Using console.log() print out the following statement:
`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;

console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

//2. Using console.log() print out the following quote by Mother Teresa:
("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

//3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10';
let numTen = 10;

console.log(typeof ten);
console.log(typeof numTen);

let tenToNum = parseInt(ten);

console.log(tenToNum === numTen);

//4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let parseF = parseFloat('9.8');
let rounParseF = Math.round(parseF);
let num10 = 10;

if (rounParseF === num10) {
  console.log('its equal');
} else {
  console.log('Is not equal');
}

//5 Check if 'on' is found in both python and jargon
let programingLanguage = 'python';
let exampleText = 'jargon';

if (programingLanguage.includes('on') && exampleText.includes('on')) {
  console.log(`Yes, found in both text words 'on'`);
} else {
  console.log('its was not found');
}

//6 I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentenceII = 'I hope this course is not full of jargon.';
console.log(sentenceII.includes('jargon'));
sentenceII.includes('jargon')
  ? console.log('jargon include in the sentence')
  : console.log('jardon not include in sentences');

//7 Generate a random number between 0 and 100 inclusively.

for (let index = 0; index < 100; index++) {
  let randomNum = Math.floor(Math.random() * 100 + 1);
  console.log(randomNum);
}

//8 Generate a random number between 50 and 100 inclusively.

for (let index = 0; index < 100; index++) {
  let min = Math.ceil(50);
  let max = Math.floor(100);
  let randomNumBetween = Math.floor(Math.random() * (max - min) + 50 + 1);
  console.log(randomNumBetween);
}

// 9 Generate a random number between 0 and 255 inclusively.

for (let index = 0; index < 500; index++) {
  let min = Math.ceil(0);
  let max = Math.floor(255);
  let randomNumBetween = Math.floor(Math.random() * (max - min) + 1);
  console.log(randomNumBetween);
}

// 10 Access the 'JavaScript' string characters using a random number.
let jsString = 'JavaScript';
let randomNumForString = Math.floor(Math.random() * jsString.length + 1);
console.log(jsString[randomNumForString]);

// 11 Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

//12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let lastPhrase = 'You cannot end a sentence with because because because is a conjunction';
let phraseBecause = 'because because because';
let countWords = phraseBecause.length;
let startBecause = (lastPhrase.indexOf('because'));
let sumWords = startBecause + countWords

console.log(lastPhrase.substring(startBecause, sumWords));
