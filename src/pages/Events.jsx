import React from 'react';
import './Events.css';

function EventCard({ title, icon, children, accent = 'green' }) {
  return (
    <section className={`event-card accent-${accent}`}>
      <h2 className="event-card__title">
        <span className="event-card__icon">{icon}</span>
        {title}
      </h2>
      <div className="event-card__body">{children}</div>
    </section>
  );
}

function PrizeRow({ place, reward, notes }) {
  return (
    <div className="prize-row">
      <div className="prize-row__place">{place}</div>
      <div className="prize-row__reward">{reward}</div>
      <div className="prize-row__notes">{notes}</div>
    </div>
  );
}

export default function Events() {
  return (
    <div className="events">
      <header className="events__header">
        <h1>🎯 Ивенты сервера</h1>
        <p className="events__subtitle">
          Актуальные активности, призы и регламент участия на сервере «Эпоха выживания».
        </p>
      </header>

      {/* Призовой медальный дроп */}
      <EventCard title="Призовой медальный дроп" icon="🏆" accent="gold">
        <ul className="list">
          <li>
            <b>Призовой фонд:</b> 30$ базовый.
          </li>
          <li>
            <b>Строго:</b> на точке медального дропа допускается только <b>1 соло игрок</b>. За 1+ игроков (Дуо) — бан немедленно.
          </li>
          <li>
            <b>Условия засчёта медального дропа:</b> медаль хранить в основе и только в  <b>шкафу</b>, не отплывать от <b>берега</b> не находиться в <b>ТЗ</b>.
            При несоблюдении условий Медального дропа <b>не засчитывается</b> и <b> перебрасывается</b>.
          </li>
          <li>
            <b>Анти-эксплойт:</b> запрещены попытки обхода условий (скрытые тиммейты, «случайная помощь», мультиакки и т.п.).
          </li>
        </ul>
      </EventCard>

      {/* Призовой Первый дроп */}
      <EventCard title="Призовой первый дроп на сервере 10$" icon="🏆" accent="gold">
        <ul className="list">
          
          <li>
            <b>Строго:</b> на точке дропа допускается только <b>1 соло игрок</b>. За 1+ игроков (Дуо) — бан немедленно.
          </li>
          <li>
            <b>Условия засчёта первого дропа:</b> киба не меньше 2×2; 1 квадрат закатан в <b>металл</b>, остальное — в <b>камень</b>.
            При несоблюдении условий первый призовой дроп <b>не засчитывается</b> и <b>перебрасывается</b>.
          </li>
          <li>
            <b>Анти-эксплойт:</b> запрещены попытки обхода условий (скрытые тиммейты, «случайная помощь», мультиакки и т.п.).
          </li>
        </ul>
      </EventCard>

      {/* Регламент участия */}
      <EventCard title="Регламент участия для первого дропа на сервере" icon="📜" accent="blue">
        <ol className="steps">
          <li>
            <b>Анонс:</b>
            <div>Админ публикует окно ивента в канале Telegram Эпоха выживания.</div>
          </li>
          <li>
            <b>Подготовка для призового первого дропа на 10$:</b>
            <div>Проверьте, что база соответствует требованиям для первого дропа (2×2, 1 квадрат металл, остальное камень).</div>
          </li>
          <li>
            <b>Проведение:</b>
            <div>На точке — только соло игроки. Нарушение — бан и дисквалификация.</div>
          </li>
          <li>
            <b>Фиксация результата:</b>
            <div>Победитель делает скрин/видео лута и локации, присылает админу в ЛС.</div>
          </li>
          <li>
            <b>Выплата:</b>
            <div>После проверки — перевод приза. Админ может запросить дополнительные доказательства.</div>
          </li>
        </ol>
      </EventCard>

      {/* Расписание (пример) */}
      <EventCard title="Расписание" icon="⏰" accent="purple">
        <div className="schedule">
          <div className="schedule__row">
            <div className="dot dot--gold" />
            <div>
              <b>Медальный дроп:</b> окна объявляются заранее в Telegram - Эпоха выживания.
              <div className="muted">Следи за анонсами — время за 24 часа до конца вайпа.</div>
            </div>
          </div>
          <div className="schedule__row">
            <div className="dot dot--blue" />
            <div>
              <b>PvP‑активности:</b> внезапные мини‑состязания от администрации.
              <div className="muted">Локальные призы и редкие ресурсы.</div>
            </div>
          </div>
        </div>
      </EventCard>

      {/* Призы */}
      <EventCard title="Призы и начисления" icon="💳" accent="green">
        <div className="prize-table">
          <div className="prize-row prize-row--head">
            <div className="prize-row__place">Место</div>
            <div className="prize-row__reward">Награда</div>
            <div className="prize-row__notes">Примечание</div>
          </div>
          <PrizeRow place="🥇 1-е" reward="30$" notes="Базовый приз" />
          <PrizeRow place="⚡ Первый дроп" reward="+10$" notes="Только при соблюдении условий базы и правилами сервера" />
        </div>
        <p className="muted note">
          Призы перечисляются после верификации доказательств. При нарушениях — дисквалификация без выплаты.
        </p>
      </EventCard>

      {/* Частые вопросы */}
      <EventCard title="FAQ" icon="❓" accent="gray">
        <div className="faq">
          <details>
            <summary>Можно ли участвовать, если база ещё не 2×2?</summary>
            <div>Да, но первый призовой дроп не засчитается до выполнения условий базы (2×2, 1 металл, остальное камень).</div>
          </details>
          <details>
            <summary>Что считается нарушением «1 игрок на точке»?</summary>
            <div>Любое присутствие второго игрока на точке дропа в момент ивента — союзник, разведчик, страхующий и т.д.</div>
          </details>
          <details>
            <summary>Какие виды техники запрещены в ивентах?</summary>
            <div>Питомцы, дроны, мехи, танки, РСЗО; все виды транспорта кроме велосипеда, планера и Эфеса.</div>
          </details>
          <details>
            <summary>Как подтвердить победу?</summary>
            <div>Скриншоты/видео лута и локации, по запросу — запись NTW винтовки с дропа. Прислать админу в ЛС.</div>
          </details>
        </div>
      </EventCard>
    </div>
  );
}

