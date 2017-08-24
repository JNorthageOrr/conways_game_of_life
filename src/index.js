import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import classnames from 'classnames';
//import Root from './Root';
import Home from './components/home';
//import Game from './components/game';



// ========================================

ReactDOM.render(
  <BrowserRouter>
    {/* Each route is defined with route */}
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);

//old:
//ReactDom.render(
//<Game />,
//document.getElementById('root')
