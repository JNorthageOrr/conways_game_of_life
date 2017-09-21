import React from 'react';
import Row from './row';
import Square from './square';


class Board extends React.Component {

  render() {
    let squares = this.props.squares;
    return (
      <div className="rowContainer">
        
          <Row
            squares={squares[0]}
            onClick = {(i) => this.handleClick(i)}
          />
        
          <Row
            squares={squares[1]}
          />
                
          <Row
            squares={squares[2]}
          />
                
          <Row
            squares={squares[3]}
          />
                
          <Row
            squares={squares[4]}
          />
                
          <Row
            squares={squares[5]}
          />
                
          <Row
            squares={squares[6]}
          />
              
          <Row
            squares={squares[7]}
          />
            
          <Row
            squares={squares[8]}
          />
            
          <Row
            squares={squares[9]}
          />
          
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;