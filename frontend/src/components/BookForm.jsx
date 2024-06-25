import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateBook, createBook, getBooks } from "../api/books";
import useStore from "../store/store.js";
import Button from "./Button";
import Input from "./Input";
import styles from "./BookForm.module.css";

export default function BookForm({ mode }) {
  const { bookId } = useParams();
  const { books } = useStore();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (mode.toLowerCase() === "edit") fetchBook();
  }, []);

  // Grab book from store; if not in store, fetch from API
  async function fetchBook() {
    let book = books.find((b) => b.id === parseInt(bookId));
    if (book === undefined) book = await getBooks(bookId);
    setTitle(book.title);
    setAuthor(book.author);
    setYearPublished(book.year_published);
    setGenre(book.genre);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateInputs()) {
      switch (mode.toLowerCase()) {
        case "edit":
          await updateBook({
            id: bookId,
            title: title,
            author: author,
            year_published: yearPublished,
            genre: genre,
          });
          break;
        case "create":
          await createBook({
            title: title,
            author: author,
            year_published: yearPublished,
            genre: genre,
          });
          break;
      }

      navigate("/");
    }
  }

  function validateInputs() {
    if (!title.length) setError("Title is required");
    else if (!author.length) setError("Author is required");
    else if (!String(yearPublished).length) setError("Year Published required");
    else if (!genre.length) setError("Genre is required");
    else {
      setError("");
      return true;
    }
    return false;
  }

  return (
    <>
      <h1>{mode.toLowerCase() === "edit" ? "Edit" : "Add"} Book</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <Input
            type="text"
            name="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            name="Author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            type="number"
            name="Year Published"
            placeholder="Year Published"
            value={yearPublished}
            onChange={(e) => setYearPublished(e.target.value)}
          />
          <Input
            type="text"
            name="Genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className={styles.errorText}>{error}</div>
        <div className={styles.actionButtons}>
          <Link to="/">
            <Button type="button" label="Cancel" />
          </Link>
          <Button type="submit" label="Save" />
        </div>
      </form>
    </>
  );
}
