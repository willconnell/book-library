const express = require("express");
const router = express.Router();
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

// GET books
router.get("/", (req, res) => {
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

// POST new book
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

module.exports = router;
