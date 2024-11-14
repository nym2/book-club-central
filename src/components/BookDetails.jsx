// src/components/BookDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookById } from '../Api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBookById(id);
      setBook(data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <h4>by {book.author}</h4>
      <p><strong>Genre:</strong> {book.genre}</p>
      <Link to="/books">Back to Books</Link>
    </div>
  );
};

export default BookDetails;
