import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Game from './components/game';
import './style.css';



// ======== Old Game element ========================== //
/*ReactDOM.render(
  <Game />,
  document.getElementById('root')
);*/ 
// ======== end old Game element ====================== //


// ======== React Router setup ======================== //

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);

// ======== end Reach Router setup ==================== //

