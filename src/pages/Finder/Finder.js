import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Footer } from './styles'

import Container from '../../components/Container/Container'
import FinderBody from '../../components/FinderBody/FinderBody'
import PokeButton from '../../components/Button/PokeButton'
import Notification from '../../components/Notification/Notification'
import Loader from '../../components/Loader/Loader'

import * as pokemonActions from '../../actions/pokemonActions'

const Finder = (props) => {
  const [count, setCount] = useState(1)
  const pokemon = props.currentPokemon
  const forGraph = pokemon.stats
  // [{
    // 'hp': pokemon.stats[0].base_stat,
    // 'Ataque': pokemon.stats[1].base_stat,
    // 'Defensa': pokemon.stats[2].base_stat,
    // 'Ataque especial': pokemon.stats[3].base_stat,
    // 'Defensa especial': pokemon.stats[4].base_stat,
    // 'Velocidad': pokemon.stats[5].base_stat,
  // }]

  const getNextPokemon = () => {
    const random = Math.ceil(Math.random() * 10)
    let nextItem = random + count
    if (nextItem === pokemon.id) nextItem += 1
    props.getNextPokemon(nextItem)
    setCount(count + 5)
  }

  useEffect(() => {
    if (count === 1) getNextPokemon()
  })

  const savePokemon = () => {
    props.turnNotification(true)
    props.savePokemon()
    setTimeout(() => getNextPokemon(), 2500)
    setTimeout(() => props.turnNotification(false), 3000)
  }
  // if(pokemon)console.log(pokemon.stats)
  return (
    <Container title={pokemon.name}>
      {props.loading
      ? <Loader />
      :
        <FinderBody
          pokemon={pokemon}
          forGraph={forGraph}
        />
      }
      <Footer>
        <PokeButton
          primary
          title="Capturar"
          onClick={() => savePokemon()}
        />
        <PokeButton
          title="Siguiente"
          onClick={() => getNextPokemon()}
        />
      </Footer>
      {props.notificationIsActive
      ? <Notification pokemon={pokemon.name}/>
      : null
      }
    </Container>
  )
}

const mapStateToProps = ({ pokemonReducer }) => pokemonReducer

export default connect(mapStateToProps, pokemonActions)(Finder)