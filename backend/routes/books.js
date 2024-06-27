const express = require("express");
const router = express.Router();
const v = require("../validate").booksValidator;
const validationCheck = require("../validate").validationCheck;
const { booksController } = require("../controllers/booksController");

router.get("/", v.query_id, validationCheck, booksController.getBooks);

router.post(
  "/",
  v.body_title,
  v.body_author,
  v.body_year_published,
  v.body_genre,
  validationCheck,
  booksController.createBook
);

router.put(
  "/",
  v.body_id,
  v.body_title,
  v.body_author,
  v.body_year_published,
  v.body_genre,
  validationCheck,
  booksController.updateBook
);

router.delete("/:id", v.param_id, validationCheck, booksController.deleteBook);

module.exports = router;
