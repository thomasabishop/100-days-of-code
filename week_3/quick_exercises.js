// Given an age in seconds, calculate how old someone is in terms of a given planet's solar years.

/* Need to know:
Years for each planet to circle sun in earth years
Seconds in a year

*/

const EARTH_YEAR_SECS = 31536000;

var solarOrbit = {
    mercury: 88,
    venus: 224.7,
    mars: 687,
    jupiter: 4331,
    saturn: 10747,
    uranus: 30589,
    neptune: 59800,
    pluto: 90560
}

var ageTB = 981546295;

function calcPlanetAge( planet, ageSecs) {
    let yearsOrbit = solarOrbit[planet];
    let ageYear = ageSecs / EARTH_YEAR_SECS;
    let planetAge = ageYear * yearsOrbit;
    return planetAge;
}

console.log(calcPlanetAge('mars', ageTB ));

