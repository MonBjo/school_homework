const btnRock = document.querySelector(`#btnRock`);
const btnScissor = document.querySelector(`#btnScissor`);
const btnPaper = document.querySelector(`#btnPaper`);

let choice = ``;
let choiceAi = ``;
let playerPoints = 0;
let aiPoints = 0;

btnRock.addEventListener(`click`, () => {
    choice = 0;
    console.log(`Du har valt sten`);
    aiHand();
});

btnScissor.addEventListener(`click`, () => {
    choice = 1;
    console.log(`Du har valt sax`);
    aiHand();
});

btnPaper.addEventListener(`click`, () => {
    choice = 2;
    console.log(`Du har valt påse`);
    aiHand();
});


function aiHand() {
    let choiceAi = Math.round(Math.random() * 2);
    console.log(choiceAi);
    if(choiceAi == 0) {
        console.log(`Motståndaren valde sten`);
    } else if(choiceAi == 1) {
        console.log(`Motståndaren valde sax`);
    } else {
        console.log(`Motståndaren valde påse`);
    }
    whoWins(choice, choiceAi);
}

function whoWins(playerChoice, aiChoice) {
    if(aiChoice == 0 && playerChoice == 0 
    || aiChoice == 1 && playerChoice == 1 
    || aiChoice == 2 && playerChoice == 2) {
        console.log(`Det blev oavgjort!`);
    } else if(aiChoice == 0 && playerChoice == 1 
    || aiChoice == 1 && playerChoice == 2 
    || aiChoice == 2 && playerChoice == 0 ){
            console.log(`Motståndaren vann!`);
            aiPoints++;
    } else {
        console.log(`Du vann!`);
        playerPoints++;
    }

    if(playerPoints == 3) {
        console.log(`Grattis du vann spelet!`);
    } else if(aiPoints == 3) {
        console.log(`Motståndaren vann spelet!`);
    } else {
        console.log(`du har ${playerPoints} poäng, motståndaren har ${aiPoints} poäng`);
    }
    console.log(`---`);
}
