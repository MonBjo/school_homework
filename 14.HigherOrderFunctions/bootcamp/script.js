console.log("--- practice 1 ---");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let forNumbers = [];

for(let number of numbers) {
    if(!(number % 2)) {
        forNumbers.push(number);
    }
}

const filterNumbers = numbers.filter(number => {
    if(!(number % 2)) {
        return number;
    }
});

console.log("numbers: ", numbers);
console.log("forNumbers: ", forNumbers);
console.log("filterNumbers: ", filterNumbers);


console.log("--- practice 2 ---");

let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]

let booksByAuthor = books.filter(book => {
    if(book.author == "Jules Verne") {
        return book;
    }
});

console.log("books", books);
console.log("booksByAuthor", booksByAuthor);


console.log("--- practice 3 ---");

let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
]

let combinedAge = people.reduce((previousValue, currentPerson) => {
    return previousValue + currentPerson.age;
}, 0);

console.log("combinedAge", combinedAge);


console.log("--- practice 4 ---");

numbers = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

let highestNumber = numbers.reduce((previousValue, currentValue) => {
    if(currentValue > previousValue) {
        previousValue = currentValue;
    }
    return previousValue;
}, 0);

console.log("highestNumber: ", highestNumber);


console.log("--- practice 5 ---");

// Same books as before
console.log("books: ", books);

let bookTitles = books.map((book) => {
    return book.title;
});
console.log("bookTitles: ", bookTitles);


console.log("--- practice 6 ---");

// Same people as before
console.log("people: ", people);

let anyoneUnderForty = people.map((person) => {
    if(person.age >= 40) {
        return false;
    } else {
        return true;
    }
});
console.log("anyoneUnderForty: ", anyoneUnderForty);


console.log("--- practice 7 ---");


