const guessWordButtonElem = document.querySelector('#guessWordButton');
const wordDisplayElem = document.querySelector('#wordDisplay');

import { isRealWord, compareWords, generateWords } from "./checkword.js";

//console.log("wordPairToGuess", wordPairToGuess);
//console.log("previousWord ", previousWord);

guessWordButtonElem.addEventListener('click', (event) => {
    const guessWordInputElem = document.querySelector('#guessWordInput');
    let guessedWord = guessWordInputElem.value;
    //console.log(guessWord);
    
    if(wordLength == guessedWord.length) {
        isRealWord(guessedWord);
    } else {
        alert(`Guess a word with the lenght of ${wordLength}, please.`);
    }
});


console.log(wordDisplayElem.children);
console.log(wordDisplayElem.appendChild(document.createElement('p')));
console.log(wordDisplayElem.children);
