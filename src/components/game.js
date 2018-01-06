import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './board';
import Boardsize from './boardsize';
import '../style.css';



class Game extends React.Component {
  constructor() {
    super();
    let size = 10;
    let squares = generateArray(size);

    this.state = {
      history: [{
        squares: squares
      }],
      stepNumber: 0,
      tick: 0,
      boardsize: 10,
    };
    this.handleTick = this.handleTick.bind(this);
    this.handleSize = this.handleSize.bind(this);
  }
  componentDidMount() {

  }
  jumpTo(step) {
  	this.setState({
  		stepNumber: step,
  	});
  }
  handleClick(event, indexValue, history) {
    
    const current = history[history.length -1];
    const squares = current.squares.slice();
        
    if (squares[indexValue[0] ][indexValue[1] ] == 0) {
      squares[indexValue[0] ][indexValue[1] ] = 1
    } else {
      squares[indexValue[0] ][indexValue[1] ] = 0
    }

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
    });
  }
  handleTick(history) {
    const tickHistory = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = tickHistory[tickHistory.length -1];
    const squares = current.squares.slice();
    const tick = this.state.tick + 1;
    const boardsize = this.state.boardsize;
    
    let newSquares = calculateLife(squares, boardsize);

    this.setState({
      history: tickHistory.concat([{
        squares: newSquares, 
      }]),
      stepNumber: tickHistory.length,
      tick: tick,
      
    });
  }
  handleSize(event, history) {
    const sizeHistory = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = sizeHistory[sizeHistory.length -1];
    var size = parseInt(event.target.value);
    const squares = current.squares.slice(0, size);

    if (squares.length < size){
        squares.splice(0, 10)
      for (var i = 0; i < size; i++){
        squares.push(Array(size).fill(0,0,size))
      }
    } else {
        squares.splice(0, 10)
      for (var i = 0; i < size; i++){
        squares.push(Array(size).fill(0,0,size))
      }
    }
    this.setState({
      history: [{
        squares: squares                 
      }],
      boardsize: parseInt(event.target.value),
    });
  }
  
  render() {
    
    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const tick = this.state.tick;

    //console.log('current squares: ');
    //console.log(current.squares)
    

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move : 
        'Game Start';
      return (
        <li key={move}> 
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          	squares = {current.squares}
          	onClick={(event, indexValue) => this.handleClick(event, indexValue, history)}
          />
        </div>
        
        <br />
        <div className="control-buttons">
          <div className="tick-button">
            <button 
              className="tick-button"
              onClick = {(this.handleTick)}>Tick: {tick}        
            </button>
          </div>
          <div className="run-button">
            <button 
              className="run-button"
              onClick = { (this.runGame) }>Run Game: {tick}
            </button>
          </div>
          <div className="size-button">
            <form onSubmit={(event, history) => this.handleSize(this.state.value, this.state.history)}>
              <label>
                Pick board size: 
                <select value={this.state.value} onChange={(event, history) => this.handleSize(event, history)}>
                  <option value="10">10x10</option>
                  <option value="20">20x20</option>
                </select>
              </label>
              
            </form>
          </div> 
        </div>
      </div>
    );
  }
} // ======= end Class Game ============= //

Game.propTypes = {};
export default Game;

function generateArray(size) {
  let square = new Array;

  for (var i = 0; i < size; i++){
    square.push(Array(size).fill(0,0,size));
  }
  return square;
}

function calculateLife(squares, boardsize) {
  let accumulator = generateArray(parseInt(boardsize))

  let newSquares = generateArray(parseInt(boardsize))

  let counter = Array([0][0]);
  var total;
  
  for (var i = 0, length=squares.length; i<length; i++) {
    for (var j = 0, length2 = squares[i].length; j < length2; j++) {
      //rule for top left corner square
      if( (i == 0) && (j == 0) ) {
        total = squares[i][j + 1] + squares[i + 1 ][j] + squares[i + 1][j + 1];
      }//rule for top right corner square 
      else if ( (i == 0) && (j == squares.length - 1) ) {
        total = squares[i][j - 1] + squares[i + 1 ][j] + squares[i + 1][j - 1];
      }//rule for bottom left corner square
      else if ( (i == squares.length - 1) && (j == 0) ) {
        total = squares[i - 1][j] + squares[i][j + 1];
      }//rule for bottom right corner square
      else if ( (i == squares.length - 1) && (j == squares.length - 1) ) {
        total = squares[i - 1][j] + squares[i][j - 1];
      }//rule for top squares
      else if ( (i == 0) && (j > 0) && (j < squares.length) ) {
        total = squares[i][j - 1] + squares[i][j + 1] + squares[i + 1][j - 1] + squares[i + 1][j] + squares[i + 1][j + 1];
      }//rule for bottom squares
      else if ( (i == squares.length - 1) && (j > 0) && (j < squares.length) ) {
        total = squares[i][j - 1] + squares[i][j + 1] + squares[i - 1][j - 1] + squares[i - 1][j] + squares[i - 1][j + 1];
      }//rule for left squares
      else if ( (j == 0 ) && (i > 0) && (i < squares.length) ) {
        total = squares[i][j + 1] + squares[i + 1][j] + squares[i - 1][j] + squares[i - 1][j + 1] + squares[i + 1][j + 1];
      }//rule for right squares
      else if ( (j == squares.length - 1) && (i > 0) && (i < squares.length - 1) ) {
        total = squares[i + 1][j] + squares[i][j - 1] + squares[i - 1][j] + squares[i - 1][j - 1] + squares[i + 1][j - 1];
      }//rules for any interior square
      else {
        total = squares[i][j - 1] + squares[i][j + 1] + squares[i - 1][j] + squares[i + 1][j] + squares[i + 1][j + 1] + squares[i + 1][j - 1] + squares[i - 1][j - 1] + squares[i - 1][j + 1];
      }
      accumulator[i][j] = total;
    }
  }

  //iterate over squares, set accumulator values which will be used to calculate which
  //cells live and which die in the following step. Accumulator squares will get 1 point for
  //every live cell adjacent to the square currently being iterated over.  
    
  //iterate over accumulator, apply life or death rules, set squares new value
  
  for (var i = 0, length=squares.length; i<length; i++) {
    for (var j = 0, length2 = squares[i].length; j < length2; j++) {  
      //1. Live cell w/ less than 2 live neighbors == dead
      if((accumulator[i][j] < 2) && (squares[i][j] === 1)){
        newSquares[i][j] = 0
      }
      //2. Live cell w/ 2 or 3 live neighbors == live
      if( (accumulator[i][j] > 1) && (accumulator[i][j] < 4) && (squares[i][j] === 1) ) {
        newSquares[i][j] = 1
      }
      //3. Live cell w/ greater than 3 neighbors == dead
      if((accumulator[i][j] > 3) && (squares[i][j] === 1)){
        newSquares[i][j] = 0
      }
      //4. Dead cell w/ 3 live neighbors == become alive
      if((accumulator[i][j] === 3) && (squares[i][j] === 0)){
        newSquares[i][j] = 1
      }
    };
  };
  return newSquares;
} //end function calculateLife()
