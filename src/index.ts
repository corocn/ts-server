import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import { Model } from 'objection';
import Knex from 'knex';
import Book from './models/Book';

const knexConfig = require("../knexfile"); // eslint-disable-line

// Express
const port = 3010;
const app = express();
app.use(bodyParser.json());

// Database
const knex = Knex(knexConfig.development);
Model.knex(knex);

if (app.get('env') == 'development') {
  app.use(morgan('dev', { immediate: true }));
}

app.get('/', async (req, res) => {
  res.status(200);
  res.json({ status: 'OK' });
});

// curl -X GET http://localhost:3010/books
app.get('/books', async (req, res) => {
  const books = await Book.query();
  const names = books.map(book => `${book.id}:${book.name}`);
  res.status(200);
  res.json({ books: names });  
});

// curl -X POST http://localhost:3010/books -H "Accept: application/json" -H "Content-type: application/json" -d '{ "name" : "Harry Potter" }'
app.post('/books', async (req, res) => {
  const name: string = req.body.name;
  const book = await Book.query().insertGraph({ name: name });
  res.status(200);
  res.json({ message: 'ID:' + book.id });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

export default app;
