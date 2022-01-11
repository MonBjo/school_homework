/* --- övning 1 --- */

let aWord = "elefant";
wordLength(aWord);
console.log(`${aWord} contains ${wordLength(aWord)} letters.`);

function wordLength(word) {
    let lengthOfWord = word.length;

    return lengthOfWord;
}


/* --- övning 2 --- */

let date = "2022-01-10";
getTheYear(date);
console.log(`${date} is at year ${getTheYear(date)}`);

function getTheYear(aDate) {
    let year = aDate.substring(0, 4);

    return year;
}


/* --- övning 3 --- */

let numberOne = 5;
let numberTwo = 10;
let op = "-";
getOperator(op);

function getOperator(operator) {
    switch(operator) {
        case "*":
            multiply(numberOne, numberTwo);
            break;
        case "/":
            divide(numberOne, numberTwo);
            break;
        case "+":
            addition(numberOne, numberTwo);
            break;
        case "-":
            subtract(numberOne, numberTwo);
            break;
    }
}

function multiply(one, two) {
    console.log(one * two);
}

function divide(one, two) {
    console.log(one / two);
}

function addition(one, two) {
    console.log(one + two);
}

function subtract(one, two) {
    console.log(one - two);
}