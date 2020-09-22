import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Image, Menu } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Image
          src="https://fontmeme.com/permalink/200919/2a9e21302fa17078d2032971aff86d58.png"
          alt="pokemon-finder"
        />
      </NavLink>
      <Menu>
        <NavLink to ="/finder">
          Finder
        </NavLink>
        <NavLink to="/viewer">
          Viewer
        </NavLink>
      </Menu>
    </Nav>
  )
}

export default Navbar