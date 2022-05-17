const express = require('express');
const app = express(); //creates express application
const port = 8000;

app.use(express.json());

const user = [{
  email: "john.doe@example.com",
  password: "qwerty123"
}];

app.get('/', (req, res) => {
  res.send('Snel helst');
});

app.get('/api/login', (req, res) => {
  res.send('login?');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});