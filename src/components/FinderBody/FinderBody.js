import React from 'react'
import { Section, Image, Types } from './styles'

import Pokeball from '../../assets/img/pokeball.png'
import Type from '../Type/Type'

const FinderBody = ({pokemon, graph}) => {
  return (
    <Section>
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
        <div>
          <h4>Tipo:</h4>
          {pokemon.types &&
            <Types>
              {pokemon.types.map(poke => (
                <Type
                  key={poke.type.name}
                  type={poke.type.name}
                />
              ))}
            </Types>
          }
        </div>
      </div>
      <div>
        <h1>
          { graph }
        </h1>
      </div>
    </Section>
  )
}

export default FinderBody