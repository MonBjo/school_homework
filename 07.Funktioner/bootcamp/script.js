/* --- övning 1 --- */
console.log(`--- övning 1 ---`);

let aWord = "elefant";
wordLength(aWord);
console.log(`${aWord} contains ${wordLength(aWord)} letters.`);

function wordLength(word) {
    let lengthOfWord = word.length;

    return lengthOfWord;
}


/* --- övning 2 --- */
console.log(`--- övning 2 ---`);

let date = "2022-01-10";
getTheYear(date);
console.log(`${date} is at year ${getTheYear(date)}`);

function getTheYear(aDate) {
    let year = aDate.substring(0, 4);

    return year;
}


/* --- övning 3 --- */
console.log(`--- övning 3 ---`);

let numOne = "5";
let numTwo = 10;
let op = "*";

console.log(`numOne: ${numOne}`);
console.log(`numTwo: ${numTwo}`);
console.log(`operator: ${op}`);
console.log(`result: ${doCalculate(numOne, numTwo, op)}`);

function doCalculate(numberOne, numberTwo, operator) {
    parseInt.numberOne;
    parseInt.numberTwo;

    if(operator == "*"){
        return numberOne * numberTwo;
    } else if(operator == "/"){
        return numberOne / numberTwo;
    } else if(operator == "+"){
        return numberOne + numberTwo;
    } else if(operator == "-"){
        return numberOne - numberTwo;
    } else {
        return "something went wrong";
    }
}