let cardsElem = document.querySelectorAll('.memory-card');
let winElem = document.querySelectorAll('.overlay');
let cardsToCompare = [];
let pairsFound = 0;
console.log(cardsElem);

for(let card of cardsElem) {
    //console.log("card: ", card);
    //console.log(card.attributes[1].value);
    
    card.addEventListener('click', (event) => {
        //console.log(`---------------------`);
        //console.log(`click card: `, card);
        //console.log(`click event: `, event);
        card.classList.add('flip');
        
        compareCards(card);
        
    });
}

function compareCards(card){

    setTimeout(() => {
        let value = card.attributes[1].value;
        console.log(`value: `, value);
        cardsToCompare.push({value: value, card: card});
    
        if(cardsToCompare.length == 2) {
            if(!checkMatch()) {
                
            }
            cardsToCompare = [];
            console.log(`Pairs so far: ${pairsFound}`);
            console.log('----------');
        }
    }, 1500);


    function checkMatch(){
        console.log('cards to compare: ', cardsToCompare);
        if(cardsToCompare[0].value == cardsToCompare[1].value){
            pairsFound++;
            if(pairsFound == 8){
                overlayWin(); 
            }
            return true;
        } else {
            flipBack();
            return false;
        }
    }
}


function flipBack(){
    console.log(cardsToCompare);
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
    console.log(winElem[0]);
    winElem[0].classList.add('show');
}

// TODO: add so the exit button works