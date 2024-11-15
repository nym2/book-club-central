// src/components/AddBookForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../Api';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    image: '' 
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(formData); // Add book to the backend
    navigate('/books'); // Redirect to the book list after adding
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add-book-form">
        <h2>Add a New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image path (e.g., /images/book.jpg)"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
