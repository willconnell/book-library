import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import { Link } from "react-router-dom";
import useStore from "../store/store.js";
import BookGrid from "../components/BookGrid";
import Button from "../components/Button";
import styles from "./Home.module.css";

function Home() {
  const { books, setBooks, setErrorMessage } = useStore();

  async function fetchBooks() {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (e) {
      console.error(e);
      setErrorMessage("There was an issue fetching books");
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <h1 data-testid="title">Book Library</h1>
      <Link to="/create">
        <Button label="Add Book" className={styles.addButton} />
      </Link>
      <BookGrid books={books}></BookGrid>
    </>
  );
}

export default Home;
