
/* Explicit conversion examples */

// Establish variables

var numString = "42";
var num = 42;

// Explicitly coerce string to number 

let toInt = Number( numString );
    console.log( typeof( toInt ) ); // number

// Reverse the process: number to string 

let toStr = String( num );
    console.log( typeof( toStr ) ); // string 

// Boolean to string

let itsMonday = true;
    console.log( typeof( itsMonday )); // boolean

let mondayString = itsMonday.toString();
    console.log( itsMonday);



/* Implicit conversion examples */

let implicitCalc = numString * 1;
    console.log( typeof( implicitCalc ) );  // number 


