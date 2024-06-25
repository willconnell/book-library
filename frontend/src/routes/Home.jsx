import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import { Link } from "react-router-dom";
import useStore from "../store/store.js";
import BookGrid from "../components/BookGrid";
import Button from "../components/Button";
import styles from "./Home.module.css";

function Home() {
  const { books, setBooks } = useStore();

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
      <Link to="/create">
        <Button label="Add Book" className={styles.addButton} />
      </Link>
      <BookGrid books={books}></BookGrid>
    </>
  );
}

export default Home;
