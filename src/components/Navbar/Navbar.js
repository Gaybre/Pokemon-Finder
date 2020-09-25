import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Image, Menu } from './styles'
import Pokedex from '../../assets/img/pokedex.png'
import Mapa from '../../assets/img/mapa.png'

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
          <img src={Mapa} alt="mapa" />
          Buscar
        </NavLink>
        <NavLink to="/viewer">
          <img src={Pokedex} alt="pokedex" />
          Pokedex
        </NavLink>
      </Menu>
    </Nav>
  )
}

export default Navbar