import BookCard from "./BookCard";
import styles from "./BookGrid.module.css";

function BookGrid(props) {
  return (
    <div data-testid="book-grid" className={styles.bookGrid}>
      {props.books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;
