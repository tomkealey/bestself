import React, { useState } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('Press the spacebar');
  const [colour, setColour] = useState();
  
  const cards = {
    categories: ['Life', 'Random','Deep', 'Experiences', 'If you could...', 'Would you rather...'],
    colours: ['#E0E0E0', '#F5F500', '#FF1F1F', '#009DFF', '#21A300', '#6F5F81']
  }

  // pick a random card 
  const pickCard = () => {
    const id = Math.floor(Math.random()*6); 

    setCategory(cards.categories[id]);
    setColour(cards.colours[id]);
  }

  return (
    <div className="App">
      <header className="App-header">
          <p>{category} {colour}</p>
          <button onClick={() => pickCard()}>
              Click me
          </button>
      </header>
    </div>
  );
}

export default App;