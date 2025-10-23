import { useState } from "react";
import DiscoverButton from "./components/DiscoverButton";
import BookDisplay from "./components/BookDisplay/BookDisplay";
import BanList from "./components/BanList";
import HistoryDisplay from "./components/HistoryDisplay";
import "./App.css";



const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&printType=books&maxResults=20';

export default function App() {
  const [currentBook, setCurrentBook] = useState(null);
  const [bookHistory, setBookHistory] = useState([]);
  const [banList, setBanList] = useState({ authors: [], categories: [] });
  const [loading, setLoading] = useState(false);

  async function fetchRandomBook() {
    setLoading(true);
    try {
      const response = await fetch(GOOGLE_BOOKS_API);
      const data = await response.json();

    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      throw new Error("No books found from the API.");
    }
      let tries = 0;
      let selected = null;

      while (tries < 20) {
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const book = data.items[randomIndex];
        const info = book.volumeInfo;

        if (!info || !info.title || !info.authors || !info.imageLinks) {
          tries++;
          continue;
        }

        const author = info.authors[0];
        const category = (info.categories && info.categories[0]) || "Uncategorized";

        if (
          banList.authors.includes(author) ||
          banList.categories.includes(category)
        ) {
          tries++;
          continue;
        }

        selected = {
          title: info.title,
          author,
          category,
          image: info.imageLinks.thumbnail,
        };
        break;
      }

      if (selected) {
        setCurrentBook(selected);
        setBookHistory((prevHistory) => [...prevHistory, selected]);
      } else {
        const confirmReset = window.confirm("No book matched your filters. Reset ban list?");
        if (confirmReset) {
          setBanList({ authors: [], categories: [] });
        }
      }
    } catch (err) {
      alert("Error fetching books: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  function addToBanList(type, value) {
    setBanList((prev) => {
      if (prev[type].includes(value)) return prev;
      return { ...prev, [type]: [...prev[type], value] };
    });
    setCurrentBook(null);
  }

  function removeFromBanList(type, value) {
    setBanList((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  }


return (
  <div className="app-container">
    <h1>Book Discover</h1>

    <p> Discover books from the wildest fiction genres! 
        Click "Discover" to find a new book. If you don't
        like the author or category, ban them to avoid 
        seeing them again. Happy discovering! 
    </p>

    <DiscoverButton onClick={fetchRandomBook} loading={loading} />
    
      
    <div className="main-content">
      {/* Left: History */}
      <div className="left-column">
        {bookHistory.length > 0 && (
          <>
            <button className="clear-history-btn" onClick={() => setBookHistory([])}>
              Clear History
            </button>
            <HistoryDisplay history={bookHistory} />
          </>
        )}
      </div>

      {/* Center: Current Book */}
      <div className="center-column">
        {currentBook && (
          <BookDisplay
            book={currentBook}
            onBanAuthor={() => addToBanList('authors', currentBook.author)}
            onBanCategory={() => addToBanList('categories', currentBook.category)}
          />
        )}
      </div>

      {/* Right: Ban List */}
      <div className="right-column">
        <BanList banList={banList} onRemoveBan={removeFromBanList} />
      </div>
    </div>
  </div>
);

}

