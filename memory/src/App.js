import './App.css';
import React, { useEffect } from 'react';
import SingleCard from './components/SingleCard';
const cardImg = [
  { src: 'img/helmet-1.png', matched: false, flipped: false },
  { src: 'img/sword-1.png', matched: false, flipped: false },
  { src: 'img/ring-1.png', matched: false, flipped: false },
  { src: 'img/scroll-1.png', matched: false, flipped: false },
  { src: 'img/shield-1.png', matched: false, flipped: false },
  { src: 'img/potion-1.png', matched: false, flipped: false }
];
function App() {
  const [cards, setCards] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState(null);
  const [choiceTwo, setChoiceTwo] = React.useState(null);
  //   const shuffle = () => {
  //     let cards = document.querySelectorAll('.card');
  //     cards.forEach((card) => {
  //       let randomPos = Math.floor(Math.random() * 12);
  //       card.style.order = randomPos;
  //     });
  //   };
  const shuffleCards = () => {
    const shuffledCard = [...cardImg, ...cardImg, ...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCard);
    setTurns(0);
  };
  const resetCard = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
  };
  const handleChoice = async (card) => {
    card.flipped = true;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    if (choiceOne !== null && choiceTwo !== null) {
      if (choiceOne?.src === choiceTwo?.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne?.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else if (choiceOne?.src !== choiceTwo?.src) {
        choiceOne.flipped = false;
        setTimeout(() => {
          choiceTwo.flipped = false;
        }, 1000);
        console.log('not matched');
      }
      resetCard();
    }
  }, [choiceOne, choiceTwo]);
  return (
    <div className="App">
      <h1>Magic Memory - {turns}</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="deck">
        {cards.map((card, index) => {
          return (
            <SingleCard
              card={card}
              key={index}
              handleChoice={card.flipped ? () => null : handleChoice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
