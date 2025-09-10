import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      {/* Фон */}
      <div className="background-overlay"></div>

      {/* Герой-блок */}
      <div className="home-hero fade-in">
        <h1>🛡 Эпоха выживания</h1>
        <p className="subtitle">
          Соло PvP сервер с уникальными правилами, честной игрой и ценными призами.
        </p>
        <a
          href="https://t.me/eraSurvivalLios"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          💬 Присоединиться в Telegram
        </a>
      </div>

      {/* О проекте */}
      <div className="home-description slide-up">
        <h2>О проекте</h2>
        <p>
          «Эпоха выживания» — это место, где каждый игрок сам за себя.  
          Мы ценим честную игру, продуманный баланс и активное сообщество.  
          Участвуй в ивентах, побеждай в PvP и получай реальные призы.
        </p>
      </div>

      {/* Ключевые правила */}
      <div className="home-rules slide-up">
        <h2>📜 Основные правила</h2>
        <div className="rules-grid">
          <div className="rule-card">🚫 Питомцы, дроны, мехи, танки, РСЗО — запрещены</div>
          <div className="rule-card">🚗 Авто с оружием — запрещены (кроме шипов)</div>
          <div className="rule-card">🏎 Транспорт быстрее «Ветра» — запрещён</div>
          <div className="rule-card">⚔ На соло сервере 1+ — запрещено </div>
        </div>
        <Link to="/rules" className="rules-button">
          Читать все правила →
        </Link>
      </div>
    </div>
  );
}
