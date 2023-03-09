// Exercises: Level 2

// 1: Write a code which can give grades to students according to theirs scores:

let studentsScore = 50;
switch (true) {
    case (studentsScore >= 80 && studentsScore <= 100):
        // code
        console.log("You grade A")
        break
    case (studentsScore >= 70 && studentsScore <= 89):
        // code
        console.log("You grade B")
        break
    case (studentsScore >= 60 && studentsScore <= 69):
        // code
        console.log("You grade C")
        break
    case (studentsScore >= 50 && studentsScore <= 59):
        // code
        console.log("You grade D")
        break
    case (studentsScore >= 0 && studentsScore <= 49):
        // code
        console.log("You grade F")
        break
    default:
        // code
        console.log("Dont have score")
}

// 2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let inputActualMonth = prompt("Enter the current month ").toLowerCase();

switch (true) {
    case inputActualMonth == 'september' || inputActualMonth == 'october' || inputActualMonth == 'november':
        console.log("The current season is Autumn")
        break;
    case inputActualMonth == 'december' || inputActualMonth == 'january' || inputActualMonth == 'february':
        console.log("The current season is Winter")
        break;
    case inputActualMonth == 'march' || inputActualMonth == 'april' || inputActualMonth == 'may':
        console.log("The current season is Spring")
        break;
    case inputActualMonth == 'june' || inputActualMonth == 'july' || inputActualMonth == 'august':
        console.log("The current season is Summer")
        break;
    default:
        console.log("Dont input any month, please try again")
        break;
}

// 3: Check if a day is weekend day or a working day. Your script will take day as an input.
let inputDay = prompt("What is the day today?").toLowerCase();

switch (true) {
    case inputDay == 'monday' || inputDay == 'tuesday' || inputDay == 'wednesday' || inputDay == 'thursday' || inputDay == 'friday':
        console.log(`${inputDay} is a working day`)
        break;
    case inputDay == 'saturday' || inputDay == 'sunday':
        console.log(`${inputDay} is a weekend`)
    default:
        break;
}

