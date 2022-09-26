import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Mario');
  const handleClick = (e) => {
    e.preventDefault();
    setName('Luigi');
  };
  return (
    <div className="App">
      {name}
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
