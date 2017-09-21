import React from 'react';
import {render} from 'react-dom';
import Square from './square';

function renderRow(squares) { 
      //var rowArray = this.props.squares[i];
      //console.log('rowArray: ')
      //console.log(rowArray)
      //rowArray.forEach(function(squareArray){
        //console.log('squareArray: ')
        //console.log(squareArray)    
    return squares.map((square) => {
    	return (
	        <Square
	            value={square}
	        />
    	)
    });	
}

export default React.createClass({
	componentDidMount() {
		require('../style.css');
	},
	render() {
		let squares = this.props.squares;

		return (
			<div className="row">
				{renderRow(squares)}
			</div>
		);
	}
});