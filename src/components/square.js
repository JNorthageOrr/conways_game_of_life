import React from 'react';
import {render} from 'react-dom';

export default React.createClass({
	componentDidMount(){
		require('../style.css');
	},
	render() {

  		let classes = this.props.value > 0 ? 'X' : 'O'; 
  		/*if (classes === 0){
  			var valued = 'O';
  		} else {
  			var valued = 'X';
  		}*/
  		return (
			<button className={classes}>
		  		{classes}
		    </button>
		);
	}
})