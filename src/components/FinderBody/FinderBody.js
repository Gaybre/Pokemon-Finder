import React from 'react'
import { Section, Image } from './styles'

const FinderBody = ({pokemon, graph}) => {
  return (
    <Section>
      <div>
        <Image src="" alt={ pokemon.name || 'Pokemon' } />
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