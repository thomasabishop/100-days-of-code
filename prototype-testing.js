var slayer = {
    genre: "thrash metal",
    mainAlbum: "Reign In Blood"
}

console.log( Object.getPrototypeOf(slayer) );
console.log( slayer.__proto__ );

function Band( genre, mainAlbum ) {
    this.genre = genre;
    this.mainAlbum = mainAlbum;
}

var judasPriest = new Band( "thrash metal", "British Steel");

console.log(judasPriest.genre);

console.log( Object.getPrototypeOf( judasPriest.genre ) );
