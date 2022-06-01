// https://github.com/F21-Backend-med-NodeJS/lektion-24-maj

// I dagens kodexempel (login-page-nedb-example) så lägg två API-endpoints där den ena är för att hämta en användares e-postadress. Det är enbart e-posten som ska returneras till frontend.

// Den andra endpoint:en ska ta bort ett användarkonto.

// (https://github.com/F21-Backend-med-NodeJS/lektion-30-maj)

const express = require('express');
const app = express();
const PORT = 8000;
