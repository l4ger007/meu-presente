import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SurprisePage from './components/SurprisePage';
import ProposalPage from './components/ProposalPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Rota para a página da surpresa */}
        <Route path="/surpresa" element={<SurprisePage />} />
        {/* Rota para a página de pedido */}
        <Route path="/pedido" element={<ProposalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;