import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';


class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {logged_in: false}
		//this.loginSuccess = this.loginSuccess.bind(this)
		this.logoutSuccess = this.logoutSuccess.bind(this)
	}
	componentDidMount(){
		if (localStorage.getItem('jwt')){
			this.setState({logged_in: true})
		}
	}
	logoutSuccess(){
		localStorage.removeItem('jwt')
		this.setState({logged_in: false})	
	}
	render(){
		console.log('Logged in: ' + this.state.logged_in)
		if (this.state.logged_in) {
			return (
			  <header>
			    <nav className="navbar">
			      <ul>
			        <li><Link to='/'>Home</Link></li>
			        <li><Link to='/game'>Play Game</Link></li>
			        <li><Link to='/pattern'>Pattern</Link></li>
			      </ul>
			      <ul className="loginLink">
			      	<li><Link to='/' onClick={this.logoutSuccess}>Log Out</Link></li>
			      </ul>
			    </nav>
			  </header>
			)	
		} else {
			return (
			  <header>
			    <nav className="navbar">
			      <ul>
			        <li><Link to='/'>Home</Link></li>
			        <li><Link to='/game'>Play Game</Link></li>
			        <li><Link to='/pattern'>Pattern</Link></li>
			      </ul>
			      <ul className="loginLink">
			      	<li><Link to='/user'>Login / Sign up</Link></li>
			      </ul>
			    </nav>
			  </header>
			)  
		}
	}

	
}


export default Header;