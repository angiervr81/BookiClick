export default function BanList({ banList, onRemoveBan }) {
  return (
    <div className="banlist-container">
      <h3>Ban List</h3>

      <div>
        <strong>Categories:</strong>{" "}
        {banList.categories.length === 0
          ? "None"
          : banList.categories.map((category) => (
              <span
                key={category}
                className="banlist-item"
                onClick={() => onRemoveBan("categories", category)} // 🔧 fixed typo "categroies"
                title="Click to remove ban"
              >
                {category} ❌
              </span>
            ))}
      </div>

      <div>
        <strong>Authors:</strong>{" "}
        {banList.authors.length === 0
          ? "None"
          : banList.authors.map((author) => (
              <span
                key={author}
                className="banlist-item"
                onClick={() => onRemoveBan("authors", author)} // 🔧 fixed "tickers" → "authors"
                title="Click to remove ban"
              >
                {author} ❌
              </span>
            ))}
      </div>
    </div>
  );
}
