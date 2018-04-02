import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Game from './game';
import Pattern from './pattern';
import User from './user';
import Landing from './landing';

const Main = () => (
	<main>
		<Switch> 
			<Route exact path='/' component={Landing}/>
			<Route exact path='/home' component={Home}/>
			<Route exact path='/game' component={Game}/>
			<Route exact path='/pattern' component={Pattern}/>
			<Route exact path='/user' component={User}/>
		</Switch>
	</main>
);

export default Main;