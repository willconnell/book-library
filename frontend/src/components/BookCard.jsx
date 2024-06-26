import { Link } from "react-router-dom";
import { deleteBook, getBooks } from "../api/books";
import styles from "./BookCard.module.css";
import Button from "./Button";
import useStore from "../store/store";

function BookCard({ book }) {
  const { setBooks, setErrorMessage } = useStore();

  function onDelete() {
    const shouldDelete = confirm(
      "Are you sure you want to delete " + book.title + "?"
    );
    if (shouldDelete) {
      deleteBook(book.id)
        .then(() => {
          getBooks().then((books) => setBooks(books));
        })
        .catch((e) => {
          console.error(e);
          setErrorMessage(`There was an issue deleting book ${book.title}`);
        });
    }
  }

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookData}>
        <h3>{book.title}</h3>
        <div>by {book.author}</div>
        <div>{book.year_published}</div>
        <div>{book.genre}</div>
      </div>
      <div className={styles.cardButtons}>
        <Button label="Delete" onClick={onDelete} />
        <Link to={`/edit/${book.id}`}>
          <Button label="Edit" />
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
