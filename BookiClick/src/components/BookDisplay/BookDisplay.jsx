import Image from "./BookDisplay/Image";
import Info from "./BookDisplay/Info";

export default function BookDisplay({ book, onBanCategory, onBanAuthor }) {
  if (!book) return null;

  return (
    <div className="book-display">
      <Image thumbnail={book.thumbnail} title={book.title} />
      <Info book={book} onBanCategory={onBanCategory} onBanAuthor={onBanAuthor} />
    </div>
  );
}

