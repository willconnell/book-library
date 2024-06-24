const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const booksRouter = require("./routes/books");

// Allow requests from http://localhost:3173
app.use(
  cors({
    origin: "http://127.0.0.1:3173",
    origin: "http://localhost:3173",
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
