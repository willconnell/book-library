import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";
import Button from "./Button";

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
        <Button label="Delete" />
        <Link to={`/edit/${book.id}`}>
          <Button label="Edit" />
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
