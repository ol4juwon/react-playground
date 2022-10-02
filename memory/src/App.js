import './App.css';
import React, { useEffect } from 'react';
import SingleCard from './components/SingleCard';
const cardImg = [
  { src: 'img/helmet-1.png', matched: false },
  { src: 'img/sword-1.png', matched: false },
  { src: 'img/ring-1.png', matched: false },
  { src: 'img/scroll-1.png', matched: false },
  { src: 'img/shield-1.png', matched: false },
  { src: 'img/potion-1.png', matched: false }
];
function App() {
  const [cards, setCards] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState(null);
  const [choiceTwo, setChoiceTwo] = React.useState(null);
  const [difficulty, setDifficulty] = React.useState(2);

  const shuffleCards = () => {
    const shuffledCard = Array(difficulty)
      .fill(cardImg)
      .flat()
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
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  useEffect(() => {
    shuffleCards();
  }, [difficulty]);

  useEffect(() => {
    if (choiceOne !== null && choiceTwo !== null) {
      if (choiceOne?.src === choiceTwo?.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne?.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else if (choiceOne?.src !== choiceTwo?.src) {
        console.log('not matched');
      }
      setTimeout(() => {
        resetCard();
      }, 1000);
    }
  }, [choiceOne, choiceTwo]);
  return (
    <div className="App">
      <h1>Magic Memory - {turns}</h1>
      <div className="start">
        <button onClick={shuffleCards}>New Game</button>{' '}
        <select onChange={(e) => setDifficulty(parseInt(e.target.value))}>
          <option value="2" className="green">
            Easy
          </option>
          <option value="4" className="yellow">
            Medium
          </option>
          <option value="8" className="red">
            Hard
          </option>
        </select>
      </div>
      <div className="deck">
        {cards.map((card, index) => {
          return (
            <SingleCard
              card={card}
              key={index}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
