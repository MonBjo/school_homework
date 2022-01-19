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
