let cardsElem = document.querySelectorAll('.memory-card');
let winElem = document.querySelectorAll('.overlay');
let cardsToCompare = [];
let pairsFound = 0;
//console.log(cardsElem);

for(let card of cardsElem){
    //console.log("card: ", card);
    //console.log(card.attributes[1].value);
    
    card.addEventListener('click', (event) => {
        //console.log(`---------------------`);
        //console.log(`click card: `, card);
        //console.log(`click event: `, event);
        card.classList.add('flip');

        //let value = event.target.parentNode.getAttribute('data-card');
        let value = card.attributes[1].value;
        console.log(`value: `, value);
        cardsToCompare.push(value);

        if(cardsToCompare.length == 2) {
            checkMatch();
        }
    });
}

function checkMatch(card){
    console.log('cards to compare: ', cardsToCompare);
    if(cardsToCompare[0] == cardsToCompare[1]){
        console.log('lika');
        pairsFound++;
    } else {
        console.log('olika');
    }
    cardsToCompare = [];
    console.log(`Pairs so far: ${pairsFound}`);
    console.log('----------');
}