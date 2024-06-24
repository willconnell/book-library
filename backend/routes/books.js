const express = require("express");
const router = express.Router();
const v = require("../validate").booksValidator;
const validationCheck = require("../validate").validationCheck;
let books = [
  {
    id: 1,
    title: "All the Pretty Horses",
    author: "Cormac McCarthy",
    year_published: 1992,
    genre: "Western Fiction",
  },
  {
    id: 2,
    title: "Trust",
    author: "Hernan Diaz",
    year_published: 2022,
    genre: "Historical Fiction",
  },
  {
    id: 3,
    title: "Flash Boys",
    author: "Michael Lewis",
    year_published: 2014,
    genre: "Non-Fiction",
  },
  {
    id: 4,
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    year_published: 2022,
    genre: "Adventure Fiction",
  },
  {
    id: 5,
    title: "A Walk in the Woods",
    author: "Bill Bryson",
    year_published: 1998,
    genre: "Travel Literature",
  },
  {
    id: 6,
    title: "Pillars of the Earth",
    author: "Ken Follett",
    year_published: 1989,
    genre: "Historical Fiction",
  },
  {
    id: 7,
    title: "East of Eden",
    author: "John Steinbeck",
    year_published: 1952,
    genre: "Fiction",
  },
];

router.get("/", v.query_id, validationCheck, (req, res) => {
  const id = req.query.id != undefined ? parseInt(req.query.id) : undefined;
  if (id === undefined) res.send(books);

  const book = books.find((book) => book.id === id);

  if (!book) {
    const error = new Error("Book not found");
    error.status = 404;
    throw error;
  }

  res.send(book);
});

router.post("/", (req, res) => {
  const { title, author, year_published, genre } = req.body;
  let maxId = 0;
  books.forEach((b) => (maxId = Math.max(maxId, b.id)));
  const newBook = {
    id: maxId + 1,
    title: title,
    author: author,
    year_published: parseInt(year_published),
    genre: genre,
  };
  books.push(newBook);
  res.send(newBook);
});

router.put("/", (req, res) => {
  let bookFound = false;
  const { id, title, author, year_published, genre } = req.body;
  const updatedBook = {
    id: parseInt(id),
    title: title,
    author: author,
    year_published: parseInt(year_published),
    genre: genre,
  };

  books = books.map((book) => {
    if (book.id != id) return book;
    bookFound = true;
    return updatedBook;
  });

  if (!bookFound) {
    const error = new Error("Book not found");
    error.status = 404;
    throw error;
  }

  res.send(updatedBook);
});

router.delete("/:id", v.param_id, validationCheck, (req, res) => {
  if (!books.some((book) => book.id === parseInt(req.params.id))) {
    const error = new Error("Book not found");
    error.status = 404;
    throw error;
  }

  books = books.filter((book) => book.id != req.params.id);
  res.send(books);
});

module.exports = router;
