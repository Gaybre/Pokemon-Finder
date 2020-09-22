import React from 'react'
import { Buttons, Body } from './styles'

import Container from '../../components/Container/Container'
import FinderBody from '../../components/FinderBody/FinderBody'
import PokeButton from '../../components/Button/PokeButton'

const Finder = () => {
  return (
    <Container title="¡Atrapalos ya!">
      <Body>
        <FinderBody pokemon="name: pikachu" graph="graph" />
        <Buttons>
          <PokeButton title="Capturar" primary/>
          <PokeButton title="Siguiente"/>
        </Buttons>
      </Body>
    </Container>
  )
}

export default Finder