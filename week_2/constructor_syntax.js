
square = {
	width: 20,
	height: 20,
	area: function(){area = square.width * square.height; return area; }
};

console.log( square.area() );

square.width = 40;
    console.log( square.width );

square['height'] = 500;
    console.log( square.height);
    console.log( square['height'] );

    