// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './components/BookDetails';
import AddBookForm from './components/AddBookForm';
import EditBookForm from './components/EditBookForm';
import BookList from './components/BookList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBookForm />} />
        <Route path="/books/edit/:id" element={<EditBookForm />} /> {/* New Edit route */}
      </Routes>
    </Router>
  );
};

export default App;
