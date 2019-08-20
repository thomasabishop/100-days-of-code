/* 
Goal: Revise basic JavaScript syntax. 
*/

// Variables

// Basic variable
var birthday = '27 July'; // Use advisedly, let and const better
    console.log ( birthday );

// Const
const memorial = '27 July'; // Remains same throughout program. Cannot be changed or reassigned. Block scope.
    let anniversary = '27 July';  // Can be changed and reassigned. Block scope.

// One dimensional array 
let ukCities = ['Coventry', 'Manchester', 'London' ];
    console.log( typeof ukCities); 
    console.log( ukCities[2] );

// Multidimensional array 
let worldCitiesArr = [
    ['Coventry', 'Manchester', 'London'],
    ['Paris', 'LeHavre', 'Marseilles'],
    ['Berlin', 'Hamburg', 'Dresden']
];
    console.log( worldCitiesArr[0][0] ); // Coventry

// Object literal with nested arrays

let worldCitiesObj = {
    uk : [
        'Coventry',
        'Manchester',
        'London'
    ],
    france: [
        'Paris',
        'LeHavre',
        'Marseilles'
    ],
    germany: [
        'Berlin',
        'Hamburg',
        'Dresden'
    ]
}
    console.log( worldCitiesObj.france[2] ); // Marseilles

// JSON object

// Must declare object with name when working with JSON-in-JS, JSON object can be anonymous with JSON-in-JSON

var worldCitiesJSON = {
    "uk" : [
        "Coventry",
        "Manchester",
        "London"
    ],
    "france" : [
        "Paris",
        "LeHavre",
        "Marseilles"
    ],
    "germany" : [
        "Berlin",
        "Hamburg",
        "Dresden"
    ]
}

// Conditional logic

// Create a function that takes a number as input. If number is less than 500, divide it by half. If greater, multiply by 10

function sillyFunction(input) {
    if ( input <= 500 ) {
        output = input / 2;
    }
    else  {
        output = input * 10;
    }
    return output; 
}
    console.log( sillyFunction( 200 )); // 100


// Create a switch with three tests and a default based on number value

var ourNumber = 8;
switch ( ourNumber ) {
    case ourNumber < 10  : console.log( 'Number is less than 10' ); break ;
    case  ourNumber > 10  : console.log( 'Number is greater than 10' ); break; 
    default : console.log( 'Number could not be processed '); break ;
}

// Loops

// See refamiliarisation.html

let names = ['Thomas', 'Martha', 'John'];

for ( var i = 0; i <= names.length; i++ ) {
    console.log( names[i] );
}






