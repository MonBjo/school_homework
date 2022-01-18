const book = {
    title: "Pony in London",
    author: "Bella Yelander",
    published: "2001",
    numPages: "620"
};
console.log(book);

let bookshelf = [book,
    {
        "title": "Båtäventyr på västkusten",
        "author": "Pelle Påhittad",
        "published": "1932",
        "numPages": "319"
    },
    {
        "title": "Rosors pigment",
        "author": "Kim Andersson",
        "published": "1823",
        "numPages": "834"
    }
];
console.log(bookshelf);

function findBook(title) {
    // for(let i = 0; i < bookshelf.length; i++) {
    for(let book of bookshelf) {
        if(book.title == title) {
            return book;
        }
    }
    return null;
}

console.log(findBook("Båtäventyr på västkusten"));