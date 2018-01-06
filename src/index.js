import React from 'react';
import ReactDOM from 'react-dom';

//import { Router, Route } from 'react-router';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
//import './index.css';
//import classnames from 'classnames';
//import Root from './Root';
//import Home from './components/home';
//import classnames from 'classnames';

import Game from './components/game';
import './style.css';



// ======== Old Game element ========================== //
ReactDOM.render(
  <Game />,
  document.getElementById('root')
); 
// ======== end old Game element ====================== //


// ======== React Router setup ======================== //
/*
ReactDOM.render(
  <BrowserRouter>
    { Each route is defined with route }
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);
*/
// ======== end Reach Router setup ==================== //

