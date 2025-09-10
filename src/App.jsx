import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Events from './pages/Events';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}


