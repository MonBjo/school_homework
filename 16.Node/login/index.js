// https://github.com/F21-Backend-med-NodeJS/lektion-17-maj


// Skapa två endpoints i din Node.JS - fil som heter /api/login och /api/signup.
// /api/login - tar användarnamn och lösenord som har skickats in och kollar om det finns samt är samma som i databasen. Endpoint:en ska returnera ett objekt med egenskapen success som antingen är true eller false till klienten.
// /api/signup - tar emot användarnamn, lösenord, och e-post och kontrollerar så att användarnamn och e-post inte redan finns. Endpoint:en ska returnera ett objekt med egenskaparna: success, usernameExists och emailExists. Alla egenskapar är antingen true eller false.
// Allt kan sparas i variabel på din server.

const { request } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (request, response) => {
  response.send(`ohai`);
});

app.get('/api/login', (request, response) => {

});

app.get('/api/signup', (request, response) => {
  
});

app.listen(PORT, () => {
  console.log(`Servern är startad på port: ${PORT}`);
});