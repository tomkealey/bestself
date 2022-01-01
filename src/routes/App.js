import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <IconButton 
          component={Link} to={'/courage'} 
          color="inherit"
          edge="start"
        >
          courage<ArrowForwardIcon />
        </IconButton>
        <IconButton 
          component={Link} to={'/edison'} 
          color="inherit"
          edge="start"
        >
          edison<ArrowForwardIcon />
        </IconButton>
        <IconButton 
          component={Link} to={'/icebreaker'} 
          color="inherit"
          edge="start"
        >
          icebreaker<ArrowForwardIcon />
        </IconButton>
        <IconButton 
          component={Link} to={'/littletalk'} 
          color="inherit"
          edge="start"
        >
          littletalk<ArrowForwardIcon />
        </IconButton>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;