/*
Progression: 1--6, 2--11, 3--16, 4 -- 21 
Increase by 5 
Step x 5 add 1
*/

// Given step, what is total number of matchsticks ? 

function matchstickHouse1(step) {
    let matchsticks = ( (step * 5) + 1 );
    return matchsticks;
}
    console.log( matchstickHouse1( 9 ) );

// Repeat but with a function expression

var matchstickHouse2 = function( step ) {
    return ( ( step * 5 ) + 1 );
}
    console.log( matchstickHouse2( 2 ) );

// Practice loops by iterating through matchstick function

// For loop...
for ( var i = 0; i <= 10; i++ ){
    console.log( matchstickHouse1( i ) );
}

// While loop...
var i = 0;
while (i <= 10 ){
    console.log( matchstickHouse1( i ) );
    i++;
}

// Do while loop
var i = 0;
do {
    console.log( matchstickHouse1( i ) );
    i++;
}
while (i <= 10);


// Loop through matchstick function and store output in array.
var j = 1;
let matchArr = [];

while ( j <= 5 ) {
    matchArr.push( matchstickHouse1( j ) );
    j++;
}
    console.log( matchArr );
    console.log( JSON.stringify( matchArr ) );
    