import React from 'react';
import '../style/Home.css';
import appleLogo from '../Images/apple-logo.png';
import googleLogo from '../Images/google-logo.png';
import microsoftLogo from '../Images/microsoft-logo.png';
import spotifyLogo from '../Images/spotify-logo.png';
import amazonLogo from '../Images/amazon-logo.png';

const Home = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <h1>Learn to code — for free.</h1>
        <h2>Build projects.</h2>
        <h2>Earn certifications.</h2>
        <p>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
        <div className="companies">
          <img src={appleLogo} alt="Apple" />
          <img src={googleLogo} alt="Google" />
          <img src={microsoftLogo} alt="Microsoft" />
          <img src={spotifyLogo} alt="Spotify" />
          <img src={amazonLogo} alt="Amazon" />
        </div>
        <button className="cta-btn" onClick={() => window.location.href='/signin'}>
          Get started (it's free)
        </button>
      </main>
    </div>
  );
};

export default Home;
