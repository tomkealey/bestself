import React, { useState, useEffect } from 'react';
import { getRandomNumber, getContrastYIQ } from '../utils/Helper';
import '../styles/App.css';

function Intimacy() {
  const [category, setCategory] = useState('Press the spacebar');
  const [show, setShow] = useState(true);
  const [colour, setColour] = useState();
  const [contrast, setContrast] = useState();

  const cards = {
    categories: ['Past', 'Random','Intimacy', 'Relationship', 'Life', 'About You'],
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
      case 'KeyP': case 'Digit0':
        // Past  
        pickCard(0);
        break;
      case 'KeyR': case 'Digit1':
        // Random  
        pickCard(1);
        break;
      case 'KeyI': case 'Digit2':
        // Intimacy  
        pickCard(2);
        break;
      case 'KeyX': case 'Digit3':
        // Relationship  
        pickCard(3);
        break;
      case 'KeyL': case 'Digit4':
        // Life
        pickCard(4);
        break;
      case 'KeyY': case 'Digit5':  
        // About you
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

export default Intimacy;