import { useEffect, useState } from "react";
import BookGrid from "../components/BookGrid";
import { getBooks } from "../api/books";

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
      <BookGrid books={books}></BookGrid>
    </>
  );
}

export default Home;
