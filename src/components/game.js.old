import React from 'react';
import Board from './board';
import Boardsize from './boardsize';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(99).fill(0),
      }],
      stepNumber: 0,
      tick: 0,
    };
    this.handleTick = this.handleTick.bind(this);
  }
  componentDidMount() {
    
  }
  jumpTo(step) {
  	this.setState({
  		stepNumber: step,
  	});
  }
  handleClick(i) {
  	const history = this.state.history.slice(0, this.state.stepNumber + 1);
  	const current = history[history.length -1];
  	const squares = current.squares.slice();
  	
  	squares[i] = 1;
  	this.setState({
  		history: history.concat([{
  			squares: squares,
  		}]),
  		stepNumber: history.length,
  	});
  }
  handleTick() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    const tick = this.state.tick + 1;
    
    let newSquares = calculateLife(squares)

    console.log('newSquares: ')
    console.log(newSquares)
    //squares = newSquares;
    this.setState({
      history: history.concat([{
        squares: newSquares, 
      }]),
      stepNumber: history.length,
      tick: tick,
      
    });
  }
  runGame(){
    timerId;
/*    let timerId = setInterval( () => {
        {this.handleTick};
        console.log('timerId: ' + timerId)
      }, 2000);
    setTimeout(() => {
      clearInterval(timerId);
    }, 20000);
    timerId();*/
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const tick = this.state.tick;

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
          	onClick = {(i) => this.handleClick(i)}
          />
        </div>
        {/*
        //  
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        */}
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
          <Boardsize />
        </div>
      </div>
    );
  }
}

  let timerId = setInterval( () => {
                  Game.handleTick;
                  console.log('timerId: ' + timerId)
                }, 2000);
      setTimeout(() => {
        clearInterval(timerId);
      }, 20000);
  

function calculateLife(squares) {
  let accumulator = Array(100).fill(0);
  let counter = 0;
  let newSquares = Array(99).fill(0);
  //Iterate over squares, get values of neighboring cells, push those to accumulator
  squares.forEach(function(i) {
    
    //Rules for top row, excludes two corners
    if( (counter > 0) && (counter < 9) ){
      //neighboors to left and right of square
      if (squares[counter - 1] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 1] === 1){
        accumulator[counter] += 1;
      //neighboors in row below square  
      }
      if (squares[counter + 9] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 11] === 1){
        accumulator[counter] += 1;
      }
      //counter += 1;
    } else if (counter > 99){

    }
     //Rules for right row, excludes corners
    else if ( (counter === 19) || (counter === 29) || (counter === 39) || (counter === 49) || (counter === 59) || (counter === 69) || (counter === 79) || (counter === 89) ){
      //neighbors above square
      if (squares[counter - 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter - 11] === 1){
        accumulator[counter] += 1;
      }
      //neighbors to left of square
      if (squares[counter - 1] === 1){
        accumulator[counter] += 1;
      }
      //neighboors in row below square  
      if (squares[counter + 9] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 10] === 1){
        accumulator[counter] += 1;
      }
      //counter += 1;
    } //Rules for bottom row, excludes corners
    else if ( (counter > 90) && (counter < 99) ) {
      //neighboors to left and right of square
      if (squares[counter - 1] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 1] === 1){
        accumulator[counter] += 1;
      }
      //neighboors above square
      if (squares[counter - 11] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter - 10] === 1){
        accumulator[counter] += 1;
      }
      //neighboors to left and right of square
      if (squares[counter - 9] === 1){
        accumulator[counter] += 1;
      }
      
    } //Rules for left row, excluding corners
    else if ( (counter === 10) || (counter === 20) || (counter === 30) || (counter === 40) || (counter === 50) || (counter === 60) || (counter === 70) || (counter === 80) ){
      //neighbors above square
      if (squares[counter - 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter - 9] === 1){
        accumulator[counter] += 1;
      } //neighbors to right of square
      if (squares[counter + 1] === 1){
        accumulator[counter] += 1;
      }
      //neighboors in row below square  
      if (squares[counter + 11] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 10] === 1){
        accumulator[counter] += 1;
      }
      //counter += 1;
    } //Rules for top left corner
    else if ( counter === 0){
      if (squares[counter + 1] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 11] === 1){
        accumulator[counter] += 1;
      }
      //counter += 1;
    } //Rules for top right corner
    else if ( counter === 9) {
      if (squares[counter - 1] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 9] === 1){
        accumulator[counter] += 1;
      }
      //counter += 1;
    } 
    //Rules for bottom left corner
    else if ( counter === 90) {
      if (squares[counter - 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter - 9] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 1] === 1){
        accumulator[counter] += 1;
      }
    } 
    //Rules for bottom right corner 
    else if ( counter === 99) {
      if (squares[counter - 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter - 11] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter - 1] === 1){
        accumulator[counter] += 1;
      }
    }
    //Rules for rest of game board
    else {
      //Get adjacent square values for any square not on the game board border
      if (squares[counter - 11] === 1) {
        accumulator[counter] += 1;
      } 
      if (squares[counter - 10] === 1) {
        accumulator[counter] += 1;
      }
      if (squares[counter - 9] === 1){
        accumulator[counter] += 1;
      //neighboors to left and right of square
      }
      if (squares[counter - 1] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 1] === 1){
        accumulator[counter] += 1;
      //neighboors in row below square  
      }
      if (squares[counter + 9] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 10] === 1){
        accumulator[counter] += 1;
      }
      if (squares[counter + 11] === 1){
        accumulator[counter] += 1;
      }
    }
    counter += 1;
  })
  
  //iterate over accumulator, apply life of death rules, set squares new value
  counter = 0;
  accumulator.forEach(function(j) {
    
    //1. Live cell w/ less than 2 live neighbors == dead
    if((accumulator[counter] < 2) && (squares[counter] === 1)){
      newSquares[counter] = 0
    }
    //2. Live cell w/ 2 or 3 live neighbors == live
    if( (accumulator[counter] > 1) && (accumulator[counter] < 4) && (squares[counter] === 1) ) {
      newSquares[counter] = 1
    }
    //3. Live cell w/ greater than 3 neighbors == dead
    if((accumulator[counter] > 3) && (squares[counter] === 1)){
      newSquares[counter] = 0
    }
    //4. Dead cell w/ 3 live neighbors == become alive
    if((accumulator[counter] === 3) && (squares[counter] === 0)){
      newSquares[counter] = 1
    }
    counter += 1;
  })
  return newSquares;
}

Game.propTypes = {};

export default Game;