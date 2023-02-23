/* 
💻 Day 3: Exercises

*/

// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//hint: (area = 0.5 x b x h)

const inputUserBase = parseInt(prompt('Input base of the triangle')); ;
const inputUserHeight = parseInt(prompt('Input height of the triangle'));
const calcAreaTriangle = 0.5 * inputUserBase * inputUserHeight
console.log(`The area of the triangle is ${calcAreaTriangle}`)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//hint: (perimeter = a + b + c)

const inputUserSideA = parseInt(prompt('Enter side A'));
const inputUserSideB = parseInt(prompt('Enter side B'));
const inputUserSideC = parseInt(prompt('Enter side C'));
const calcOfPerimeterOfTriangle =
  inputUserSideA + inputUserSideB + inputUserSideC;
console.log(`The perimeter of the triangle is ${calcOfPerimeterOfTriangle}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//hint: 
const inputLength = parseInt(prompt('Enter length of the rectangle'));
const inputWitdh = parseInt(prompt('Enter width of the rectangle'));
const calcAreaOfRectangle = inputLength * inputWitdh;
console.log(`The area of the rectangle is ${calcAreaOfRectangle}`);
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//hint:  (area = pi x r x r) (c = 2 x pi x r)

const PI = Math.PI;
const inputRadius = parseInt(prompt('Enter of Radius of circle'));
const calcOfAreaCircle = parseFloat(PI * (inputRadius * inputRadius)); ;
const calcOfCircumferenceCircle = 2 * PI * inputRadius;
console.log(`The area of circle is ${calcOfAreaCircle} and circumference of circle is ${calcOfCircumferenceCircle}`);

// 5.
//hint: The slope intercept formula y = mx + b is used when you know the slope of the line to be examined and the point given is also the y intercept (0, b). In the formula, b represents the y value of the y intercept point.

// Prompt the user for a linear equation in the form "y = mx + b"
let equation = prompt("Enter a linear equation in the form 'y = mx + b':");

// Split the equation string into its components
let components = equation.split(" ");

// Extract the slope and y-intercept from the components
let slope = parseFloat(components[2]);
let yIntercept = parseFloat(components[4]);

// Calculate the x-intercept by setting y to 0 and solving for x
let xIntercept = -yIntercept / slope;

// Display the results to the user
alert("Slope: " + slope + "\nX-intercept: " + xIntercept + "\nY-intercept: " + yIntercept);
