import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/Signin';
import Courses from './components/Courses';
import Header from './components/Header';
import axios from 'axios';

axios.defaults.baseURL = "https://mern-vercel-backend-1.onrender.com";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={isAuthenticated ? <Navigate to="/courses" /> : <SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/courses" element={isAuthenticated ? <Courses /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;
