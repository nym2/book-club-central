// src/pages/Books.jsx
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { getBooks } from '../Api';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData); // Fetch books from the API and set the state
      } catch (error) {
        console.error('Failed to load books:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures this runs once on page load

  // Function to handle deletion of a book by removing it from state
  const handleDelete = (deletedBookId) => {
    setBooks(books.filter((book) => book.id !== deletedBookId)); // Remove book from state
  };

  return (
    <div>
      <h1>All Books</h1>
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
};

export default Books;
