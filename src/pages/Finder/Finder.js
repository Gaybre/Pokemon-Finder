import React from 'react'
import { connect } from 'react-redux'
import { Footer } from './styles'

import Container from '../../components/Container/Container'
import FinderBody from '../../components/FinderBody/FinderBody'
import PokeButton from '../../components/Button/PokeButton'

import * as pokemonActions from '../../actions/pokemonActions'


const Finder = (props) => {
  return (
    console.log('props', props),
    <Container title="¡Atrapalos ya!">
      <FinderBody
        pokemon="name: pikachu"
        graph="graph"
      />
      <Footer>
        <PokeButton
          primary
          title="Capturar"
          onClick={() => props.savePokemon()}
        />
        <PokeButton
          title="Siguiente"
          onClick={() => props.getNextPokemon()}
        />
      </Footer>
    </Container>
  )
}

const mapStateToProps = ({ pokemonReducer }) => pokemonReducer

export default connect(mapStateToProps, pokemonActions)(Finder)