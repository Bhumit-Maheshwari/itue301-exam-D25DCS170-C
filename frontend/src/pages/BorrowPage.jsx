import { useState } from "react";

function BorrowPage() {
    const [memberName, setMemberName] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [borrowDate, setBorrowDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    return (
        <div className="borrow-page">
            <h2>Borrow a Book</h2>

            <form className="borrow-form">
                <label>
                    Member Name
                    <input
                        type="text"
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                        placeholder="Enter member name"
                    />
                </label>

                <label>
                    Book Title
                    <input
                        type="text"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                        placeholder="Enter book title"
                    />
                </label>

                <label>
                    Borrow Date
                    <input
                        type="date"
                        value={borrowDate}
                        onChange={(e) => setBorrowDate(e.target.value)}
                    />
                </label>

                <label>
                    Return Date
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                </label>
            </form>

            <div className="form-preview">
                <h3>Borrowing Summary</h3>
                <p>Member: {memberName || "—"}</p>
                <p>Book: {bookTitle || "—"}</p>
                <p>Borrow Date: {borrowDate || "—"}</p>
                <p>Return Date: {returnDate || "—"}</p>
            </div>
        </div>
    );
}
export default BorrowPage;
