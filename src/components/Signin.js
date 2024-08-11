import React, { useState } from 'react';
import axios from 'axios';
import '../style/Signin.css'


const SignIn = ({ setIsAuthenticated }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      if (response.data.error) {
        setError(response.data.error);
      } else {
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
        window.location.href = '/courses';
      }
    } catch (err) {
      console.error('There was an error registering!', err);
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="signin-btn">Sign In</button>
      </form>
      <div className="google-signin">
        <button className="google-btn">Sign in with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
