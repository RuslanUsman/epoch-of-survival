import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    <Footer /> {/* Подвал всегда внизу */}
  </BrowserRouter>
);

