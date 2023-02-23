/* 
💻 Day 3: Exercises

*/

// Exercises: Level 3


// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const date = new Date();

const year = (date.getFullYear())
const month = (('00' + date.getMonth() + 1).slice(-2));
const day = (('00' + date.getDate()).slice(-2));
const hour = (('00' + date.getHours()).slice(-2));
const minutes = (('00' + date.getMinutes()).slice(-2));
const dateFormat = `${year}-${month}-${day} ${hour}:${minutes}`;
console.log(dateFormat);
