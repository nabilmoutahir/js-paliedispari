



// funzione numero random
function getRandomNum (min, max) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;
} 

console.log( getRandomNum (1, 5) );


