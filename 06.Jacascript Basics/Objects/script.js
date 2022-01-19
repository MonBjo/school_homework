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


// letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}

console.log(letterFrequency("kalle"));

function letterFrequency(word) {
    word.toLowerCase();
    let letters = [];

    while (word != "") {
    }
    
    return letters;
}



console.log(filterByCountry("FR"));

function filterByCountry(country) {
    let usersFilteredByCountry = [];
    for(let i = 0; i < users.length; i++) {
        if(users[i].nat == country){
            usersFilteredByCountry.push(users[i]);
        }
    }
    return usersFilteredByCountry;
}


console.log(filterByGender("Female"));

// mr monsieur
// miss ms mrs mademoiselle madame

function filterByGender(gender) {
    let usersFilteredByGender = [];

    if(gender == "Male") {
        gender = ["mr", "monsieur"];
    } else if(gender == "Female"){
        gender = ["miss", "ms", "mrs", "mademoiselle", "madame"];
    } else {
        console.log(`please choose "Male" or "Female".`);
    }

    for(let i = 0; i < users.length; i++) {
        for(let j = 0; j < gender.length; j++) {
            if(users[i].title == gender[i]){
                usersFilteredByGender.push(users[i]);
                break;
            }
        }
    }
    return usersFilteredByGender;
}


console.log(filterEmailOnly());

function filterEmailOnly() {
    let usersFilterEmail = [];
    for(let i = 0; i < users.length; i++) {
        usersFilterEmail.push(users[i].email);
    }
    return usersFilterEmail;
}