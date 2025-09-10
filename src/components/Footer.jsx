import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="project-name">🛡 Эпоха выживания</h3>
        <a
          href="https://t.me/eraSurvivalLios" 
          target="_blank"
          rel="noopener noreferrer"
          className="tg-main-btn"
        >
          💬 Перейти в Telegram
        </a>
      </div>
    </footer>
  );
}

