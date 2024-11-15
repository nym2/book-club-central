const BASE_URL = 'https://json-server-template-exhn.onrender.com/books';

// Fetch all books from the json-server
export const getBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

// Fetch a single book by ID from the json-server
export const getBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    return null;
  }
};

// Add a new book to the json-server
export const addBook = async (newBook) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding a new book:', error);
    return null;
  }
};

// Update a book by ID on the json-server
export const updateBook = async (id, updatedBook) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    return null;
  }
};

// Delete a book by ID from the json-server
export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return true; // Return true if the deletion was successful
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    return false; // Return false if deletion failed
  }
};
