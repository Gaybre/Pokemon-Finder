import React from 'react'
import { Button, Image } from './styles'

import Pokeball from '../../assets/img/pokeball.png'
import Next from '../../assets/img/next.png'

const PokeButton = ({primary, title}) => {
  if(primary) {
    return (
      <Button primary>
        {title}
        <Image src={Pokeball} />
      </Button>
    )
  }

  return (
    <Button>
      {title}
      <Image src={Next} />
    </Button>
  )
}

export default PokeButton