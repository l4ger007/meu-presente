import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

function HomePage() {
  const navigate = useNavigate();

  const handleSurpriseClick = () => {
    // Navega para a página da surpresa quando o botão é clicado
    navigate('/surpresa');
  };

  return (
    <div className="home-container">
      <h1>Um presente para você ❤️</h1>
      <p>Um presente para a pessoa que ilumina meus dias.</p>
      <button onClick={handleSurpriseClick}>
        Clique aqui para começar
      </button>
    </div>
  );
}

export default HomePage;