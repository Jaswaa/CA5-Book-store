import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
    let [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books.filter(book =>
      book.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    ));
    console.log(filteredBooks)
  }, [books, searchTerm]);

  return (
    <>
      <div className="header-row">
        <h1>Kalvium Books</h1>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>

      <div className='books'>
        {filteredBooks.map(book => (
          <div key={book.id} className='book'>
            <img src={book.imageLinks.thumbnail} alt={book.title} className='imm' />
            <p>{book.title}</p>
            <span>4.5⭐ Free</span>
          </div >
        ))}
      </div>
    </>
  );
};

export default BookList;
