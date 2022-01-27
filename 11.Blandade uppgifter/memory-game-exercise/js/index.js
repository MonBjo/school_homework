let cardsElem = document.querySelectorAll('.memory-card');
let winElem = document.querySelector('.overlay');
let winExitElem = document.querySelector('.close');

let cardsToCompare = [];
let pairsFound = 0;
shuffleCards();

console.log(cardsElem);

// Adds event listeners
for(let card of cardsElem) {
    //console.log("card: ", card);

    card.childNodes[3].addEventListener('click', (event) => {
        if(cardsToCompare.length < 2){
            card.classList.add('flip');
            compareCards(card);
        }
    });
}

function shuffleCards() {
    let cardsHolderElem = document.querySelector('.memory-cards');
    for (let i = cardsHolderElem.children.length; i >= 0; i--) {
        cardsHolderElem.appendChild(cardsHolderElem.children[Math.random() * i | 0]);
    }
}


function compareCards(card){
    console.log(`cardsToCompare: `, cardsToCompare);
    let value = card.attributes[1].value;
    console.log(`value: `, value);
    cardsToCompare.push({value: value, card: card});
    
    if(cardsToCompare.length == 2) {
        setTimeout(() => {
            checkMatch();
            cardsToCompare = [];
            console.log(`Pairs so far: ${pairsFound}`);
            console.log('----------');
        }, 1000);
    }
}


function checkMatch(){
    console.log('cards to compare: ', cardsToCompare);
    if(cardsToCompare[0].value == cardsToCompare[1].value){
        pairsFound++;
        console.log(`it's a match! ${cardsToCompare[0].value} and ${cardsToCompare[1].value}`);
        
        if(pairsFound == 8){
            overlayWin(); 
        }
    } else {
        flipBack();
        console.log(`it's not a match! ${cardsToCompare[0].value} and ${cardsToCompare[1].value}`);
    }
    
}


function flipBack(){
    for(let card of cardsElem) {
        for(let value of cardsToCompare){
            if(card.attributes[1].value == value.value){
                card.classList.remove('flip');
            }
            //console.log(card.attributes[1].value + " | " + value.value);
        }
    }
}


function overlayWin(){
    console.log(winElem);
    winElem.classList.add('show');
    
    winExitElem.addEventListener('click', () => {
        winElem.classList.remove('show');
        resetGame();
    });
}

function resetGame() {
    for(let card of cardsElem) {
        card.classList.remove('flip');
    }
    pairsFound = 0;
    shuffleCards();
}


/*- -  -   -    -        -    -   -  - -*\
| https://codepen.io/monbjo/pen/BamygKE  |
\*- -  -   -    -        -    -   -  - -*/