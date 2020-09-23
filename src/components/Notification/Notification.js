import React from 'react'
import { Alert, Message } from './styles'

import Capturado from '../../assets/img/capturado.png'

const Notification = ({pokemon}) => {
  return (
    <Alert>
      <Message>
        <img src={Capturado} alt="Pokemon-capturado" />
        <h1>¡{pokemon} ha sido capturado!</h1>
      </Message>
    </Alert>
  )
}

export default Notification