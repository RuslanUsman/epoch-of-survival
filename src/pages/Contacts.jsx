import React from 'react';
import './Contacts.css';

function ContactCard({ name, role, avatar, telegramLink, playerId }) {
  const copyId = () => {
    navigator.clipboard.writeText(playerId);
    alert(`ID ${playerId} скопирован в буфер обмена`);
  };

  return (
    <div className="contact-card">
      <img src={avatar} alt={name} className="contact-avatar" />
      <h2>{name}</h2>
      <p className="role">{role}</p>

      <div className="contact-actions">
        <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="tg-button">
          💬 Написать в Telegram
        </a>
      </div>

      <div className="id-block">
        <span className="player-id">{playerId}</span>
        <button onClick={copyId} className="copy-btn">📋</button>
      </div>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="contacts-page">
      <h1>📞 Контакты</h1>

      <div className="contacts-grid">
        {/* Создатель */}
        <ContactCard
          name="Dragon"
          role="Создатель проекта"
          avatar="/images/dragon.jpg"
          telegramLink="https://t.me/dragon010101"
          playerId="24234095956"
        />

        {/* Админы */}
        <ContactCard
          name="fisHed"
          role="Администратор"
          avatar="/images/adm1.jpg"
          telegramLink="https://t.me/alexhead33"
          playerId="41800602964"
        />
        <ContactCard
          name="Funtik"
          role="Администратор"
          avatar="/images/adm2.jpg"
          telegramLink="https://t.me/funtik2000_u"
          playerId="51693143380"
        />
        <ContactCard
          name="口几亼"
          role="Администратор"
          avatar="/images/adm3.jpg"
          telegramLink="https://t.me/ivanbalvan123"
          playerId="110141687124"
        />
      </div>
    </div>
  );
}

