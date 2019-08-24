// Pasting snippets and experimenting
// Much of this won't make sense


console.log(randomArr.sort(sortInts));


function median(integerArr) {
// Check that array has been served and count not odd
if  ( Array.isArray( integerArr ) == true )  {
    if ( integerArr.length % 2 == 1 ) {
        let x = Math.round( (integerArr.length/2 ) ); 
        let y = x - 1;
        return integerArr[y];
    }
    else {
        console.log('Array has even count');
    }

  }
else {
    console.log('Entity entered is not an array.');
}

}

console.log(median(arrInput));

  // Check if odd or even. Odd = 1, Even = 0
  if ( arrInput.length % 2 !== 0 ) {
    console.log( 'Array input length is odd');
}
else {
    console.log( 'Array input length is even');
}

function median(integerArr) {
    if ( Array.isArray( integerArr ) == true ) {
        if (integerArr.length % 2 == 1 ) {
            let sorted = integerArr.sort( sortNumber );
            let x = Math.round((sorted.length/2));
            let median = x - 1;
            return integerArr([median]);
        }
        else {
            /*Procedure for even median */
        }
    }
    else {
        console.log( 'Not an array!');
    }
}

/* Even median procedure
At AT at At 
Count array length
Divide by 2 = result
median = array[result] 

*/

let arr = [5, 7, 8, 9];

function evenMedian(intArr ) {
    let evenSorted = intArr.sort( sortNumber );
    let x = evenSorted.length/2;
    let y = x + 1;
    let median = ( ( intArr[x] + intArr[y] ) / 2 );
    return median;
}


for ( var i = 0; i <= links.length; i++ ) {
    list.appendChild( entry.setAttribute() );
}

for ( var i = 0; i <= links.length; i++ ) {
    entry.appendChild( link.setAttribute( "href", links[i] ) );
}



function median(integerArr) {
    if ( Array.isArray( integerArr ) == true ) {
        if (integerArr.length % 2 == 1 ) {
            let sorted = integerArr.sort( sortNumber );
            let x = Math.round((sorted.length/2));
            let median = x - 1;
            return integerArr[median];
        }
        else {
            let evenSorted = integerArr.sort( sortNumber );
            let x = ( evenSorted.length/2 ) - 1;
            let y = x + 1;
            let median = ( ( integerArr[x] + integerArr[y] ) / 2 );
            return median;
        }
    }
    else {
        console.log( 'Not an array!');
    }
}

console.log(median( arrInput2 ) );