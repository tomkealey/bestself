import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import App from './routes/App';
import Icebreaker from './routes/Icebreaker';
import Littletalk from './routes/Littletalk';
import Courage from './routes/Courage';
import Edison from './routes/Edison';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/icebreaker" element={<Icebreaker />} />
      <Route path="/littletalk" element={<Littletalk />} />
      <Route path="/courage" element={<Courage />} />
      <Route path="/edison" element={<Edison />} />
      <Route 
        path="*" 
        element={
          <div className="App">
            <header className="App-header">
              <p>There's nothing here!</p>
            </header>
          </div>
        } 
      />
    </Routes>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
