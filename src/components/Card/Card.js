import React from 'react'
import { Container, CardContainer, CardDetails, Image } from './styles'

const Card = ({list}) => {
  return (
    <Container>
      {list.map(pokemon => (
        <CardContainer
          key={`${pokemon.name}-${pokemon.id}`}
          type={pokemon.types[0].type.name}
        >
          <Image
            src={ pokemon.sprites.front_default }
            alt={pokemon.name}
          />
          <CardDetails type={pokemon.types[0].type.name}>
            <h4>{pokemon.name}</h4>
            <hr />
            <p>
              <small>
                Tipo: {pokemon.types[0].type.name}
              </small>
            </p>
            <p>
              <small>
                Experiencia base: {pokemon.base_experience}
              </small>
            </p>
          </CardDetails>
        </CardContainer>
      ))
      }
    </Container>
  )
}

export default Card