/* 
💻 Day 3: Exercises

*/

// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Camilo';
let lastName = 'Saavedra';
let country = 'Chile';
let city = 'Santiago';
let age = 28;
let isMarried = false;
let year = 2023;

console.log(typeof firstName)
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' === 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') === 10);

// 4. Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
const num = 10;
const negativeNum = -3;
const string = 'Hello World';
// ii. Write three JavaScript statement which provide truthy value.
const booleanValue = false;
const valueNull = null;
const names = undefined;

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
const check1 = 4 > 3; // true
console.log(`Is 4 > 3 ${check1} `); 

const check2 = 4 >= 3; // true
console.log(`Is 4 >= 3 ${check2} `); 

const check3 = 4 < 3; // false
console.log(`Is 4 < 3 ${check3} `);

const check4 = 4 <= 3; // false
console.log(`Is 4 <= 3 ${check4} `); 

const check5 = 4 == 4; // true
console.log(`Is 4 == 4 ${check5} `); 

const check6 = 4 === 4; // true
console.log(`Is 4 === 4 ${check6} `);

const check7 = 4 != 4; // false
console.log(`Is 4 != 4 ${check7} `);

const check8 = 4 !== 4; // false
console.log(`Is 4 !== 4 ${check8} `);

const check9 = 4 != '4'; // false
console.log(`Is 4 != '4' ${check9} `);

const check10 = 4 == '4'; // true
console.log(`Is 4 == '4' ${check10} `);

const check11 = 4 === '4'; // false
console.log(`Is 4 === '4' ${check11} `);

// Find the length of python and jargon and make a falsy comparison statement.
let length1 = 'python'.length;
let length2 = 'jargon'.length;

console.log('Falsy comparison:', length1 != length2);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

const check12 = 4 > 3 && 10 < 12 // true true : true  
const check13 = 4 > 3 && 10 > 12 // true false : true 
const check14 = 4 > 3 || 10 < 12 // true true : true 
const check15 = 4 > 3 || 10 > 12 // true false : true 
const check16 = !(4 > 3) // false 
const check17 = !(4 < 3) // true 
const check18 = !(false) // true 
const check19 = !(4 > 3 && 10 < 12) // false 
const check20 = !(4 > 3 && 10 > 12) // true 
const check21 = !(4 === '4') // true
// const check22 = `There is no 'on' in both dragon and python`;

console.log(`Is 4 > 3 && 10 < 12 ${check12} `);
console.log(`Is 4 > 3 && 10 > 12 ${check13} `);
console.log(`Is 4 > 3 || 10 < 12 ${check14} `);
console.log(`Is 4 > 3 || 10 > 12 ${check15} `);
console.log(`Is 4!(4 > 3) ${check16} `);
console.log(`Is 4 !(4 < 3) ${check17} `);
console.log(`Is !(false) ${check18} `);
console.log(`Is !(4 > 3 && 10 < 12) ${check19} `);
console.log(`Is !(4 > 3 && 10 > 12) ${check20} `);
console.log(`Is !(4 === '4') ${check21} `);
// console.log(`There is no 'on' in both dragon and python ${check22} `);

// 7. Use the Date object to do the following activities

const now = new Date();
// What is the year today?
console.log(`What is the year today? is ${now.getFullYear()}`);
// What is the month today as a number?
console.log(`What is the month today as a number? is ${now.getMonth() + 1}`);
// What is the date today?
console.log(`What is the date today? is ${now.getDay()}`);
// What is the day today as a number?
console.log(`What is the day today as a number? is ${now.getDate()}`);
// What is the hours now?
console.log(`What is the hours now? is ${now.getHours()}`);
// What is the minutes now?
console.log(`What is the minutes now? is ${now.getMinutes()}`);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const januaryDate = new Date('January 1, 1970');
const todayNow  = new Date();
const getFullYearOfJanuaryDate = (januaryDate.getFullYear());
const getFullYearNow = (todayNow.getFullYear());
console.log(getFullYearNow - getFullYearOfJanuaryDate);

/* 
Todo: 
- how seconds have one years
1 year = 31.536.000 s
53 years = 1.671.408.000 s


*/