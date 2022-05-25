const { router, Router } = require('express');
const router = Router();

let todos = [
  { todo: 'Köp kaffe', id: 0, done: false },
  { todo: 'Köp kaka', id: 1, done: false },
  { todo: 'Brygg kaffe', id: 2, done: false },
  { todo: 'Drick kaffe', id: 3, done: false }
];

