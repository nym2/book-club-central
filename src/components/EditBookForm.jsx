// src/components/EditBookForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook } from '../Api'; // Import the functions

const EditBookForm = () => {
  const { id } = useParams(); // Get the book ID from URL params
  const navigate = useNavigate(); // For navigation after successful update
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    image: ''
  });

  // Fetch the book details when the component mounts
  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBookById(id); // Get the book by ID
      if (book) {
        setFormData(book); // Set the form data to the current book's details
      }
    };
    fetchBook();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to update the book
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook(id, formData); // Update the book on the backend
    navigate('/books'); // Redirect after updating
  };  

  return (
    <div className="form-container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBookForm;
