/* We create an instance of the Date object using constructor notation */

var today = new Date();
console.log(today);

// 2019-09-20T11:55:35.040Z

/* Once we have a varia.ble that is an instance of the Date object,
we gain access to all the in-built methods associated with this 
object type. Let's look at them */

console.log( today.toDateString() );

/* This outputs the date object as a nicely formatted string: 
 Fri Sep 20 2019
 */



 console.log( today.getDay());
 // Outputs day number... 5 because Friday


 console.log( today.getTime());

// 1568981058724
// This is the num of milliseconds since Jan 1 1970 in coordinated universal time

console.log(today.toTimeString());
// Prints time as nicely formatted string 

// 13:06:32 GMT+0100 (British Summer Time)

console.log( today.getDate() );
console.log( today.getDay() );
console.log( today.getHours());
console.log(today.getMinutes());
console.log(today.getMonth());
console.log(today.getSeconds());
console.log(today.getTime());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(toString(today) );

let month = today.getMonth();
var year = today.getFullYear();

var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

console.log ( "The month is " + months[month] + "in the year " + year );

let hour = today.getHours(); 
let mins = today.getMinutes();

console.log("The time is " + hour.toString() + ':' + mins.toString() ); 