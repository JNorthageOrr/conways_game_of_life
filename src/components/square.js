import React from 'react';
import {render} from 'react-dom';

class Square extends React.Component {
	
	render() {

  		let classes = this.props.value > 0 ? 'X' : 'O'; 
  		let indexValue = [this.props.rowNumber, this.props.elementId]

  		//console.log('indexValue1: ')
  		//console.log(this.props.rowNumber)
  		//console.log('indexValue2: ')
  		//console.log(this.props.elementId)
  		//console.log(indexValue)
  		return (
			<button className={classes} rowNumber = {this.props.rowNumber} elementId = {this.props.elementId} onClick={(indexValue) => this.props.onClick(indexValue)}>
		  		{classes}
		    </button>
		);
	}
}

export default Square;