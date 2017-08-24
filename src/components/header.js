import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

const Header = () => (
  <header>
    <nav className="navbar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/game'>Play Game</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header