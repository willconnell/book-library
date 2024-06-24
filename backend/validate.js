const { body, query, param, validationResult } = require("express-validator");

const booksValidator = {
  param_id: param("id")
    .exists()
    .withMessage("is missing")
    .isInt()
    .withMessage("must be an integer"),
  query_id: query("id").optional().isInt().withMessage("must be an integer"),
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
