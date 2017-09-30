import React from 'react';
import Row from './row';
import Square from './square';


class Board extends React.Component {

  render() {
    let squares = this.props.squares;
    let handleClick = this.props.onClick;
    return (
      <div className="rowContainer">
        
          <Row
            className = "row0"
            rowNumber = {0}
            squares={squares[0]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
          
          <Row
            className = "row1"
            rowNumber = {1}
            squares={squares[1]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
                
          <Row
            rowNumber = {2}
            squares={squares[2]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
                
          <Row
            rowNumber = {3}
            squares={squares[3]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
                
          <Row
          rowNumber = {4}
            squares={squares[4]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
                
          <Row
            rowNumber = {5}
            squares={squares[5]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
                
          <Row
            rowNumber = {6}
            squares={squares[6]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
              
          <Row
            rowNumber = {7}
            squares={squares[7]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
            
          <Row
            rowNumber = {8}
            squares={squares[8]}
            onClick={(indexValue) => handleClick(indexValue)}
          />
            
          <Row
            rowNumber = {9}
            squares={squares[9]}
            onClick={(indexValue) => handleClick(indexValue)}
          />

      </div>
    );
  }
}
//onClick = {this.props.handleClick}
Board.propTypes = {};

export default Board;