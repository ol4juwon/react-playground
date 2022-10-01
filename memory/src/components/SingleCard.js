import React from 'react';
import './SingleCard.css';

// eslint-disable-next-line react/prop-types
const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  // console.log('card', card);
  // eslint-disable-next-line react/prop-types
  const { src, flipped, matched } = card;
  return (
    <div className="card">
      {!matched && !flipped && (
        <img onClick={handleClick} className="back" src="img/cover.png" alt="" />
      )}
      {(matched || flipped) && <img className="front" src={src} alt="" />}
    </div>
  );
};

export default SingleCard;
