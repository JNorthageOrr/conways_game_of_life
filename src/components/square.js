import React from 'react';
import {render} from 'react-dom';

class Square extends React.Component {
	
	render() {

  		let classes = this.props.value > 0 ? 'X' : 'O'; 
  		let indexValue = [this.props.rowNumber, this.props.elementId]
      let handleClick = this.props.onClick;

  		
  		return (
			<button className={classes} 
              rowNumber = {this.props.rowNumber} 
              elementId = {this.props.elementId} 
              onClick={(event) => handleClick(event, indexValue)}>
		  		{classes}
		    </button>
		);
	}
}

export default Square;