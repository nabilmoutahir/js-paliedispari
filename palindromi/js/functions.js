
// funzione palindroma
function palindrome(word) {

    word = word.toLowerCase().trim();

    // parola
    console.log(word)

    // parola al contrario
    let reverseWord = ''

    // ciclo per lunghezza parola
    for (let i = word.length - 1; i >= 0; i--) {

        const currentWord = word[i];
        console.log(currentWord);

        reverseWord += currentWord;
    }

    // risultato
    console.log(reverseWord)

    // variabile
    let wordResult = ''

    // condizione
    if (word == reverseWord) {

        wordResult = true

    } else {

        wordResult = false

    }

    // return
    return wordResult;
}