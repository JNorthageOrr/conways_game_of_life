import React, { Component } from 'react';
import Header from './header';
import Main from './Main';


class Home extends Component () {
	state = {logged_in: false};

	render(){
		return(
			<div>
				<Header />
				<Main />
			</div>
		)
	}
}

export default Home;