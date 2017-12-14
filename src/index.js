import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import { Router, Route } from 'react-router';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
//import './index.css';
//import classnames from 'classnames';
//import Root from './Root';
//import Home from './components/home';
//import Game from './components/game';

import './style.css';
import Board from './components/board';
import Boardsize from './components/boardsize';
//import classnames from 'classnames';

class Game extends React.Component {
  constructor() {
    super();
    let size = 10;
    this.state = {
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
                       Array(size).fill(0,0,size))
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
    
    let newSquares = calculateLife(squares)

    this.setState({
      history: tickHistory.concat([{
        squares: newSquares, 
      }]),
      stepNumber: tickHistory.length,
      tick: tick,
      
    });
  }
  handleSize(event, history) {
    //const current = history[history.length -1];
    //const squares = current.squares.slice();
    var size = parseInt(event.target.value);

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
  }
  
  render() {
    
    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const tick = this.state.tick;

    console.log('current squares: ');
    console.log(current.squares)
    

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
            <form onSubmit={(event, history) => this.handleSize(this.state.value, history)}>
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
}


// ========================================
/*
ReactDOM.render(
  <BrowserRouter>
    { Each route is defined with route }
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);
*/

//old:
ReactDOM.render(
  <Game />,
  document.getElementById('root')
); 

function calculateLife(squares) {
  let accumulator = Array(Array(10).fill(0,0,10), 
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10));

  let newSquares = Array(Array(10).fill(0,0,10), 
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10),
                       Array(10).fill(0,0,10));

  let counter = Array([0][0]);
  var total;
  //Iterate over squares, get values of neighboring cells, push those to accumulator
  /*console.log('accumulator: ');
  console.log(accumulator);
  console.log('newSquares: ');
  console.log(newSquares);
  */
  
  for (var i = 0, length=squares.length; i<length; i++) {
    for (var j = 0, length2 = squares[i].length; j < length2; j++) {
      //rule for top left corner square
      if( (i == 0) && (j == 0) ) {
        total = squares[i][j + 1] + squares[i + 1 ][j] + squares[i + 1][j + 1];
        console.log('total: ' + total);
      }//rule for top right corner square 
      else if ( (i == 0) && (j == squares.length - 1) ) {
        total = squares[i][j - 1] + squares[i + 1 ][j] + squares[i + 1][j - 1];
        console.log('total: ' + total);
      }//rule for bottom left corner square
      else if ( (i == squares.length - 1) && (j == 0) ) {
        total = squares[i - 1][j] + squares[i][j + 1];
        console.log('total: ' + total);
      }//rule for bottom right corner square
      else if ( (i == squares.length - 1) && (j == squares.length - 1) ) {
        total = squares[i - 1][j] + squares[i][j - 1];
        console.log('total: ' + total);
      }//rule for top squares
      else if ( (i == 0) && (j > 0) && (j < squares.length) ) {
        total = squares[i][j - 1] + squares[i][j + 1] + squares[i + 1][j - 1] + squares[i + 1][j] + squares[i + 1][j + 1];
        console.log('total: ' + total);
      }//rule for bottom squares
      else if ( (i == squares.length - 1) && (j > 0) && (j < squares.length) ) {
        total = squares[i][j - 1] + squares[i][j + 1] + squares[i - 1][j - 1] + squares[i - 1][j] + squares[i - 1][j + 1];
        console.log('total: ' + total);
      }//rule for left squares
      else if ( (j == 0 ) && (i > 0) && (i < squares.length) ) {
        total = squares[i][j + 1] + squares[i + 1][j] + squares[i - 1][j] + squares[i - 1][j + 1] + squares[i + 1][j + 1];
        console.log('total: ' + total);
      }//rule for right squares
      else if ( (j == squares.length - 1) && (i > 0) && (i < squares.length - 1) ) {
        total = squares[i + 1][j] + squares[i][j - 1] + squares[i - 1][j] + squares[i - 1][j - 1] + squares[i + 1][j - 1];
        console.log('total: ' + total);
      }//rules for any interior square
      else {
        total = squares[i][j - 1] + squares[i][j + 1] + squares[i - 1][j] + squares[i + 1][j] + squares[i + 1][j + 1] + squares[i + 1][j - 1] + squares[i - 1][j - 1] + squares[i - 1][j + 1];
        console.log('total: ' + total);
      }
      console.log('element: ' + i + " , " + j);
      accumulator[i][j] = total;
    }
  }
  console.log('squares: ');
  console.log(squares);
  console.log('accumulator: ');
  console.log(accumulator);

  //iterate over squares, set accumulator values which will be used to calculate which
  //cells live and which die in the following step. Accumulator squares will get 1 point for
  //every live cell adjacent to the square currently being iterated over.  
    
  //iterate over accumulator, apply life of death rules, set squares new value
  
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
