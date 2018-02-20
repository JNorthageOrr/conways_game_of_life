import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Game from './game';
import Landing from './landing';

const Main = () => (
	<main>
		<Switch> 
			<Route exact path='/' component={Landing}/>
			<Route exact path='/home' component={Home}/>
			<Route exact path='/game' component={Game}/>
		</Switch>
	</main>
);

export default Main;