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
      <ButtonGroup orientation="vertical">
        <IconButton component={Link} to={'/courage'} color="inherit">
          courage<ArrowForwardIcon />
        </IconButton>
        <IconButton component={Link} to={'/edison'} color="inherit">
          edison<ArrowForwardIcon />
        </IconButton>
        <IconButton component={Link} to={'/icebreaker'} color="inherit">
          icebreaker<ArrowForwardIcon />
        </IconButton>
        <IconButton component={Link} to={'/intimacy'} color="inherit">
          intimacy<ArrowForwardIcon />
        </IconButton>
        <IconButton component={Link} to={'/littletalk'} color="inherit">
          littletalk<ArrowForwardIcon />
        </IconButton>
        <IconButton component={Link} to={'/words'} color="inherit">
          words<ArrowForwardIcon />
        </IconButton>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;