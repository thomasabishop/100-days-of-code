// Cool way to bunch multiple functions 

function prism( width, length, height ) {
    let perimeter = ( width + length ) * 2 ;
    let area =  width * length ;
    let volume = ( height * width ) * length; 
    let sizes = [ perimeter, area, volume ];
    return sizes;
}

console.log( prism(5, 5, 8 )[0] ); // Perimeter
console.log( prism(5, 5, 8 )[1] ); // Area
console.log( prism(5, 5 , 8 )[2] ); // Volume 
