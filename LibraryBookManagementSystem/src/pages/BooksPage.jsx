import BookCard from "../components/BookCard";

const books = [
    { title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", available: true },
    { title: "The Pragmatic Programmer", author: "David Thomas", category: "Software Engineering", available: true },
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", available: false },
    { title: "Design Patterns", author: "Erich Gamma", category: "Software Engineering", available: true },
    { title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database", available: false },
    { title: "Computer Networking", author: "James Kurose", category: "Networking", available: true },
];

function BooksPage() {
    return (
        <div className="books-page">
            <h2>Books Collection</h2>
            <div className="books-grid">
                {books.map((book, index) => (
                    <BookCard key={index} title={book.title} author={book.author}
                        category={book.category} available={book.available} />
                ))}
            </div>
        </div>
    );
}
export default BooksPage;
