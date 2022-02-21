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
    console.log("book.author", book.author);
    if(book.author == "Jules Verne") {
        return book;
    }
});

console.log("books", books);
console.log("booksByAuthor", booksByAuthor);


console.log("--- practice 3 ---");
console.log("--- practice 4 ---");
console.log("--- practice 5 ---");
console.log("--- practice 6 ---");
console.log("--- practice 7 ---");
