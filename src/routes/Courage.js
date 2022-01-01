import React, { useState, useEffect } from 'react';
import { getRandomNumber, getContrastYIQ } from '../utils/Helper';
import '../styles/App.css';

function Courage() {
  const [category, setCategory] = useState('Press the spacebar');
  const [show, setShow] = useState(true);
  const [colour, setColour] = useState();
  const [contrast, setContrast] = useState();

  const cards = {
    categories: ['Learning', 'Random','Relationships', 'Experiences', 'Health', 'Self'],
    colours: ['#E0E0E0', '#F5F500', '#FF1F1F', '#009DFF', '#21A300', '#6F5F81']
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    document.addEventListener('touchstart', handleTocuhStart);
    return () => {
      document.removeEventListener('touchstart', handleTocuhStart);
    };
  });

  function handleKeyDown(event) {
    switch(event.code) {
      case 'Space':
        // pick a random card
        pickCard(getRandomNumber());
        break;
      case 'KeyL': case 'Digit0':
        // Learning  
        pickCard(0);
        break;
      case 'KeyR': case 'Digit1':
        // Random  
        pickCard(1);
        break;
      case 'KeyX': case 'Digit2':
        // Relationships  
        pickCard(2);
        break;
      case 'KeyE': case 'Digit3':
        // Experience  
        pickCard(3);
        break;
      case 'KeyH': case 'Digit4':
        // Health
        pickCard(4);
        break;
      case 'KeyS': case 'Digit5':  
        // Self
        pickCard(5);
        break;
      default:
        // do nothing
    }
  }

  function handleTocuhStart(event) {
    pickCard(getRandomNumber()); 
  }

  // pick a card 
  const pickCard = (x) => {
    setShow(false);
    setCategory(cards.categories[x]);
    setColour(cards.colours[x]);
    //contrast text colour against card color background
    setContrast(getContrastYIQ(cards.colours[x]));
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: `${colour}`, color: `${contrast}` }}>
        <p>{category}</p>
        <p className="App-cards">{show && cards.categories.join(' | ')}</p>
      </header>
      
    </div>
  );
}

export default Courage;