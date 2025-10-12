import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SurprisePage from './components/SurprisePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Rota para a página da surpresa */}
        <Route path="/surpresa" element={<SurprisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;