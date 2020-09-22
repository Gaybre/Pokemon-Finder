import React from 'react'
import { Section, Header } from './styles'

const Container = ({ title, children }) => {
  return (
    <Section>
      <Header>
        <h1>
          {title || 'Current Pokemon'}
        </h1>
      </Header>
      { children }
    </Section>
  )
}

export default Container