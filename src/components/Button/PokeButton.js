import React from 'react'
import { Button, Image } from './styles'

import Pokeball from '../../assets/img/pokeball.png'
import Next from '../../assets/img/next.png'

const PokeButton = ({primary, title, onClick}) => {
  if(primary) {
    return (
      <Button primary onClick={onClick}>
        {title}
        <Image src={Pokeball} alt="pokeball" />
      </Button>
    )
  }

  return (
    <Button onClick={onClick}>
      {title}
      <Image src={Next} alt="nextPokemon" />
    </Button>
  )
}

export default PokeButton