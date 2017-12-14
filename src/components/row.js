import React from 'react';
import {render} from 'react-dom';
import Square from './square';

let iterator = 0;

function renderRow(squares, props) { 
      //console.log(props)
      //props.handleClick("8,4") 
    return squares.map((square, index) => {
    	return (
	        <Square
	            elementId = {index}
	            rowNumber = {props.rowNumber}
	            value={square}
	            onClick={props.onClick}
	        />
    	)
    });	
}

class Row extends React.Component {
	
	render() {
		let squares = this.props.squares; 
		let classNumber = "row" + this.props.rowNumber 
		//let handleClick 
		//let clickHandler = this.props.handleClick;
		//let clickHandler = {() => this.handleClick()}
		return (
			<div className={classNumber} rowNumber = {this.props.rowNumber}>
				{renderRow(squares, this.props)}
			</div>
		);
	}
}


//Row.propTypes = {};

export default Row;