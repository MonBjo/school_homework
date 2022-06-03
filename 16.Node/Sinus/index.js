// https://github.com/F21-Backend-med-NodeJS/lektion-23-maj

// --- Endpoints ---
// Hämta alla produkter för att visa på en produktlistningssida
// Kunna lägga till en produkt i en varukorg
// Kunna ta bort en produkt i en varukorg
// Hämta alla produkter i en varukorg
// Kunna lägga en order med alla produkter från varukorgen

const express = require('express');
const app = express();
const PORT = 8000;
const fs = require('fs');

app.use(express.json());


// With middleware
app.use((request, response, next) => {
  console.log(`In middleware before route: ${request.url} and metod: ${request.method}`);
  next();
});

app.use('/api/allProducts', (request, response) => {
  const data = fs.readFile('products.json', 'utf8', (error, data) => {
    if (error) {
      console.log("error in middleware: ", error);
    }
    console.log("Data in store: ", data);
    return data;
  });
  response.json(data);
});


// Wrong url
app.use((request, response) => {
    const resObj = {
        message: 'No endpoint found'
    }
    response.status(404).json(resObj);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});