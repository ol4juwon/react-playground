import React from 'react';
import './SingleCard.css';

// eslint-disable-next-line react/prop-types
const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    console.log('clicked', card.src);
    handleChoice(card);
  };

  // eslint-disable-next-line react/prop-types
  const { src, flipped } = card;
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={src} alt="" />
        <img onClick={handleClick} className="back" src="img/cover.png" alt="" />
      </div>
    </div>
  );
};

export default SingleCard;
