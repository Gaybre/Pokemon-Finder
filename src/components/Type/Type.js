import React from 'react'
import { Label } from './styles'

const Type = ({type}) => (
  <Label type={type}>
    <p>
      <small>
        {type}
      </small>
    </p>
  </Label>
)

export default Type