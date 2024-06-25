function BookCard({ book }) {
  return (
    <div>
      <div>
        <h3>{book.title}</h3>
        by {book.author} <br />
        {book.year_published} <br />
        {book.genre} <br />
      </div>
      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
}

export default BookCard;
