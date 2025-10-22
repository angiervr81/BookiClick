export default function Info({ book, onBanAuthor, onBanCategory }) {
  return (
    <div className="book-info">
      <p><strong>Title:</strong> {book.title}</p>
      <p>
        <strong>Author:</strong>{' '}
        <span className="clickable" onClick={onBanAuthor}>
          {book.author}
        </span>
      </p>
      <p>
        <strong>Category:</strong>{' '}
        <span className="clickable" onClick={onBanCategory}>
          {book.category}
        </span>
      </p>
    </div>
  );
}
