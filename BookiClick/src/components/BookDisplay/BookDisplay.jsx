import Image from './Image';
import Info from './Info';

export default function BookDisplay({ book, onBanCategory, onBanAuthor }) {
  if (!book) return null;

  return (
    <div className="book-display">
      <Image thumbnail={book.thumbnail} title={book.title} />
      <Info book={book} onBanCategory={onBanCategory} onBanAuthor={onBanAuthor} />
    </div>
  );
}

