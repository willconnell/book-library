import styles from "./BookCard.module.css";

function BookCard({ book }) {
  return (
    <div className={styles.bookCard}>
      <div className={styles.bookData}>
        <h3>{book.title}</h3>
        by {book.author} <br />
        {book.year_published} <br />
        {book.genre} <br />
      </div>
      <div className={styles.cardButtons}>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
}

export default BookCard;
