import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

function BooksPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/v1/books");
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                const result = await response.json();
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="books-page">
                <h2>Books Collection</h2>
                <p className="loading-message">Loading books...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="books-page">
                <h2>Books Collection</h2>
                <p className="error-message">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="books-page">
            <h2>Books Collection</h2>
            <div className="books-grid">
                {data.map((book) => (
                    <BookCard
                        key={book._id}
                        title={book.title}
                        author={book.author}
                        category={book.category}
                        available={book.available}
                    />
                ))}
            </div>
        </div>
    );
}
export default BooksPage;
