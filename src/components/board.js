import React, { Component } from 'react';
//import React from 'react';
import Row from './row';
import Square from './square';

function renderColumn(squares, props) { 
  let handleClick = props.onClick;

    return squares.map((square, index) => {
      return (
       
          <Row
            rowNumber = {index}
            squares={squares[index]}
            onClick={handleClick}
          />
      )
    }); 
}

class Board extends React.Component {

  render() {
    let squares = this.props.squares;
    
    return (
      <div className="rowContainer">
        {renderColumn(squares, this.props)}
      </div>
    );
  }
}
//onClick = {this.props.handleClick}
Board.propTypes = {};

export default Board;