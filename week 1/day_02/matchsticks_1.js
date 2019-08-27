/*
Progression: 1--6, 2--11, 3--16, 4 -- 21 
Increase by 5 
Step x 5 add 1
*/

// Given step, what is total number of matchsticks ? 

function matchstickHouse(step) {
    let matchsticks = ( (step * 5) + 1 );
    return matchsticks;
}
console.log( matchstickHouse( 9 ) );

// Print the number of matches up to 20 steps

for ( i = 0; i <= 20; i++ ) {
    console.log( matchstickHouse( i ));
}

//Write as a function expression 

// Given x amount of matches, how many houses can you make ?
// Hmm, come back to. 



