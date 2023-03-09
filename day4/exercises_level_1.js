// Exercises: Level 1

// 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userInputAge = parseInt(prompt("Enter your age"));
userInputAge > 18 ? alert("You are old enough to drive.") : alert("You are left with 3 years to drive.")

// 2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 29;
let yourAge = parseInt(prompt("Enter your age: "))
if (myAge > yourAge) {
    let differentAge = myAge - yourAge
    alert(`You are ${differentAge} years younger than me.`)
} else {
    let differentAge = yourAge - myAge
    alert(`You are ${differentAge} years older than me.`)
}

// 3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4;
let b = 10;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b')
}


// 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let userInputNumber = parseInt( prompt("Enter a number: "));

if (userInputNumber % 2 == 0) {
    console.log(`${userInputNumber} is an even number}`);

} else {
    console.log(`${userInputNumber} is an odd number`);
}

userInputNumber % 2 == 0 ? console.log(`${userInputNumber} is an even number}`) : console.log(`${userInputNumber} is an odd number`);