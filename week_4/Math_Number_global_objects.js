
// Methods of the Math global object 

console.log(Math.PI); // Log Pi to the console
console.log( Math.round(234.23) ); // Round to the nearest whole integer, up/down depending on number
console.log( Math.ceil(234.23) ); // Round up to the nearest integer
console.log( Math.floor(234.23) ); // Round down to the nearest integer 
console.log( Math.random() ); // 0.9685865065757961
console.log( Math.random()* 10 );  // 3.1662209757403437
console.log( Math.random()* 10 );  // 4.937191245670681

let nom = "hello";
console.log(isNaN(nom));
console.log(isNaN('string'));

// Methods of the Number global object 
console.log( Math.PI.toFixed(3) ); // 3.142

console.log( Math.PI.toPrecision(3) ); // 3.14

console.log( Math.PI.toExponential(3) ); // 3.14