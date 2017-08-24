import React from 'react'
import { Link } from 'react-router-dom'
import Game from './game'
import '../css/landing.css'


const Landing = () => (
  <div className="container">
    <div className="intro"> 
	    <h1>Conway's Game of Life</h1>
	    	<p>The Game of Life is a cellular automaton devised by British mathematician John Horton Conway.
	    	The game is played by setting the board's initial state, picking which cells are alive and dead, and 
	    	then watching to see how the game evolves over time. The rule that determine whether a cell lives or dies
	    	follow 4 basic rules:</p>
	    <ul className="rules">
	    	<li>Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.</li>
			<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
			<li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
			<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
	    </ul>
	    <p className="intro2">Given these simple rules, an infinite amount of complexity arises; a perfect exploration of emergent 
	    behaviour. Click the tiles below, then step through the evolution by clicking the Tick button.</p> 
    	<Game className="introGame"/>
    </div>
  </div>
)

export default Landing
