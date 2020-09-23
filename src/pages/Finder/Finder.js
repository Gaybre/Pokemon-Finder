import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Footer } from './styles'

import Container from '../../components/Container/Container'
import FinderBody from '../../components/FinderBody/FinderBody'
import PokeButton from '../../components/Button/PokeButton'
import Loader from '../../components/Loader/Loader'

import * as pokemonActions from '../../actions/pokemonActions'

const Finder = (props) => {
  const [count, setCount] = useState(1)
  const pokemon = props.currentPokemon

  const getNextPokemon = () => {
    const random = Math.ceil(Math.random() * 10)
    let nextItem = random + count
    // if (nextItem === pokemon.id) nextItem += 1
    props.getNextPokemon(nextItem)
    setCount(count + 5)
  }

  useEffect(() => {
    if (count === 1) getNextPokemon(1)
  }, [])

  return (
    <Container title={pokemon.name}>
      {props.loading
      ? <Loader />
      :
        <FinderBody
          pokemon={pokemon}
          graph="graph"
        />
      }
      <Footer>
        <PokeButton
          primary
          title="Capturar"
          onClick={() => props.savePokemon()}
        />
        <PokeButton
          title="Siguiente"
          onClick={() => getNextPokemon(3)}
        />
      </Footer>
    </Container>
  )
}

const mapStateToProps = ({ pokemonReducer }) => pokemonReducer

export default connect(mapStateToProps, pokemonActions)(Finder)