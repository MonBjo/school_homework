const guessWordButtonElem = document.querySelector('#guessWordButton');
const wordDisplayElem = document.querySelector('#wordDisplay');

const baseURL = "https://api.dictionaryapi.dev";
let wordPairToGuess = [];
generateWords();
const wordLength = wordPairToGuess[0].length;
let previousWord = wordPairToGuess[0];


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


function generateWords() {
    const startWordElem = document.querySelector('#startWord');
    const endWordElem = document.querySelector('#endWord');
    const wordPairs = [["four", "five"], ["eye", "lid"], ["tiger", "roses"], ["wheat", "bread"]]
    //console.log("wordPairs: ", wordPairs);
    wordPairToGuess = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    //console.log(wordPairToGuess);
    startWordElem.innerHTML = wordPairToGuess[0];
    endWordElem.innerHTML = wordPairToGuess[1];
}


function isRealWord(word) {
    fetch(`${baseURL}/api/v2/entries/en/${word}`)
        .then(response => {
            if(response.ok){
                console.log("it's a real word", response);
                compareWords(word);
            } else {
                alert("that is not a real word");
                throw Error(response.status);
            }
        }).catch(function(err) {
            console.log(err);
        }
    );
}


function compareWords(newWord){
    console.log("newWord ", newWord);
    console.log("previousWord ", previousWord);
    let difference = 0;
    
    for(let i = 0; i < wordLength; i++) {
        console.log(`${i} : ${newWord[i]} - ${previousWord[i]}`);
        if(newWord[i] != previousWord[i]) {
            difference++;
        }
        if(difference > 1) {
            alert("you can only change one letter for each guess");
            break;
        }
    }

    if(difference == 1) {
        console.log("good guess");
        let wordDisplayListElems = wordDisplayElem.querySelectorAll('p');
        let wordListAdd = wordDisplayListElems.length - 1
        let addWordHTML = `<p>${newWord}</p>`;
        wordDisplayListElems.splice(wordListAdd, 0, addWordHTML);
        previousWord = newWord;
    } else { 
        console.log("bad guess");
    }
}

console.log(wordDisplayElem.children);
console.log(wordDisplayElem.appendChild(document.createElement('p')));
console.log(wordDisplayElem.children);
