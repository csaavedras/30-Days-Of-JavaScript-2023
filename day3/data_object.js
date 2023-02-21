const now = new Date();
console.log('Full Year', now.getFullYear());
console.log('Month', now.getMonth());
console.log('Date', now.getDate());
console.log('Hours', now.getHours());
console.log('Minutes', now.getMinutes());
console.log('Seconds', now.getSeconds());
console.log('Time', now.getTime());
console.log('Day', now.getDay());

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56


/* 
How to use Date Object

1. Creating a time object 
Once we create time object. The time object will provide information about time. Let us create a time object

We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

*/