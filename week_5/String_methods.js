var string = "Love is the law, Love under will."

// Return number of chars in string 
console.log(string.length);

// Convert number value to string value 
var asNumber = 340;
var asString = String( asNumber );
console.log(typeof asString ); // string 

// Uppercase, lowercase
console.log(string.toUpperCase());
// LOVE IS THE LAW, LOVE UNDER WAR 

// Identify character by postiton 

console.log( string.charAt('5') );
// i 
// Stops at the index just before the char in question

console.log( string.indexOf('law') );
// 12
// Stops at the index just before the char in question 

// Identify last instance of selection in string
console.log( string.lastIndexOf( 'love' ) );
// Returns -1 because is case-sensitive

// Try again

console.log( string.lastIndexOf( 'Love ') );

// 17 

// Isolate a section of the string
console.log( string.substring(5, 18));
// is the law, L

// Find and replace 
console.log( string.replace('Love', 'Hate') );
// Hate is the law, Love under will.
// Only matches first find. 

