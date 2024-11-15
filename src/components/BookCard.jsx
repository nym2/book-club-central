// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteBook } from '../Api'; 

const BookCard = ({ book, onDelete }) => { 
  const handleDelete = async () => {
    const isDeleted = await deleteBook(book.id); 
    if (isDeleted) {
      alert('Book deleted successfully');
      onDelete(book.id);  
    } else {
      alert('Failed to delete the book');
    }
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>Genre: {book.genre}</p>
      <Link to={`/books/${book.id}`}>More Details</Link>
      <Link to={`/books/edit/${book.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookCard;
