import React from 'react'
import { Section, Div, ActualPokemon, Buttons } from './styles'

import PokeButton from '../../components/Button/PokeButton'

const Finder = () => {
  return (
    <Section>
      <Div>
        <ActualPokemon>
          pokemon
        </ActualPokemon>
        <Buttons>
          <PokeButton title="Capturar" primary/>
          <PokeButton title="Siguiente"/>
        </Buttons>
      </Div>
      <Div>
        gráfica
      </Div>
    </Section>
  )
}

export default Finder