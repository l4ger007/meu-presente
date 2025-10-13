import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './ProposalPage.css';

const drawHeart = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-5, -15, -25, -15, -25, 0);
  ctx.bezierCurveTo(-25, 20, 0, 20, 0, 35);
  ctx.bezierCurveTo(0, 20, 25, 20, 25, 0);
  ctx.bezierCurveTo(25, -15, 5, -15, 0, 0);
  ctx.fill();
};

function ProposalPage() {
  const [position, setPosition] = useState({ top: '50%', left: '60%' });
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleNoHover = () => {
    const newTop = Math.floor(Math.random() * 85) + 'vh';
    const newLeft = Math.floor(Math.random() * 85) + 'vw';
    setPosition({ top: newTop, left: newLeft });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 12000);
    alert('Você me fez a pessoa mais feliz do mundo! ❤️');
  };

  return (
    <div className="proposal-container">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          gravity={0.1}
          colors={['#FF4081', '#E91E63', '#FFFFFF', '#F8BBD0']}
          drawShape={drawHeart}
          recycle={false}
        />
      )}

      <h1>A pergunta mais importante da minha vida...</h1>
      <p className="question-text">Quer casar comigo?</p>
      <div className="buttons-container">
        <button className="yes-button" onClick={handleYesClick}>
          Sim!
        </button>
        <button
          className="no-button"
          style={{ position: 'absolute', top: position.top, left: position.left }}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default ProposalPage;