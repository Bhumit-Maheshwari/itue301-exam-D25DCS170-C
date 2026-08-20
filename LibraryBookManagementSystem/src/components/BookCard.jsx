// src/components/BookCard.jsx
function BookCard({ title, author, category, available }) {
    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Category: {category}</p>
            <span className={available ? "status-available" : "status-unavailable"}>
                {available ? "Available" : "Not Available"}
            </span>
        </div>
    );
}
export default BookCard;
