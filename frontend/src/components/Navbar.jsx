import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReportClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/report');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">FOB Care</div>
      <div className="nav-img">
        <img src="./Assets/img-1.png" alt="FOB Care Logo" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/report" onClick={handleReportClick}>Report Issue</Link></li>
        <li><Link to="/suggestions" onClick={() => setIsMenuOpen(false)}>Suggestions</Link></li>
      </ul>
      <button 
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
