import React from 'react'
import Navbar from '../Navbar/Navbar'

import { LayoutApp, Container } from  './styles'

const Layout = ({ children }) => {
  return (
    <LayoutApp>
      <Navbar />
      <Container>
        { children }
      </Container>
    </LayoutApp>
  )
}

export default Layout