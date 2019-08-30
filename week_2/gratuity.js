// Gratuity calculator for showcase on CodePen

const scores = {
    poor: 5,
    satisfactory: 15,
    excellent: 20
};
let diners = 2;
let rating = 'satisfactory';
let totalCost = 265.00;

function gratuityCalc( cost, ratingInput, dinersInput ) {
    switch ( ratingInput ) {
        case 'poor' : var tip = ( cost / 100 ) * scores.poor; break;
        case 'satisfactory' : var tip = ( cost / 100 ) * scores.satisfactory; break;
        case 'excellent' : var tip = ( cost / 100 ) * scores.excellent; break;
        default : console.log( 'Your tip could not be calculated' ); break;
    }
    return tip/dinersInput;
}


console.log(gratuityCalc( totalCost, rating, diners ));

// Rewrite the above but use anonymous functions, not statements