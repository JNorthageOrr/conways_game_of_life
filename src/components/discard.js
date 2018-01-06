import React from 'react';
import Row from './row';
import Square from './square';

//handleSize: 
this.setState({
      history: [{
        squares: Array(Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size),
                       Array(size).fill(0,0,size))  
                       
      }],
      boardsize: parseInt(event.target.value),
    });

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
            onClick={handleClick}
          />
                
          <Row
            rowNumber = {2}
            squares={squares[2]}
            onClick={handleClick}
          />
                
          <Row
            rowNumber = {3}
            squares={squares[3]}
            onClick={handleClick}
          />
                
          <Row
          rowNumber = {4}
            squares={squares[4]}
            onClick={handleClick}
          />
                
          <Row
            rowNumber = {5}
            squares={squares[5]}
            onClick={handleClick}
          />
                
          <Row
            rowNumber = {6}
            squares={squares[6]}
            onClick={handleClick}
          />
              
          <Row
            rowNumber = {7}
            squares={squares[7]}
            onClick={handleClick}
          />
            
          <Row
            rowNumber = {8}
            squares={squares[8]}
            onClick={handleClick}
          />
            
          <Row
            rowNumber = {9}
            squares={squares[9]}
            onClick={handleClick}
          />

          <Row
            rowNumber = {10}
            squares={squares[10]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {11}
            squares={squares[11]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {12}
            squares={squares[12]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {13}
            squares={squares[13]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {14}
            squares={squares[14]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {15}
            squares={squares[15]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {16}
            squares={squares[16]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {17}
            squares={squares[17]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {18}
            squares={squares[18]}
            onClick={handleClick}
          />
          <Row
            rowNumber = {19}
            squares={squares[19]}
            onClick={handleClick}
          />

      </div>
    );
  }
}
//onClick = {this.props.handleClick}
Board.propTypes = {};

export default Board;