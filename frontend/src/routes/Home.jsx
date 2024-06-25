import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import BookGrid from "../components/BookGrid";
import Button from "../components/Button";
import styles from "./Home.module.css";

function Home() {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const books = await getBooks();
    setBooks(books);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <h1>Book Library</h1>
      <Button
        label="Add Book"
        className={styles.addButton}
        onClick={() => navigate("/create")}
      />
      <BookGrid books={books}></BookGrid>
    </>
  );
}

export default Home;
