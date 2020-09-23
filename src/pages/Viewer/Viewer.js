import React from 'react'
import { connect } from 'react-redux'

import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'

import * as pokemonActions from '../../actions/pokemonActions'

const Viewer = (props) => {
  const list = props.pokemonsCollection

  return (
    console.log(props),
    <Container title={`${list.length} Capturados`}>
      {list.length
      ? <Card list={ list } />
      : null
      }
    </Container>
  )
}

const mapStateToProps = ({pokemonReducer}) => pokemonReducer

export default connect(mapStateToProps, pokemonActions)(Viewer)