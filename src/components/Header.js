import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/Header.css';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <input
            type="text"
            placeholder="8000+ courses..."
            className='search-bar'
          />
          <i
            className="fas fa-search"
          
          />
        </div>
        <Link to="/" className="logo-link">
          <div className="logo">freeCodeCamp</div>
        </Link>
        <div className="menu-signin">
          <div className="menu">Menu</div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          ) : (
            <Link to="/signin" className="signin-link">
              <button className="signin-btn">Sign In</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
