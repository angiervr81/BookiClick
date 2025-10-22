// components/HistoryDisplay.jsx
import BookDisplay from './BookDisplay/BookDisplay';

export default function HistoryDisplay({ history }) {
  return (
    <div className="history-section">
      <h3>Previously Seen Books</h3>
      <div className="history-grid">
        {history.map((book, index) => (
          <BookDisplay key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
