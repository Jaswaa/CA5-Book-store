import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/Registerationform";
import BookList from './Components/BookList';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/register" element={<RegistrationForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
