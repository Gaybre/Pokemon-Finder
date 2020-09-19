import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/finder">
        <img
          src="https://fontmeme.com/permalink/200919/2a9e21302fa17078d2032971aff86d58.png"
          alt="pokemon-finder"
        />
      </Link>
      <Link to="/viewer">
        <img
          src="https://fontmeme.com/permalink/200919/8d779a61e222b51ea2cb2551c4fbb478.png"
          alt="pokemon-viewer"
        />
      </Link>
    </nav>
  )
}

export default Navbar