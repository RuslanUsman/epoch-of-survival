import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-logo">🛡 Эпоха выживания</div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>🏠 Главная</Link>
        <Link to="/rules" onClick={() => setIsOpen(false)}>📜 Правила</Link>
        <Link to="/events" onClick={() => setIsOpen(false)}>🎯 Ивенты</Link>
        <Link to="/contacts" onClick={() => setIsOpen(false)}>📞 Контакты</Link>
      </nav>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}
