import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/icebreaker">Icebreaker</NavLink>
      </header>
    </div>
  );
}

export default App;