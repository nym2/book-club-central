// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import { getBooks } from '../Api';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      // Show only the first 3 books as a preview
      setBooks(data.slice(0, 3));
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Welcome to Book Club Central</h1>
      <p>Explore and share your favorite books!</p>
      <h2>Featured Books</h2>
      <BookList books={books} />
    </div>
  );
};

export default Home;
