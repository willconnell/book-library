import BookCard from "./BookCard";

function BookGrid(props) {
  return (
    <div>
      {props.books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;
