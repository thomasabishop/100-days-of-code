// Named function 
function areaNamed( width, height ){
	return width * height;
}
console.log( areaNamed( 5, 5) );

// Function expression
let areaAnon = function(width, height){
	return width * height;
}
console.log( areaAnon( 5, 5 ) );

// Self-executing anonymous function 

// Type 1
(function() {
    let a = 5;
    let b = 5;
    let c = a*b;
    console.log(c);
}() );

// Type 2
var areaIFFY = 
(function() {
    let a = 5;
    let b = 5;
    let c = a*b;
    return c;
}() );

console.log( areaIFFY) ;

// Function expression as object method
let objectAnon = {
    width: 5,
    height: 5,
    area: function() { return this.width * this.height; }
};

console.log( objectAnon.area() );

// Now going to try iffs as methods in an object

let objectIffy1 = {
    width: 5,
    height: 5,
    area: (function() {
        var a = 5;
        var b = 5;
        var c = a * b;
        return c;
    }())
};

console.log( objectIffy1.area );
