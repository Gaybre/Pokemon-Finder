import React from 'react'
import { Container, MainSection, Image, Types } from './styles'

import Pokeball from '../../assets/img/pokeball.png'
import Type from '../Type/Type'
import PokemonRadarChart from '../RadarChart/RadarChart'

const FinderBody = ({pokemon, forGraph}) => {
  return (
    <Container>
      {pokemon.types &&
        <Types>
          <h4>Tipo:</h4>
          {pokemon.types.map(poke => (
            <Type
              key={poke.type.name}
              type={poke.type.name}
            />
          ))}
        </Types>
      }
      <MainSection>
        <div>
          <>
            {pokemon.sprites
            ?
              <>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={ pokemon.name || 'Pokemon' }
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={ pokemon.name || 'Pokemon' }
                />
              </>
            :
              <Image
                src={Pokeball}
                alt='Pokemon'
              />
            }
          </>
        </div>
        <div>
          {pokemon.types
          ?
            <PokemonRadarChart
              data={forGraph}
              type={pokemon.types[0].type.name}
            />
          : null
          }
        </div>
      </MainSection>
    </Container>
  )
}

export default FinderBody