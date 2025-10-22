import Image from './Image';
import Info from './Info';

export default function BookDisplay({ book, onBanAuthor, onBanCategory }) {
  return (
    <div className="book-display">
      <Image image={book.image} title={book.title} />
      <Info book={book} onBanAuthor={onBanAuthor} onBanCategory={onBanCategory} />
    </div>
  );
}
