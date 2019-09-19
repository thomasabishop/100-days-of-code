// Generate our number through explicit coercion
var ourNum = Number ('32.78');
console.log(ourNum);

if (isNaN( ourNum ) == false) {
    console.log(ourNum.toFixed (1) );
}
else {
    console.log('Not a number');
}
// 32.8 

