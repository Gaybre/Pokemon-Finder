import React from 'react'
import { Button } from './styles'

import Pokeball from '../../assets/img/pokeball.png'
import PokeballOpen from '../../assets/img/open-pokeball.png'

const PokeButton = ({primary, large, title, onClick}) => {
  if(primary) {
    if(large) {
      return (
        <Button primary large onClick={onClick}>
          {title}
          <img src={PokeballOpen} alt="pokeball" />
        </Button>
      )
    }
    return (
      <Button primary onClick={onClick}>
        {title}
        <img src={PokeballOpen} alt="pokeball" />
      </Button>
    )
  }

  return (
    <Button onClick={onClick}>
      {title}
      <img src={Pokeball} alt="nextPokemon" />
    </Button>
  )
}

export default PokeButton