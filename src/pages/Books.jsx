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
        setBooks(booksData); 
      } catch (error) {
        console.error('Failed to load books:', error);
      }
    };

    fetchBooks();
  }, []); 

  // Function to handle deletion of a book 
  const handleDelete = (deletedBookId) => {
    setBooks(books.filter((book) => book.id !== deletedBookId)); 
  };

  return (
    <div>
      <h1>All Books</h1>
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
};

export default Books;
