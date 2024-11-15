// src/pages/Books.jsx
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { getBooks } from '../Api';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

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

  // Function to handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter books based on the search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>All Books</h1>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          marginBottom: '20px',
          padding: '10px',
          width: '300px',
          fontSize: '16px'
        }}
      />

      {/* Pass filteredBooks to the BookList component */}
      <BookList books={filteredBooks} onDelete={handleDelete} />
    </div>
  );
};

export default Books;
