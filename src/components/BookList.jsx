// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Books List</h2>
      <div className="book-list">
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          books.map((book) => (
            <BookCard key={book.id} book={book} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default BookList;
