
const lowerButton = document.querySelector('#lower');
const equalButton = document.querySelector('#equal');
const higherButton = document.querySelector('#higher');
const scoreElem = document.querySelector('.score');
const attemptsElem = document.querySelector('.attempts');
const cardCountElem = document.querySelector('.left');
const gameOverElem = document.querySelector('#gameover');

let attempts = 3;
let activeCard = {};
let previousCard = {};
let score = 0;

let deck = generateDeck(); // global
console.table(deck);
let picked = pickCard();
console.log("Valt kort: ", picked);
showCard(picked);

//                            event, function
lowerButton.addEventListener('click', lower);
equalButton.addEventListener('click', equal);
higherButton.addEventListener('click', higher);
// Om man har parentes på dessa funktionen så kör den på 
//  en gång istället för att vänta in "sitt" event

function generateDeck() {
    let deck = []; // local
    const suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];

    for(let i = 0; i < suits.length; i++) {
        for(let j = 2; j < 15; j++) {

            let card = {
                suit: suits[i],
                color: getColor(suits[i]),
                display: getDisplay(j),
                value: j
            };

            deck.push(card);
        }
    }

    function getColor(suit) {
        if(suit == "&hearts;" || suit == "&diams;"){
            return "red";
        } else {
            return "black";
        }
    }

    function getDisplay(value) {
        if (value == 11) { return 'J'; }
        else if (value == 12) { return 'D'; }
        else if (value == 13) { return 'K'; }
        else if (value == 14) { return 'A'; }
        else { return value; }
    }

    return deck;
}


function pickCard() {
    const randomPosition = Math.floor(Math.random() * deck.length);
    const pickedCard = deck.splice(randomPosition, 1);

    activeCard = pickedCard[0];

    updateCardCount();

    return pickedCard[0];
}


function showCard(card) {
    const cardHolderElem = document.querySelector('#show-card');

    cardHolderElem.innerHTML = `
    <section class="front">
    <header><span class="${card.color}">${card.suit}</span>${card.display}</header>
        <div class="suit ${card.color}">${card.suit}</div>
        <footer><span class="${card.color}">${card.suit}</span>${card.display}</footer>
    </section>
    <section class="back"></section>
    `;
}


function lower() {
    if (deck.length > 0 && attempts > 0) {

        previousCard = activeCard;

        picked = pickCard();
        showCard(picked);
        console.log("tidigare kort: ", previousCard[0]);
        console.log("nuvarande kort: ", activeCard[0]);
        
        if(activeCard.value < previousCard.value) {
            updateScore();
        } else {
            updateAttempts();
        }
    } else {
        gameOverElem.classList.add('show');
    }
}

function equal() {
    if (deck.length > 0 && attempts > 0) {
        previousCard = activeCard;

        picked = pickCard();
        showCard(picked);
        console.log("tidigare kort: ", previousCard);
        console.log("nuvarande kort: ", activeCard);
        
        if(activeCard.value == previousCard.value) {
            updateScore();
        } else {
            updateAttempts();
        }
        
    } else {
        gameOverElem.classList.add('show');
    }
}

function higher() {
    if (deck.length > 0 && attempts > 0) {
        previousCard = activeCard;

        picked = pickCard();
        showCard(picked);
        console.log("tidigare kort: ", previousCard[0]);
        console.log("nuvarande kort: ", activeCard[0]);
        
        if(activeCard.value > previousCard.value) {
            updateScore();
        } else {
            updateAttempts();
        }
    
    } else {
        gameOverElem.classList.add('show');
    }
}


function updateScore() {
    score = score + 100;
    scoreElem.innerHTML = score;
}

function updateAttempts() {
    attempts--;
    attemptsElem.innerHTML = attempts;
}

function updateCardCount() {
    cardCountElem.innerHTML = `${deck.length} kort kvar`;
}