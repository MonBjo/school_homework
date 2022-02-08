//Dessa är alla variabler du behöver använda. 
//De ska dock ligga i olika funktioner och inte nedanför.


const buttonElem = document.getElementById('calculateButton');

function calculateTip(sum, tip) {
    const total = parseInt(sum) * parseFloat(tip);
    return total;
}

function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    return sumDivided;
}

function showDividedSum(sum) {
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}

buttonElem.addEventListener('click', () => {
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;

    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;

    const friendSum = divideTotal(total, numberOfFriends);

    showDividedSum(friendSum);

    console.log(`friendSum: ${friendSum}`);

    console.log(`calculatedTip: ${calculatedTip}`);

    console.log(`Sum: ${typeof sum}`);
    console.log(`Number of friends: ${typeof numberOfFriends}`);
    console.log(`Tip: ${typeof tip}`);
});