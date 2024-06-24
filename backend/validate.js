const { body, query, param, validationResult } = require("express-validator");

const booksValidator = {
  param_id: param("id")
    .exists()
    .withMessage("is missing")
    .isInt()
    .withMessage("must be an integer"),
  query_id: query("id").optional().isInt().withMessage("must be an integer"),
  body_id: body("id")
    .exists()
    .withMessage("is missing")
    .isInt()
    .withMessage("must be an integer"),
  body_title: body("title")
    .exists()
    .withMessage("is missing")
    .isAscii()
    .withMessage("must be ASCII"),
  body_author: body("author")
    .exists()
    .withMessage("is missing")
    .isAscii()
    .withMessage("must be ASCII"),
  body_year_published: body("year_published")
    .exists()
    .withMessage("is missing")
    .isInt({ min: 0 })
    .withMessage("must be an integer"),
  body_genre: body("genre")
    .exists()
    .withMessage("is missing")
    .isAscii()
    .withMessage("must be ASCII"),
};

// middleware to enforce express validator rules
const validationCheck = function (req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).send({ errors: result.array() });
  } else {
    next();
  }
};

module.exports = { booksValidator, validationCheck };
