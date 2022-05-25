const express = require('express');
const app = express(); //creates express application
const port = 8000;

app.use(express.json());

const users = [
  {
    username: "lean",
    email: "lena.andersson@example.com",
    password: "qwerty123"
  }, 
  {
    username: "kibe",
    email: "kim.bergquist@example.com",
    password: "qwerty123"
  }, 
  {
    username: "jodo",
    email: "john.doe@example.com",
    password: "qwerty123"
  }    
];

app.get('/', (req, res) => {
  res.send('Snel helst');
});

app.get('/api/login', (req, res) => {
  let login = {
    username: "kibe",
    email: "kim.bergquist@example.com",
    password: "qwerty123"
  };
  let filterUsers = users.filter((user) => {
    console.log(user.username == login.username);
    console.log(user.email == login.email);
    return user;
  });
  
  res.send('trying to log in');
});

app.get('/api/signup', (req, res) => {
  res.send('sign up?');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});