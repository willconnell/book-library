const { body, query, param } = require("express-validator");

const booksValidator = {
  query_id: query("id").optional().isInt().withMessage("must be an integer"),
};

module.exports = { booksValidator };
