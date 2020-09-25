import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image } from './styles'

import PokeButton from '../../components/Button/PokeButton'
import Ash from '../../assets/img/atrapalos.png'

const Home = () => {
  return (
    <Container>
      <h1>¡Atrapalos a todos!</h1>
      <div>
        <Link to="/finder">
          <PokeButton primary large title="Acceder" />
        </Link>
      </div>
      <img
        alt="QuienEsEstePokemon"
        src="https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif"
      />
      <Image src={Ash} alt="Ash" />
    </Container>
  )
}

export default Home